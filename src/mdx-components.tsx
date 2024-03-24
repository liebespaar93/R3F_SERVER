import type { MDXComponents } from 'mdx/types'
import { ImageProps } from 'next/image'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
import {createStarryNight} from '@wooorm/starry-night'


export function useMDXComponents(components: MDXComponents): MDXComponents {

  return {
    img: (props) => (
      // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
      <img
        sizes="100vw"
        style={{ width:'100%', height: 'auto', maxWidth:'768px'}}
        {...(props)}
      />
      
    ),
    pre: (props) => (
      <pre {...(props)} style={{ width:'100%', height: 'auto', maxWidth:'768px'}}></pre>
    ),
    hr: (props) => (
      <hr {...(props)} style={{ maxWidth:'768px'}}/>
    ),
    ...components,
  }
}