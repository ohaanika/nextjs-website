import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsData } from '../../lib/posts'
import Layout, { siteTitle } from '../../components/layout'
import Date from '../../components/posts/date'
import postStyles from '../../components/posts/posts.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${postStyles.headingMd} ${postStyles.padding1px}`}>
        <h2 className={postStyles.headingLg}>Blog</h2>
        <ul className={postStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={postStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={postStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
