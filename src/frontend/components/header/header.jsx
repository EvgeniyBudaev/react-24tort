import React from 'react'
import HeaderTopNavigation from "@/frontend/components/header/headerTopNavigation";
import styles from './header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderTopNavigation />
    </div>
  )
}

export default Header
