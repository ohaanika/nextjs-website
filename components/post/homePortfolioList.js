import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Frontmatter from './frontmatter'
import styles from './post.module.css'

const PostListItem = ({ category, post, index }) => {
  let image = null
  if ('image' in post.frontmatter) {
    image = <Image src={`/images/${category}/${post.slug}.png`} layout="fill" objectFit="cover" objectPosition="left top" />
  } else {
    image = <Image src={`/images/portfolio/admin-app.png`} layout="fill" objectFit="cover" objectPosition="left top" />
  }

  return (
    <Link key={index} href={`/${category}/${post.slug}`}>
      <a className={styles.link}>
        <div className={styles.item}>
          <div className={styles.image}>{image}</div>
          <Frontmatter frontmatter={post.frontmatter} />
        </div>
      </a>
    </Link>
  )
}

const HomePortfolioList = ({ category, posts }) => {
  const [selectedPostIndex, setSelectedPostIndex] = useState(0)

  const handleLeftClick = (e) => {
    setSelectedPostIndex((((selectedPostIndex - 1) % posts.length) + posts.length) % posts.length)
  }

  const handleRightClick = (e) => {
    setSelectedPostIndex((selectedPostIndex + 1) % posts.length)
  }

  let selectedPostImage = null
  if ('image' in posts[selectedPostIndex].frontmatter) {
    selectedPostImage = <Image src={`/images/${category}/${posts[selectedPostIndex].slug}.png`} layout="fill" objectFit="cover" objectPosition="left top" />
  } else {
    selectedPostImage = <Image src={`/images/portfolio/admin-app.png`} layout="fill" objectFit="cover" objectPosition="left top" />
  }

  return (
    <div
      className="row no-gutters"
      style={{ margin: '30px 0 0 0', width: '100%', height: '400px', padding: '30px', backgroundColor: 'var(--color-background-outer)', boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)' }}
    >
      <div className="col-4" style={{ paddingRight: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* <Frontmatter frontmatter={posts[selectedPostIndex].frontmatter} /> */}
          <h5>{posts[selectedPostIndex].frontmatter.title}</h5>
          <p>{posts[selectedPostIndex].frontmatter.subtitle}</p>
          <Link href={posts[selectedPostIndex].frontmatter.link}>Check out app →</Link>
          <Link href={`/${category}/${posts[selectedPostIndex].slug}`}>Read more →</Link>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button style={{ backgroundColor: 'var(--color-primary-light)' }} onClick={handleLeftClick}>
            ←
          </button>
          <button style={{ backgroundColor: 'var(--color-primary-light)' }} onClick={handleRightClick}>
            →
          </button>
        </div>
      </div>
      <div className="col-8" style={{ border: '2px solid var(--color-monotone-background)' }}>
        {selectedPostImage}
      </div>
    </div>
    // <div className="row no-gutters">
    //   <div className="col-9">{posts[selectedPostIndex].frontmatter.title}</div>
    //   <div className="col-3">
    //     {posts.map((post, index) => (
    //       <div key={index} data-index={index} style={{ margin: '20px 0', padding: '15px', backgroundColor: 'var(--color-monotone-background)' }} onClick={handleClick}>
    //         {post.frontmatter.title}
    //       </div>
    //     ))}
    //   </div>
    // </div>
    // <div className={styles.list}>
    //   {posts.map((post, index) => (
    //     <PostListItem category={category} post={post} index={index} />
    //   ))}
    // </div>
  )
}

export default HomePortfolioList
