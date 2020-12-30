import React from "react";
import Images from '../Images/Images';
import Carousels from './Carousels';
import cx from 'classname';
import Styles from './ImageSlider.module.css';


const ImageSlider = () =>{

    return(
        <div className={cx(Styles.flexDiv)}>
            <img  className={cx(Styles.pix)} src={Images.Careers} alt="career" />
            <Carousels  />        
        </div>
    )
}


export default ImageSlider;