import React, { Children } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { DEFAULT_DOC_URL } from '@/routes'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { title } from 'process'


type DocsPageProps = {

}

function LinkMdx(props: { mdx: string, title: string, className?: string } & React.PropsWithChildren) {
  return (
    <Link href={DEFAULT_DOC_URL + props.mdx} >
      <Card className={'h-auto' + props.className}>
        <CardTitle className='p-4'>
          {props.title}
        </CardTitle>
        <hr />
        <CardContent>
          {props.children}
        </CardContent>
      </Card>
    </Link>

  )
}
function DocsPage(props: DocsPageProps) {
  return (
    <div className='flex flex-col p-8 space-y-4'>
      <LinkMdx mdx="/learnmdx" title="Learn MDX">
        <div className='m-4'>
          <p>MDX에 대한 자세한 설명과 실습 코드</p>
        </div>
      </LinkMdx>
      
      <LinkMdx mdx="/learnwebsocket"  title="WebSocket">
        <div className='m-4'>
          <p>WebSocket에 대한 이해와 설명 그리고 코드</p>
        </div>
      </LinkMdx>
      
      <LinkMdx mdx="/my-mdx-page"  title="my-mdx-page">
        <div className='m-4'>
          <p>MDX 임시 가이드 페이지 입니다</p>
        </div>
      </LinkMdx>
    </div >
  )
}

DocsPage.propTypes = {}

export default DocsPage
