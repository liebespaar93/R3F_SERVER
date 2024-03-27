"use client"
import React, { KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import Image from 'next/image'
import { Button } from '../ui/button'
import { KeyBind, KeyCap } from '../keybind/KeyBind'
import { useWebSocket } from 'next-ws/client'
import { client_socket_update_state } from '@/lib/socket/client_msg_controll'

type SocketInfoProps = {
  userInfo: userInfo
}

function UserDetail(props: SocketInfoProps) {
  return (
    <div className='grid grid-cols-2'>
      <CardContent className='col-span-1 space-y-4'>
        <UserId {...props} />
        <InputNicname {...props} />
      </CardContent>
      <RTCForm />
    </div>
  )
}
function UserId(props: SocketInfoProps) {
  return (
    <div className='col-span-1 grid grid-cols-3'>
      <p className='my-auto'>Id</p>
      <p className='col-span-2 text-ellipsis  overflow-hidden'>{props.userInfo.id}</p>
    </div>
  )
}
function InputNicname(props: SocketInfoProps) {
  return (
    <div className='grid grid-cols-3'>
      <p className='col-span-1 text-ellipsis overflow-hidden my-auto' >
        Nickname
      </p>
      <Input className='col-span-2 text-ellipsis  overflow-hidden' placeholder={props.userInfo.nickname ?? ""} ></Input>
    </div>
  )
}

function RTCForm() {
  return (
    <CardContent>
      <p>Video</p>
      <Card className='h-full text-center flex'>
        <p className='m-auto'> ...Real Time Cam </p>
      </Card>
    </CardContent>
  )
}
function KeyBinding(props: SocketInfoProps) {
  const [ws, setWs] = useState<WebSocket | null>(useWebSocket());
  const [keyBindList, setkeyBindList] = useState<string[]>([])

  /**
   * @note key down bind 키 추가
   */
  const keydown_bind = useCallback((e: globalThis.KeyboardEvent) => {
    let key = e.keyCode.toString()
    if (e.location == e.DOM_KEY_LOCATION_RIGHT)
      key = key + '-R'
    if (!keyBindList.find((value) => value == key)) {
      const newKeyBindList = [key, ...keyBindList]
      setkeyBindList(newKeyBindList)
      if (ws)
        client_socket_update_state(ws, props.userInfo, newKeyBindList)
    }
    return;
  }, [keyBindList, props.userInfo, ws])

  /**
   * @note key up bind 키 제거
   */
  const keyup_bind = useCallback((e: globalThis.KeyboardEvent) => {
    let key = e.keyCode.toString()
    if (e.location == e.DOM_KEY_LOCATION_RIGHT)
      key = key + '-R'
    const newKeyBindList = keyBindList.filter((value) => value != key)
    setkeyBindList(newKeyBindList)
    if (ws)
      client_socket_update_state(ws, props.userInfo, newKeyBindList)
    return;
  }, [keyBindList, props.userInfo, ws])

  /**
   * @note 화면을 떠날 경우 비워줌
   */
  const blur_bind = useCallback((e: FocusEvent) => {
    setkeyBindList([])
    if (ws)
      client_socket_update_state(ws, props.userInfo, [])
    return;
  }, [props.userInfo, ws])

  useEffect(() => {
    window.addEventListener('keydown', keydown_bind);
    window.addEventListener('keyup', keyup_bind);
    window.addEventListener('blur', blur_bind);
    return () => (
      window.removeEventListener('keydown', keydown_bind),
      window.removeEventListener('keyup', keyup_bind),
      window.removeEventListener('blur', blur_bind)
    )
  }, [keydown_bind, keyup_bind, blur_bind])
  return (
    <CardContent>
      <div>Key Binding</div>
      <Card className='flex relative h-20 p-2 overflow-x-scroll  whitespace-nowrap space-x-3'>
        {keyBindList.map((value, index) =>
          <KeyCap key={index} keycode={value}></KeyCap>
        )}
      </Card>
    </CardContent>
  )
}

function SocketInfo(props: SocketInfoProps) {
  return (
    <div className='w-full h-full p-4'>
      <Card>
        <CardTitle className='p-4'>User</CardTitle>
        <hr />
        <CardContent className='mt-4 flex flex-col'>
          <UserDetail userInfo={props.userInfo} />
          <KeyBinding userInfo={props.userInfo} />
        </CardContent>
      </Card>
    </div>
  )
}

SocketInfo.propTypes = {}

export default SocketInfo
