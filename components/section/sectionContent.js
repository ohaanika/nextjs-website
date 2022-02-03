import styles from './section.module.css'

const SectionContent = ({ children }) => {
  return <div className={styles.content}>{children}</div>
}

export default SectionContent
