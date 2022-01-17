import Link from 'next/link'
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

// METHOD 1
// const PostList = ({ category, posts }) => {
//   const Page = ({ backgroundColor = 'transparent', stretch = false, children }) => (
//     <div style={{ backgroundColor: backgroundColor, padding: 'calc(3 * var(--website-container-border)) 0' }}>
//       <div className={stretch === true ? '' : 'container'}>{children}</div>
//     </div>
//   )
//   return (
//     <Page>
//       <h1>{category}</h1>
//       {posts.map((post, index) => (
//         <PostListItem category={category} post={post} index={index} />
//       ))}
//     </Page>
//   )
// }

// METHOD 2 (draft)
const PostList = ({ category, posts }) => (
  <div className={styles.page}>
    <h1>{category}</h1>
    {posts.map((post, index) => (
      <PostListItem category={category} post={post} index={index} />
    ))}
  </div>
)

export default PostList
