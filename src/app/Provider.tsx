'use client';

import { WebSocketProvider } from 'next-ws/client';

import React from 'react'
import PropTypes from 'prop-types'

type ProviderProps = {

} & React.PropsWithChildren

function Provider(props: ProviderProps) {
  return (
    <WebSocketProvider
      url={'ws://localhost:' + (process.env.PORT ?? '3000') + '/api/ws'}>
      {props.children}
    </WebSocketProvider>
  )
}

Provider.propTypes = {}

export default Provider
