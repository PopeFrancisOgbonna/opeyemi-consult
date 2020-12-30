import React, { useState } from 'react';
import Styles from './NewsLetter.module.css';
import cx from 'classname';
import AlertModal from '../AlertModal/AlertModal';


const NewsLetter = () =>{
    const [display, changeDisplay] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        changeDisplay('alert-sub');
    }

    return(
        <div className={cx(Styles.bg)}>
            <h1 className={cx(Styles.title)}>Stay informed on up-coming events</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input className={cx(Styles.inputText)} type="email" placeholder='Stay informed on up-coming events' required />
                    <button className={cx(Styles.actionBtn)}>subscribe</button>
                </div>
            </form> 
            {display === 'alert-sub' ? <AlertModal changeDisplay={changeDisplay} />  :null}
            
        </div>
    )
}
export default NewsLetter;