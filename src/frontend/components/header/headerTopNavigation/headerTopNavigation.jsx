import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import styles from './headerTopNavigation.module.scss'
import HeaderTopNavigationSocial
  from '@/frontend/components/header/headerTopNavigation/headerTopNavigationSocial/headerTopNavigationSocial'
import {handleOpenModalWindow} from '@/frontend/redux/actions/actions'


const HeaderTopNavigation = (props) => {
  //console.log('[HeaderTopNavigation][props]', props)
  const {handleOpenModalWindow} = props

  return (
    <ul className={styles['header__top-nav']}>
      <li>
        <a href="#">
          <span>8 (495) 987-37-44</span>
        </a>
        <HeaderTopNavigationSocial />
      </li>
      <li className={styles['desctop__only']}>
        <a href="/shipping-and-payment/">оплата и доставка</a>
      </li>
      <li className={styles['desctop__only']}>
        <a href="/loyalcard/">Как получить и потратить баллы</a>
      </li>
      <li>
        <span>
          <i className="fas fa-user"></i>
          <span className={styles['header__top-nav__text']} onClick={handleOpenModalWindow}>Вход / регистрация</span>
        </span>
      </li>
      <li>
        <NavLink to="/search/">
          <i className="fas fa-search"></i>
          <span className={styles['header__top-nav__text']}>Поиск</span>
        </NavLink>
      </li>
      <li>
        <a href="/basket/">
          <i className="fas fa-shopping-cart"></i>
          <span className={styles['header__top-nav__text']}>Корзина (<span id="basket__count">0</span>)</span>
        </a>
      </li>
      <li className={styles['menu__btn']}>

      </li>
    </ul>
  )
}


const mapStateToProps = (state) => ({
  stateModalWindow: state.modalWindowReducer
})

const mapDispatchToProps = ({
  handleOpenModalWindow,
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTopNavigation)





