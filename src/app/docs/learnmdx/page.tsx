import React from 'react'
import PropTypes from 'prop-types'
import LearnMarkdown from '@/docs/LearnMDX.mdx'
import GithubStyleMarkdown from '@/components/markdown/GithubStyleMarkdown'

function LearnMDXpage(props: any) {
  return (
    <GithubStyleMarkdown>
      <LearnMarkdown />
    </GithubStyleMarkdown>
  )
}

LearnMDXpage.propTypes = {}

export default LearnMDXpage
