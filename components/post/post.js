import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Link from 'next/link'
import Image from 'next/image'
import Meta from '../meta'
import Frontmatter from './frontmatter'
import styles from './post.module.css'

const CustomLink = ({ as, href, ...otherProps }) => {
  return (
    <Link as={as} href={href}>
      <a {...otherProps} />
    </Link>
  )
}

const CustomImage = ({ src, ...otherProps }) => {
  return <Image src={src} {...otherProps} />
}

const CustomImageBlock = ({ children }) => {
  return (
    <div className="row" style={{ margin: '20px -10vw' }}>
      {children}
    </div>
  )
}

const CustomCodeBlock = ({ syntax = 'python', children }) => {
  return (
    <div style={{ margin: '20px 0', padding: '10px 30px', overflowY: 'auto', backgroundColor: 'var(--color-monotone-background)' }}>
      <code className={`language-${syntax}`}>{children}</code>
    </div>
  )
}

const Post = ({ code, frontmatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code])
  return (
    <div>
      <Meta title={frontmatter.title} description={frontmatter.subtitle} />
      <article>
        <Frontmatter frontmatter={frontmatter} />
        <Component
          components={{
            a: CustomLink,
            img: CustomImage,
            ImageBlock: CustomImageBlock,
            CodeBlock: CustomCodeBlock,
          }}
        />
      </article>
    </div>
  )
}

export default Post
