import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {handleCloseModalWindow} from '@/frontend/redux/actions/actions'
import {connect} from 'react-redux'
import Login from '@/frontend/components/auth/login'


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    border: 'none',
    padding: '44px',
  },
}));

const ModalWindow = (props) => {
  const {open} = props.stateModalWindow
  const {handleCloseModalWindow} = props
  const classes = useStyles();

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleCloseModalWindow}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Login />
        </div>
      </Fade>
    </Modal>
  )
}


const mapStateToProps = (state) => ({
  stateModalWindow: state.modalWindowReducer
})

const mapDispatchToProps = ({
  handleCloseModalWindow
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow)
