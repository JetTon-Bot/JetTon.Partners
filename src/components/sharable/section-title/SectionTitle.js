import React from 'react'
import styles from '../section-title/SectionTitle.module.css'

const SectionTitle = ({ children }) => {
    return <h2 className={styles.title}>{children}</h2>
}

export default SectionTitle
