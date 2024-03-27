"use client"

import { importantClientLog, noteClientLog, warnClientLog } from "@/lib/log/client_logger";


type socket_msg_props = {
  ws: WebSocket,
  recv: socketRecv,
  send: socketSend,
}
function send(props: socket_msg_props) {
  props.ws.send(JSON.stringify(props.send satisfies socketSend))
}

function send_back(
  props: socket_msg_props, type: string
) {
  props.send.type = type,
    props.send.sendTo = props.recv.recvFrom
  props.ws.send(JSON.stringify(props.send satisfies socketSend))
}

export function client_socket_on_msg_my_info(
  props: socket_msg_props, setUserInfo: React.Dispatch<React.SetStateAction<userInfo>>
) {
  if (!props.recv.recvFrom)
    return warnClientLog("[my_info] No user value!");
  setUserInfo({ ...props.recv.recvFrom })
}

export function client_socket_on_msg_new_user(
  props: socket_msg_props, userList: userInfo[], setUserList: React.Dispatch<React.SetStateAction<userInfo[]>>
) {
  if (!props.recv.recvFrom)
    return warnClientLog("[new_user] No recvFrom value!");
  setUserList([...userList, props.recv.recvFrom])
  send_back(props, "old_user")
}

export function client_socket_on_msg_old_user(
  props: socket_msg_props, userList: userInfo[], setUserList: React.Dispatch<React.SetStateAction<userInfo[]>>
) {
  if (!props.recv.recvFrom)
    return warnClientLog("[old_user] No recvFrom value!");
  let user = true;
  userList.forEach((value) => {
    if (value.id == props.recv.recvFrom?.id)
      user = false;
  })
  if (user)
    setUserList([...userList, props.recv.recvFrom])
}

export function client_socket_on_msg_update_user(
  props: socket_msg_props, userList: userInfo[], setUserList: React.Dispatch<React.SetStateAction<userInfo[]>>
) {
  if (!props.recv.recvFrom)
    return warnClientLog("[update_user] No recvFrom value!");

  // 깊은 복사 실험 해야함
  const newlist = userList.map((value) => {
    if (value.id == props.recv.recvFrom?.id)
      value = { ...props.recv.recvFrom };
    return value
  })
  setUserList(newlist)
}

export function client_socket_on_msg_leave_user(
  props: socket_msg_props, userList: userInfo[], setUserList: React.Dispatch<React.SetStateAction<userInfo[]>>
) {
  if (!props.recv.recvFrom)
    return warnClientLog("[leave_user] No recvFrom value!");
  const newlist = userList.filter((value) => {
    return value.id !== props.recv.recvFrom?.id
  })
  setUserList(newlist)
}

export function client_socket_update_state(ws: WebSocket, userInfo: userInfo, state: string[]) {
  ws.send(JSON.stringify({
    type: "update_user",
    sendForm: {
      ...userInfo,
      state: [...state]
    },
  } satisfies socketSend))
}
