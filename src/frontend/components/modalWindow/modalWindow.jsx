import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {handleCloseModalWindow} from '@/frontend/redux/actions/actions'
import {connect} from 'react-redux'


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

const ModalWindow = (props) => {
  //console.log('[ModalWindow][props]', props)
  const {open} = props.stateModalWindow
  const {handleCloseModalWindow} = props
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
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
          <h2 id="transition-modal-title">Transition modal</h2>
          <p id="transition-modal-description">react-transition-group animates me.</p>
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
