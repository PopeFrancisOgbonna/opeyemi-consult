import React from 'react';
import Styles from './Footer.module.css';
import cx from 'classname';
import Images from '../Images/Images';


const Footer = () =>{

    return(
        <div className={cx(Styles.bg, Styles.flexDiv)}>
            <div>
                <h3 className={cx(Styles.contact)}>Contact</h3>
                <a href="#event" className={cx(Styles.links)}>ope@tosoplimited.com</a>
            </div>
            <img className={cx(Styles.logoIcon)} src={Images.Logo2} alt='logo' />
           <div className={cx(Styles.center)}>
                <img className={cx(Styles.social)} src={Images.FaceBook} alt='facebook' />
                <img className={cx(Styles.social)} src={Images.Instagram} alt='instagram' />
                <img className={cx(Styles.social)} src={Images.LinkedIn} alt="linkedin" />
           </div>
        </div>
    )
}

export default Footer;
