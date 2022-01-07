import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPostPaths, getSinglePostData } from '../../utils/blog'
import Layout from '../../components/layout'
import Meta from '../../components/meta'
import Date from '../../components/blog/date'

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePostData(params.slug)
  return {
    props: { ...post },
  }
}

export const getStaticPaths = async () => {
  const paths = getAllPostPaths()
  return {
    paths,
    fallback: false,
  }
}

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
  const Component = useMemo(() => getMDXComponent(code), [code])
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
      </article>
    </Layout>
  )
}

export default Post
