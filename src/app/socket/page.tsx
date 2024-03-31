import React from 'react';
import SocketListen from '@/components/socket/SocketListen';
import Provider from '../Provider';

export default function SocketPage() {

  return (
    <div className=' w-full h-full flex flex-col'>
        <SocketListen infomation dashboard  />
    </div>
  )
}
