import React from 'react';
import cx from 'classname';
import Styles from './EventForm.module.css';


const EventForm = (props) =>{

    return(
        <div className={props.show === true? cx(Styles.outerWrap) : cx(Styles.hide)}>
            <h1>{props.program.title}</h1>
            <h4>{props.program.subtitle}</h4>
            <form>
                <div className={cx(Styles.formWrap)}>
                    <div className={cx(Styles.inputDiv)}>
                        <input type='text' placeholder='First Name' required /><br />
                        <p>Required *</p>
                        
                    </div>
                    <div className={cx(Styles.inputDiv)}>
                        <input type='text' placeholder='Last Name' required /><br />
                        <p>Required *</p>
                    </div>
                </div>
                <div className={cx(Styles.formWrap)}>
                    <div className={cx(Styles.inputDiv)}>
                        <input type='text' placeholder='Whatsapp Number' required /><br />
                        <p>Required *</p>
                    </div>
                    <div className={cx(Styles.inputDiv)}>
                        <input type='email' placeholder='Email Address' required /><br />
                        <p>Required *</p>
                    </div>
                </div>
                <button  className={cx(Styles.regBtn)}>Register</button>
            </form>
        </div>
    )
}
export default EventForm;