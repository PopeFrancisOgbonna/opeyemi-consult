import React from 'react';
import Styles from './AlertModal.module.css';
import cx from 'classname';
import Images from '../Images/Images';


const AlertModal = (props) =>{
    return(
        <div className={cx(Styles.outerWrap)}>
            <div className={cx(Styles.innerWrap)}>
                <img className={cx(Styles.icon)} src={Images.Success} alt='alert' />
                <p>Message Sent Successfully.</p>
                <button onClick={()=>props.changeDisplay('')} className={cx(Styles.Btn)}>OK</button>
            </div>
        </div>
    )
}
export default AlertModal;