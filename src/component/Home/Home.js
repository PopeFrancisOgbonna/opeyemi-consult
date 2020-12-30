import React, { useState } from 'react';
import cx from 'classname';
import Styles from './Home.module.css';
import Images from '../Images/Images';
import MessageModal from '../MessageModal/MessageModal';
import BookSession from '../BookSession/BookSession';


const Home = ({homeRef}) =>{
    const [display, setDisplay] = useState('');

    const changeDisplay = (item) =>{
        setDisplay(item);
    } 
    
    return(
        <div ref={homeRef}>
            <div >
                <div className={cx(Styles.flexDiv, Styles.adjust)}>
                    <img src={Images.OpeyemiShokunbi2} alt='ope' />
                    <div className={cx(Styles.v_centerH)} >
                        <h1 className={cx(Styles.owner)}>Opeyemi Shokunbi</h1>
                        <p className={cx(Styles.ownerText)}>Opeyemi Shokunbi is an Information Technology 
                            Expert in one of the leading multinational organizations 
                            in Nigeria. He has a wealth of experience in Information 
                            Technology Consultancy, Business Consultancy and Business 
                            Strategy Development. Opeyemi is a highly motivated 
                            professional who is passionate about improving the lives of 
                            others especially young ones. He constantly shares his ideas 
                            on business and personal growth and development with the world.
                        </p>
                        <button onClick={()=>changeDisplay('message')} className={cx(Styles.actionBtn)}>let's Talk</button>
                    </div>
                </div>
                <div className={cx(Styles.flexDiv, Styles.banner)}>
                    <div className={cx(Styles.v_center)}>
                        <p className={cx(Styles.boldText)}>Need clarity in your Life goals? Book a session with Opeyemi</p>
                        <button onClick={()=>changeDisplay('book')} className={cx(Styles.bookBtn)}>Book a Session</button>
                    </div>
                    <div>
                        <h1 className={cx(Styles.bannerTitle)}>RESHAPE<br /> YOUR<br /> BUSINESS</h1>
                    </div>
                </div>
                {display === 'message' ? <MessageModal display={display} changeDisplay={changeDisplay}/> : null }
                
                {display === 'book' ? <BookSession display={display} changeDisplay={changeDisplay} />: null}
            </div>
        </div>
    )
}
export default Home;