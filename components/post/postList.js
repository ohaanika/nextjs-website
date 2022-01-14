import Link from 'next/link'
import Section from '../section/section'
import Date from './date'
import styles from './post.module.css'

const PostListItem = ({ category, post, index }) => {
  const title = <div className={styles.title}>{post.frontmatter.title}</div>
  const subtitle = <div className={styles.subtitle}>{post.frontmatter.subtitle}</div>

  const infoList = [
    'author' in post.frontmatter ? post.frontmatter.author : '',
    'date' in post.frontmatter ? <Date dateString={post.frontmatter.date} /> : '',
    'readTime' in post.frontmatter ? post.frontmatter.readTime : '',
  ]
  const info = (
    <div className={styles.info}>
      {infoList.map((infoItem, i, infoList) => {
        var infoSeparator = undefined
        if (infoItem && i + 1 !== infoList.length) {
          infoSeparator = <span className={styles.infoSeparator}>·</span>
        }
        return (
          <div key={i}>
            {infoItem}
            {infoSeparator}
          </div>
        )
      })}
    </div>
  )

  return (
    <div key={index} className={styles.item}>
      <Link href={`/${category}/${post.slug}`}>
        <a className={styles.link}>
          {title}
          {subtitle}
          {info}
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
