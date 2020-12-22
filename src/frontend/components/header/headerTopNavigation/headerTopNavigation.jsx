import React from 'react'
import styles from './headerTopNavigation.module.scss'
import HeaderTopNavigationSocial
  from '@/frontend/components/header/headerTopNavigation/headerTopNavigationSocial/headerTopNavigationSocial'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import {makeStyles} from '@material-ui/core/styles'
import {connect} from 'react-redux'
import {handleOpenModalWindow} from '@/frontend/redux/actions/actions'

const HeaderTopNavigation = (props) => {
  console.log('props', props)
  const {open} = props.stateModalWindow

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    // setOpen(true);
  };

  const handleClose = () => {
    // setOpen(false);
  };


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
        <a href="/search/">
          <i className="fas fa-search"></i>
          <span className={styles['header__top-nav__text']}>Поиск</span>
        </a>
      </li>
      <li>
        <a href="/basket/">
          <i className="fas fa-shopping-cart"></i>
          <span className={styles['header__top-nav__text']}>Корзина (<span id="basket__count">0</span>)</span>
        </a>
      </li>
      <li className={styles['menu__btn']}>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Transition modal</h2>
              <p id="transition-modal-description">react-transition-group animates me.</p>
            </div>
          </Fade>
        </Modal>
      </li>
    </ul>
  )
}

const mapStateToProps = (state) => ({
  stateModalWindow: state.modalWindowReducer
})

const mapDispatchToProps = ({
  handleOpenModalWindow
})


export default connect(mapStateToProps, mapDispatchToProps)(HeaderTopNavigation)





