import React from 'react'
import Link from 'next/link'
import { getMDXComponent } from 'mdx-bundler/client'
import { getAllPosts, getSinglePost } from '../../utils/posts_mdx'
import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/posts/date'
import postStyles from '../../components/posts/posts.module.css'

const CustomLink = ({ as, href, ...otherProps }) => {
  return (
    <Link as={as} href={href}>
      <a {...otherProps} className="custom-link" />
    </Link>
  )
}

const Post = ({ code, frontmatter }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <article>
        <h1 className={postStyles.headingXl}>{frontmatter.title}</h1>
        <div className={postStyles.lightText}>
          <Date dateString={frontmatter.date} />
        </div>
        <Component
          components={{
            a: CustomLink,
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
