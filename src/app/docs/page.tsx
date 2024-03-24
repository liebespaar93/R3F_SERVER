import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { DEFAULT_DOC_URL } from '@/routes'


type DocsPageProps = {

}

function DocsPage(props: DocsPageProps) {
  return (
    <div className='flex flex-col'>
      <Link href={DEFAULT_DOC_URL + '/learnmdx'}>
        Learnmdx
      </Link>
      <Link href={DEFAULT_DOC_URL + '/my-mdx-page'}>
        my-mdx-page
      </Link>
    </div>
  )
}

DocsPage.propTypes = {}

export default DocsPage
