import Link from 'next/link'
import Section from '../section/section'
import Date from './date'
import styles from './post.module.css'

const PostListItem = ({ category, post, index }) => {
  const title = <div className={styles.title}>{post.frontmatter.title}</div>
  const subtitle = <div className={styles.subtitle}>{post.frontmatter.subtitle}</div>
  const date = (
    <div className={styles.date}>
      <Date dateString={post.frontmatter.date} />
    </div>
  )

  return (
    <div key={index} className={styles.item}>
      <Link href={`/${category}/${post.slug}`}>
        <a className={styles.link}>
          {title}
          {subtitle}
          {date}
        </a>
      </Link>
    </div>
  )
}

const PostList = ({ category, posts }) => (
  <div>
    <Section>
      <h1>{category}</h1>
      {posts.map((post, index) => (
        <PostListItem category={category} post={post} index={index} />
      ))}
    </Section>
  </div>
)

export default PostList
