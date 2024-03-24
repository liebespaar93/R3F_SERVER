import React from 'react'
import PropTypes from 'prop-types'
import "@/components/markdown/github-markdown.css";

function GithubStyleMarkdown({ children }: { children: React.ReactNode }) {

  return <div className='markdown-body'>{children}</div>
}

GithubStyleMarkdown.propTypes = {}

export default GithubStyleMarkdown
