import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ServerInfo from '@/components/info/ServerInfo'
import GithubStyleMarkdown from '@/components/markdown/GithubStyleMarkdown'
import Rule_WS from '@/docs/Rule_WS.mdx'

type SiteInfoProps = {

}

function SiteInfo(props: SiteInfoProps) {
  return (
    <div className='w-full overflow-scroll'>
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
        <CardContent className=''>
          <GithubStyleMarkdown>
            <Rule_WS />
          </GithubStyleMarkdown>
        </CardContent>
      </Card>
    </div>
  )
}

SiteInfo.propTypes = {}

export default SiteInfo
