'use client';
import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { connect } from "react-redux";
import {ACTION_TYPES} from "@/utils/enums";
import store from "../../redux/store";

function SimpleSnackbar({open, message, openSnackBar, handleClose} : {open:boolean, message:string, openSnackBar: ()=>any, handleClose:()=>any}) {

    const onClose = ()=>{
        store.dispatch({type: ACTION_TYPES.SNACK_BAR_CLOSE, payload:{description: null, extra:{}}})
    }

  const action = (
    <React.Fragment>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={handleClose}
      >
        <CloseIcon fontSize='small' />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        className=' absolute'
        open={open}
        autoHideDuration={6000}
        onClose={onClose}
        message={message}
        action={action}
      />
    </div>
  );
}


const mapStateToProps = (state: any) => {
    return {
        open: state.snackBar.snackBar.open,
        message: state.snackBar.snackBar.message,
    };
}

const dispatchToProps = (dispatch: any) => ({
    openSnackBar : () => dispatch({type: ACTION_TYPES.SNACK_BAR_OPEN, payload:{description: 'it works', extra:{}}}),
    handleClose  : () => dispatch({type: ACTION_TYPES.SNACK_BAR_CLOSE, payload:{description: null, extra:{}}})
})

export default connect(mapStateToProps,dispatchToProps)(SimpleSnackbar);