// app/api/ws/route.ts (can be any route file in the app directory)
import ws from 'ws'
import http from 'http'
import { NextRequest, NextResponse } from "next/server";
import { socket_close_safe, socket_connect_new_user, socket_connect_old_user, socket_send_msg, socket_update_user } from '@/lib/socket/server_msg_controll';
import { errorServerLog, importantServerLog, } from '@/lib/log/server_logger';


let userlist = new Map<string, userInfo | undefined>();
let socketlist = new Map<string, ws.WebSocket | undefined>();

export function SOCKET(
  client: ws.WebSocket,
  request: http.IncomingMessage,
  server: ws.WebSocketServer,
) {
  importantServerLog('A client connected!');
  const socket_id = request.headers['sec-websocket-key'];
  if (!socket_id)
    return;
  userlist.set(socket_id, { id: socket_id, nickname: 'No nickname' });
  socketlist.set(socket_id, client)

  /**
   * @note open 리스너
   * @breif 작동하지 않음
   */
  client.on('open', () => {
    importantServerLog('client open')
  })

  /**
   * @note error 리스너
   */
  client.on('error', () => {
    importantServerLog('client Error')
  })

  /**
   * @note close 리스너
   */
  client.on('close', () => {
    importantServerLog('A client disconnected!');
    const socket_id = request.headers['sec-websocket-key'];
    if (!socket_id)
      return errorServerLog("[api/ws] close block!", "can't find sec-websocket-key");
    socket_close_safe({
      client, server,
      send: { type: "user_out", sendForm: { id: socket_id } },
      recv: { type: "user_out", recvFrom: { id: socket_id } }
    }, socket_id, userlist);
  });

  /**
   * @note message 리스너
   */
  client.on('message', async (message) => {
    const socket_id = request.headers['sec-websocket-key'];
    if (!socket_id)
      return errorServerLog("[api/ws] message block!", "can't find sec-websocket-key");

    const msg = message.toString()
    const send: socketSend = await JSON.parse(msg);
    const recv: socketRecv = { type: send.type, recvFrom: send.sendForm };

    if ('onOpen' == send.type || !send.sendForm.id)
      return socket_connect_new_user({ client, server, send, recv }, socket_id, userlist);
    if ('update_user' == send.type)
      return socket_update_user({ client, server, send, recv }, userlist);
    if ("old_user" == send.type && send.sendTo)
      return socket_connect_old_user({ client, server, send, recv }, socketlist);
    if ("msg" == send.type)
      return socket_send_msg({ client, server, send, recv });

  });

}

export function GET(req: NextRequest) {
  importantServerLog("api[ws] : ", req)
  return NextResponse.json({
    socket: "next-ws",
    message: "here is for connect WebSocket with next-ws"
  })
}