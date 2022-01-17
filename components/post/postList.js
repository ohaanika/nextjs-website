import Link from 'next/link'
import Section from '../section/section'
import Frontmatter from './frontmatter'
import styles from './post.module.css'

const PostListItem = ({ category, post, index }) => {
  return (
    <div key={index} className={styles.item}>
      <Link href={`/${category}/${post.slug}`}>
        <a className={styles.link}>
          <Frontmatter frontmatter={post.frontmatter} />
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
