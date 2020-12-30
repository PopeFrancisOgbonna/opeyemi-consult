import React, { useState } from 'react';
import Styles from './Consultation.module.css';
import cx from 'classname';
import Images from '../Images/Images';



const Consultation = ({consultRef}) =>{

    const [item, setItem] = useState('');

    const selectItem = (item) =>{
        setItem(item);
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        selectItem('next');
    }

    return(
        <div ref={consultRef}>
            <div className={cx(Styles.flexDiv, Styles.profileWrap)}>
                <img className={cx(Styles.profile)} src={Images.OpeyemiShokunbi} alt='profile' />
                <div className={cx(Styles.contentText)}>
                    <h3>Business Consultation Form</h3>
                    <hr />
                    <p>
                        Let's focus on your most critical issues and opportunities: strategy, 
                        marketing, organization, operations, technology, transformation, digital, 
                        advanced analytics, corporate finance, mergers & acquisitions and sustainability 
                        across your industries and geographies.
                    </p>
                    <hr />
                </div>
            </div>
            <div className={ item ==='' ?cx(Styles.formWrap): cx(Styles.hide)}>
                <form onSubmit={handleSubmit}>
                    <p className={cx(Styles.inst)}>Every field with the <span className={cx(Styles.require)}>required (*)</span> marker is compulsory</p>
                    <div className={cx(Styles.flexDiv)}>
                        <div className={cx(Styles.inputDiv)}>
                            <input type='text' placeholder='First Name' required/>
                            <p className={cx(Styles.require)}>Required *</p>
                        </div>
                        <div className={cx(Styles.inputDiv)}>
                            <input type='text' placeholder='Last Name' required/>
                            <p className={cx(Styles.require)}>Required *</p>
                        </div>
                    </div>
                    <div className={cx(Styles.flexDiv)}>
                        <div className={cx(Styles.inputDiv)}>
                            <input type='text' placeholder='Phone Number' required/>
                            <p className={cx(Styles.require)}>Required *</p>
                        </div>
                        <div className={cx(Styles.inputDiv)}>
                            <input type='email' placeholder='Email address' required/>
                            <p className={cx(Styles.require)}>Required *</p>
                        </div>
                    </div>
                    <button className={cx(Styles.cBtn)}>Continue</button>
                </form>
            </div>
            <div className={item !== '' ? cx(Styles.formWrap):cx(Styles.formWrap, Styles.hide)}>
                <div className={cx(Styles.wraps)}>
                    <h3>Additional Information</h3>
                    <hr />
                    <form>
                        <p className={cx(Styles.insts)}>Leave a message</p>
                        <textarea cols='3' rows='5' placeholder='welcome' />
                    </form>
                    <div className={cx(Styles.flexDiv)}>
                        <button onClick={()=>selectItem('')} className={cx(Styles.cBtn)}>Back</button>
                        <button className={cx(Styles.cBtn)}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Consultation;