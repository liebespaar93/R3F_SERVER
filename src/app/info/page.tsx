"use client"

import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CodeBlockComponent, CopyBlockComponent } from '@/components/codeblock/MyCodeComponet'
import ServerInfo from '@/components/info/ServerInfo'
import dynamic from 'next/dynamic'

const ComponentB = dynamic(() => import('@/components/info/ServerInfo'))

type SiteInfoPageProps = {

}


function Test() {
  return (
    <CardContent className='mt-4'>
        <p>하위 코드를 참조하세요</p>
        <ComponentB />
        <CopyBlockComponent text={"//소켓 통신을 위한 코드입니다"} language='js' showLineNumbers={true} />
      <p className='text-sm' color='#333' >통신을 위한 정보입니다</p>
    </CardContent>
  )
}

function SiteInfoPage(props: SiteInfoPageProps) {
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
        <Test>
        </Test>
      </Card>
    </div>
  )
}

SiteInfoPage.propTypes = {}

export default SiteInfoPage
