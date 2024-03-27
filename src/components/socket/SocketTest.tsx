import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../ui/button'
import Link from 'next/link'
type SocketTestProps = {

}

function SocketTest(props: SocketTestProps) {
  return (
    <div>
      <Link href={'/socket'}>
        <Button >Go to</Button>
      </Link>
    </div>
)
}

SocketTest.propTypes = {}

export default SocketTest
