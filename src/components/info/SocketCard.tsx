import React from 'react'
import PropTypes from 'prop-types'
import { CardTitle } from '@/components/ui/card'


type SocketCardProps = {
  title: string,

} & React.PropsWithChildren

function SocketCard(props: SocketCardProps) {
  props.children
  return (
    <div>
      <CardTitle className='text-base'>{props.title}</CardTitle>
      <div className='p-2 space-y-2'>
        {props.children}
      </div>
    </div>
  )
}

SocketCard.propTypes = {}

export default SocketCard
