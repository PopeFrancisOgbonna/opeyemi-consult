import React from 'react';
import Styles from './MessageModal.module.css';
import cx from 'classname';
import Images from '../Images/Images';


const MessageModal = (props) =>{

    const hideModal = (e) =>{
        e.preventDefault();
        props.changeDisplay('')
    }
    return(
        <div  className={props.display === 'message' ? cx(Styles.outerWrap) : cx(Styles.hide)}>
            <div className={cx(Styles.innerWrap)}>
                <div>
                    <img className={cx(Styles.icons)} src={Images.MessageIcon} alt='facebook' />
                    <p className={cx(Styles.title)}>Drop your message</p>
                </div>
                <form onSubmit={hideModal}>
                    <div className={cx(Styles.inputDiv)}>
                        <p className={cx(Styles.label)}>Full Name</p>
                        <input type='text' placeholder='Full Name' />
                        <p className={cx(Styles.inst)}>Required *</p>
                    </div>
                    <div className={cx(Styles.inputDiv)}>
                        <p className={cx(Styles.label)}>Email Address</p>
                        <input type='text' placeholder='Email' />
                        <p className={cx(Styles.inst)}>Required *</p>
                    </div>
                    <div className={cx(Styles.inputDiv)}>
                        <p className={cx(Styles.label)}>Message</p>
                        <textarea cols='10' rows='4' placeholder='Drop your message' />
                        <p className={cx(Styles.inst)}>Required *</p>
                    </div>
                    <button className={cx(Styles.sendBtn)}>Send Message</button>
                </form>
            </div>
        </div>
    )
}
export default MessageModal;