import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ServerInfo from '@/components/info/ServerInfo'

type SiteInfoProps = {

}

function SiteInfo(props: SiteInfoProps) {
  return (
    <div>
      <Card className='w-full p-4 m-4'>
        <CardHeader>
          <CardTitle className='m-auto'>
            R3F 실습 서버
          </CardTitle>
          <CardDescription className='pt-2' color='#333'>
            공용 통신을 하기위한 서버입니다
          </CardDescription>
        </CardHeader>
        <hr />
        <ServerInfo />
        <CardContent className='mt-4'>
          <p>하위 코드를 참조하세요</p>
          <p className='text-sm' color='#333' >통신을 위한 정보입니다</p>
        </CardContent>
      </Card>
    </div>
  )
}

SiteInfo.propTypes = {}

export default SiteInfo
