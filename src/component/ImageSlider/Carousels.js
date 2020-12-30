import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import Images from '../Images/Images';
import cx from 'classname';
import Styles from './ImageSlider.module.css';


const Carousels = () =>{

    return(
        <div style={{width:'60%'}}>
            <Carousel indicators={false}>
                <Carousel.Item>
                    <img
                    className=" w-100"
                    src={Images.PersonalDevelopment}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <p className={cx(Styles.text)}>Life is growth. If we stop growing, technically and spiritually, we are as good as dead.” ― Morihei Ueshiba</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className=" w-100 "
                    src={Images.PersonalDevelopment1}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <p className={cx(Styles.text)}>Personal development is a major time-saver. The better you become, the less time it takes you to achieve your goals.” ― Brian Tracy</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className=" w-100"
                    src={Images.PersonalDevelopment2}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p className={cx(Styles.text)}>The only person you are destined to become is the person you decide to be.” ― Ralph Waldo Emerson</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Carousels;