import { parseISO, format } from 'date-fns'
import styles from './post.module.css'

const Date = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

const Frontmatter = ({ frontmatter }) => {
  const title = <div className={styles.title}>{frontmatter.title}</div>
  const subtitle = <div className={styles.subtitle}>{frontmatter.subtitle}</div>

  const infoList = [
    'author' in frontmatter && frontmatter.author ? frontmatter.author : '',
    'date' in frontmatter && frontmatter.date ? <Date dateString={frontmatter.date} /> : '',
    'readTime' in frontmatter && frontmatter.readTime ? frontmatter.readTime : '',
  ]
  const info = (
    <div className={styles.info}>
      {infoList.map((infoItem, i, infoList) => {
        let infoSeparator = null
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
    <div className={styles.frontmatter}>
      {title}
      {subtitle}
      {info}
    </div>
  )
}

export default Frontmatter
