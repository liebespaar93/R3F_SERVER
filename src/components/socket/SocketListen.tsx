'use client';

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useWebSocket } from 'next-ws/client';
import { DEFAULT_SOCKET_URL } from '@/routes';
import { client_socket_on_msg_my_info, client_socket_on_msg_new_user, client_socket_on_msg_old_user, client_socket_on_msg_update_user, client_socket_on_msg_leave_user } from '@/lib/socket/client_msg_controll';
import { errorClientLog, importantClientLog, noteClientLog, tipClientLog } from '@/lib/log/client_logger';
import SocketDashBoard from '@/components/socket/SocketDashboard';
import SocketInfo from '@/components/socket/SocketInfo';

type SocketListenProps = {
  infomation? :boolean
  dashboard? :boolean
} & React.PropsWithChildren

export default function SocketListen(props: SocketListenProps) {
  /*** socket setting start ***/
  const [ws, setWs] = useState<WebSocket | null>(useWebSocket());
  //redux 필요
  const [userInfo, setUserInfo] = useState<userInfo>({ id: '', nickname: 'No Nickname' });
  const [userList, setUserList] = useState<userInfo[]>([]);
  const [tryConnect, setTryConnect] = useState(0);

  /**
   * @props ev: Event
   * @socket on open
   * @note 접속 성공시 전달하는 메세지 입니다.
   * - 서버에서 socket id를 요청 합니다.
   */
  const onOpen = useCallback((ev: Event) => {
    importantClientLog("onOpen listen", ev);
    if (!ws)
      return;
    ws.send(JSON.stringify({ type: 'onOpen', sendForm: { id: '' } } satisfies socketSend))
    setTryConnect(0);
  }, [ws]);

  /**
   * @props ev: Event
   * @socket on error
   * @note 에러 메세지를 처리합니다
   * - socket의 id 가 없을때
   * - 서버와 통신이 안될때
   */
  const onError = useCallback((ev: Event) => {
    importantClientLog("onError listen", ev)
  }, []);

  /**
   * @props ev: CloseEvent
   * @socket on close
   * @note 에러 메세지를 처리합니다
   * - socket의 id 가 없을때
   * - 서버와 통신이 안될때
   */
  const onClose = useCallback((ev: CloseEvent) => {
    importantClientLog("onClose listen", ev)
    setTimeout(() => {
      if (tryConnect > 5)
        return errorClientLog("can't Reconnect server", "close socket");
      noteClientLog('Try Reconnect server', tryConnect)
      setTryConnect(tryConnect + 1);
      setWs(new WebSocket(DEFAULT_SOCKET_URL));
    }, 1000);
  }, [tryConnect])

  /**
   * @props ev: MessageEvent<Blob>
   * @socket on message
   * @note 수신 메세지를 처리합니다
   * - Connect Server
   * @need blob을 사용하여 나중에 데이터 쪼개 보내기 필요
   */
  const onMessage = useCallback(async (ev: MessageEvent<Blob>) => {
    importantClientLog("onMessage listen")
    if (!ws)
      return;
    const text: string = await ev.data.text()
    const recv: socketRecv = await JSON.parse(text);
    // tipClientLog(recv);
    const send: socketSend = { type: recv.type, sendForm: userInfo };

    if (recv.type == 'my_info')
      return client_socket_on_msg_my_info({ ws, recv, send }, setUserInfo)
    if (recv.type == 'new_user')
      return client_socket_on_msg_new_user({ ws, recv, send }, userList, setUserList)
    if (recv.type == 'old_user')
      return client_socket_on_msg_old_user({ ws, recv, send }, userList, setUserList)
    if (recv.type == 'update_user')
      return client_socket_on_msg_update_user({ ws, recv, send }, userList, setUserList)
    if (recv.type == 'leave_user')
      return client_socket_on_msg_leave_user({ ws, recv, send }, userList, setUserList)
  }, [userInfo, userList, ws]);

  /**
   * @note ws 페이지설정
   * @tip onload 와 unload를 감지하여 eventlistener를 설정합니다
   */
  useEffect(() => {
    if (ws) {
      ws.addEventListener('open', onOpen)
      ws.addEventListener('message', onMessage);
      ws.addEventListener('error', onError);
      ws.addEventListener('close', onClose);
      return () => {
        ws.removeEventListener('open', onOpen);
        ws.removeEventListener('message', onMessage);
        ws.removeEventListener('error', onError);
        ws.removeEventListener('close', onClose);
      }
    }
  }, [onOpen, onMessage, onError, onClose, ws])

  /*** socket setting done ***/
  return (
    <div className=' w-full h-full flex flex-col'>
      {props.infomation ? <SocketInfo  userInfo={userInfo} />: undefined  }
      {props.dashboard ? <SocketDashBoard userList={userList} />: undefined }
      {props.children}
    </div>
  )
}
