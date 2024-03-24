import React from 'react'
import PropTypes from 'prop-types'
import { CardContent } from '@/components/ui/card'

type ServerInfoProps = {

}


function ServerInfo(props: ServerInfoProps) {

  return (
    <CardContent className='mt-4'>
      <div>ServerInfo</div>
      <p>{process.pid}</p>
    </CardContent>
  )
}

ServerInfo.propTypes = {}

export default ServerInfo
