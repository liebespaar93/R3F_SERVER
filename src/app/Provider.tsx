'use client';

import { WebSocketProvider } from 'next-ws/client';

import React from 'react'
import { DEFAULT_SOCKET_URL } from '@/routes';

type ProviderProps = {

} & React.PropsWithChildren

function Provider(props: ProviderProps) {
  return (
    <>
      <WebSocketProvider
        url={DEFAULT_SOCKET_URL}>
        {props.children}
      </WebSocketProvider>
    </>
  )
}

Provider.propTypes = {}

export default Provider
