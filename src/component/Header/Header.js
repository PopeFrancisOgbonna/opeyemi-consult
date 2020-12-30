import React from 'react';
import Styles from './Header.module.css';
import cx from 'classnames'
import Images from '../Images/Images';


const Header = (props) =>{

    return(
        <div className={cx(Styles.headerDiv)}>
            <img src={Images.Logo} alt="logo" />
            <ul >
                <li className={cx(Styles.list)} onClick={props.scrollHome}>Home</li>
                <li className={cx(Styles.list)} onClick={props.scrollsEvents}>Events</li>
                <li className={cx(Styles.list, Styles.actionBtn)} onClick={props.handleConsult} >
                    Business Consultation
                </li>
            </ul>
        </div>
    )
}

export default Header;