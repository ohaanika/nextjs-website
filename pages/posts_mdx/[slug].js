import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getMDXComponent } from 'mdx-bundler/client'
import { getAllPosts, getSinglePost } from '../../utils/posts_mdx'
import Head from 'next/head'
import Layout from '../../components/layout'
import Meta from '../../components/meta'
import Date from '../../components/posts/date'

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
    <div className="row" style={{ margin: '40px -100px' }}>
      {children}
    </div>
  )
}

const CustomCodeBlock = ({ syntax = 'python', children }) => {
  return (
    <div style={{ margin: '40px -100px', padding: '20px 40px', overflowY: 'auto', backgroundColor: 'var(--color-primary-background)' }}>
      <code className={`language-${syntax}`}>{children}</code>
    </div>
  )
}

const Post = ({ code, frontmatter }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  return (
    <Layout>
      <Meta title={frontmatter.title} description={frontmatter.title} />
      <article>
        <div>
          <h1>{frontmatter.title}</h1>
          <div>
            <Date dateString={frontmatter.date} />
          </div>
        </div>
        <br />
        <Component
          components={{
            a: CustomLink,
            img: CustomImage,
            ImageBlock: CustomImageBlock,
            CodeBlock: CustomCodeBlock,
          }}
        />
        {/* <div dangerouslySetInnerHTML={{ __html: frontmatter.contentHtml }} /> */}
      </article>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug)
  return {
    props: { ...post },
  }
}

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}

export default Post
