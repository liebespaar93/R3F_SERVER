import React from 'react'
import PropTypes from 'prop-types'
import LearnMarkdown from '@/docs/LearnWebSocket.mdx'
import GithubStyleMarkdown from '@/components/markdown/GithubStyleMarkdown'

function LearnWebSocketPage(props: any) {
  return (
    <GithubStyleMarkdown>
      <LearnMarkdown />
    </GithubStyleMarkdown>
  )
}

LearnWebSocketPage.propTypes = {}

export default LearnWebSocketPage
