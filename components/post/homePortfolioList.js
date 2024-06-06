import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Frontmatter from './frontmatter'
import styles from './post.module.css'

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
    <div className={styles.slideshow}>
      <div className={styles.slideshowDescription}>
        <div className={styles.slideshowText}>
          <Frontmatter frontmatter={posts[selectedPostIndex].frontmatter} />
          <Link href={`/${category}/${posts[selectedPostIndex].slug}`}>Read more</Link>
          <a
             href={posts[selectedPostIndex].frontmatter.link}
             target={"_blank"}
             rel={"noreferrer"}>Check out app
           </a>
        </div>
        <div className={styles.slideshowArrows}>
          <button onClick={handleLeftClick}>←</button>
          <button onClick={handleRightClick}>→</button>
        </div>
      </div>
      <div className={styles.slideshowImage}>{selectedPostImage}</div>
      <div className={styles.slideshowArrowsColumn}>
        <button onClick={handleLeftClick}>←</button>
        <button onClick={handleRightClick}>→</button>
      </div>
    </div>
  )
}

export default HomePortfolioList
