import React from 'react'
import PropTypes from 'prop-types'
import LearnMarkdown from '@/docs/LearnMDX.mdx'
import GithubStyleMarkdown from '@/components/markdown/GithubStyleMarkdown'

function LearnMDXPage(props: any) {
  return (
    <GithubStyleMarkdown>
      <LearnMarkdown />
    </GithubStyleMarkdown>
  )
}

LearnMDXPage.propTypes = {}

export default LearnMDXPage
