import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { DarkMode } from '@/components/theme/DarkMode'
import { DEFAULT_DOC_URL } from '@/routes'

type RootTemplateProps = {

} & React.PropsWithChildren
function RootTemplate(props: RootTemplateProps) {

  return (
    <div>
      <div className='flex flex-row border-b-4 p-4'>
        <Link href='/'><div className='w-auto text-3xl '> R3F </div></Link>
        <div className='ml-auto space-x-5 space-x-reverse flex flex-row-reverse'>
          <DarkMode />
          <Link href={DEFAULT_DOC_URL} className='m-auto'>Docs</Link>
        </div>
      </div>
      {props.children}
    </div>
  )
}

RootTemplate.propTypes = {}

export default RootTemplate
