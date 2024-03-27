import { IncomingMessage } from "http";
import { WebSocket, WebSocketServer } from "ws";
import { errorServerLog, warnServerLog } from "../log/server_logger";

type socket_msg_props = {
  client: WebSocket,
  server: WebSocketServer,
  send: socketSend,
  recv: socketRecv
}

function send_me(props: socket_msg_props, type?: string) {
  props.recv.type = type ?? props.recv.type
  props.client.send(JSON.stringify(props.recv satisfies socketRecv), { binary: true });
}

function send_all(props: socket_msg_props, type?: string) {
  props.recv.type = type ?? props.recv.type
  props.server.clients.forEach((value, value2, set) => {
    value.send(JSON.stringify(props.recv satisfies socketRecv), { binary: true })
  })
}

function send_with_out_me(props: socket_msg_props, type?: string) {
  props.recv.type = type ?? props.recv.type
  props.server.clients.forEach((value, value2, set) => {
    if (props.client != value)
      value.send(JSON.stringify(props.recv satisfies socketRecv), { binary: true })
  })
}

function send_to_user(props: socket_msg_props, sendTo: WebSocket, type?: string) {
  props.recv.type = type ?? props.recv.type
  sendTo.send(JSON.stringify(props.recv satisfies socketRecv
  ), { binary: true })
}

function send_my_info(props: socket_msg_props, userInfo: userInfo) {
  props.recv.recvFrom = userInfo;
  send_me(props, 'my_info')
}



export function socket_connect_new_user(
  props: socket_msg_props, socket_id: string, userlist: Map<string, userInfo | undefined>
) {
  const newUser: userInfo = { id: socket_id, nickname: 'No nickname' }
  userlist.set(socket_id, { ...newUser })
  send_my_info(props, newUser);
  send_with_out_me(props, 'new_user')
}

export function socket_connect_old_user(props: socket_msg_props, socketlist: Map<string, WebSocket | undefined>,) {
  if (!props.send.sendTo?.id)
    return errorServerLog("[api/sw] : no socket id")
  const sendTo = socketlist.get(props.send.sendTo.id)
  if (!sendTo)
    return warnServerLog("[api/sw] send block! ", "can not find id ", props.send.sendTo.id);
  send_to_user(props, sendTo)
}


export function socket_update_user(props: socket_msg_props, userlist: Map<string, userInfo | undefined>) {
  const user = userlist.get(props.send.sendForm.id);

  if (!user)
    return errorServerLog("[api/sw] socket_update_user() : no user");
  user.nickname = props.send.sendForm.nickname;
  user.room = props.send.sendForm.room;
  user.state = props.send.sendForm.state;
  props.recv.recvFrom = user;
  send_all(props, 'update_user');
}

export function socket_close(props: socket_msg_props) {
  send_all(props, 'leave_user');
}


export function socket_send_msg(props: socket_msg_props) {

  send_all(props, 'msg');
}



export function socket_close_safe(props: socket_msg_props, socket_id: string, userlist: Map<string, userInfo | undefined>) {
  function safe_close(deep: number) {
    if (deep < 5) {
      const user = userlist.get(socket_id);
      if ((!user || !user.id))
        return setTimeout(() => { safe_close(deep + 1) }, 1000);
    }
    socket_close(props)
  }
  safe_close(0);
  userlist.delete(socket_id)
}