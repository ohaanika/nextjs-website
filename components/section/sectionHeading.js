import styles from './section.module.css'

const SectionHeading = ({ children }) => {
  return <div className={styles.heading}>{children}</div>
}

export default SectionHeading
