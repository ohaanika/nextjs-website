import Link from 'next/link'
import { getAllPosts } from '../../utils/posts_mdx'
import Layout from '../../components/layout'
import Meta from '../../components/meta'
import Section from '../../components/section'
import SectionContentBlock from '../../components/sectionContentBlock'
import Date from '../../components/posts/date'

export default function BlogList({ posts }) {
  return (
    <Layout>
      <Meta />
      <Section>
        <div>
          <h3>Blog</h3>
          <div>
            {posts.map((post, index) => (
              <div key={index} style={{ margin: '20px 0', lineHeight: 1.5 }}>
                <Link href={`/posts_mdx/${post.slug}`}>
                  <a style={{ fontSize: '1rem', fontWeight: 'var(--font-weight-normal)', textDecoration: 'none', color: 'var(--color-text)' }}>
                    <div className="row" style={{ fontSize: '1.25em', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-primary)' }}>
                      {post.frontmatter.title}
                    </div>
                    <div className="row" style={{}}>
                      <Date dateString={post.frontmatter.date} />
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* <div>
          <h2>Blog</h2>
          <ul>
            {posts.map((post, index) => (
              <li key={index}>
                <Link href={`/posts_mdx/${post.slug}`}>
                  <a>{post.frontmatter.title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={post.frontmatter.date} />
                </small>
              </li>
            ))}
          </ul>
        </div> */}
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
