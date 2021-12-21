import Link from 'next/link'
import { getAllPosts } from '../../utils/posts_mdx'
import Layout from '../../components/layout'
import Section from '../../components/section'
import Date from '../../components/posts/date'
import postStyles from '../../components/posts/posts.module.css'

export default function BlogList({ posts }) {
  return (
    <Layout>
      <Section>
        <div className={`${postStyles.headingMd} ${postStyles.padding1px}`}>
          <h2 className={postStyles.headingLg}>Blog</h2>
          <ul className={postStyles.list}>
            {posts.map((post, index) => (
              <li className={postStyles.listItem} key={index}>
                <Link href={`/posts_mdx/${post.slug}`}>
                  <a>{post.frontmatter.title}</a>
                </Link>
                <br />
                <small className={postStyles.lightText}>
                  <Date dateString={post.frontmatter.date} />
                </small>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </Layout>
    // <div className="wrapper">
    //   <ul>
    //     {posts.map((post, index) => (
    //       <li key={index}>
    //         <Link href={`posts_mdx/${post.slug}`}>{post.frontmatter.title}</Link>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  )
}

export const getStaticProps = async () => {
  const posts = getAllPosts()

  return {
    props: { posts },
  }
}
