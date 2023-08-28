import React, { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return ( 
        <div className={classes.backdrop}></div>
     );
}
const Overlay = (props) => {
    return ( 
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
     );
}

const portalOverlay = document.getElementById('overlay');

const Modal = (props) => {
    return ( 
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalOverlay)}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portalOverlay )}
            

        </Fragment>
     );
}

export default Modal

