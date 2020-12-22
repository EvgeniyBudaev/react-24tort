import React from 'react'
import HeaderTopNavigation from "@/frontend/components/header/headerTopNavigation";
import styles from './header.module.scss'
import ModalWindow from '@/frontend/components/modalWindow/modalWindow'


const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderTopNavigation />
      <ModalWindow />
    </div>
  )
}

export default Header
