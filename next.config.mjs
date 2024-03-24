import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkStringify from 'remark-stringify'

import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

import rehypeStarryNight from './config/rehype-starry-night.js'
import { rehypeGithubAlerts } from 'rehype-github-alerts'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
      remarkParse,
      remarkGfm,
      remarkRehype,
      remarkStringify,
      remarkFrontmatter,
      remarkMdxFrontmatter
    ],
    rehypePlugins: [rehypeStarryNight, rehypeGithubAlerts],
  },
})

export default withMDX(nextConfig);
