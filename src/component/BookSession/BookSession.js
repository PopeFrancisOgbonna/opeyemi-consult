import React from 'react';
import Styles from './BookSession.module.css';
import cx from 'classname';
import Images from '../Images/Images';


const BookSession = (props) =>{

    const hideModal =()=>{
        props.changeDisplay('');
    }

    return(
        <div className={props.display === 'book' ? cx(Styles.modalContainer): cx(Styles.hide)}>
            <div>
                <div className={cx(Styles.modalWrap)}>
                    <div className={cx(Styles.modalform)}>
                        <div >
                            <form  className="form">
                                <div className={cx(Styles.headerWrap)}>
                                    <img className={cx(Styles.goal)} src={Images.LiveGoal}  alt="message_icon" />
                                    <p className={cx(Styles.title)}>Book a Session</p>
                                    <hr />
                                </div>

                                <div className={cx(Styles.inputWrap)}>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <span className="input_name_text">Full Name</span>
                                            <input  type="text" className="form-control" placeholder="Full Name" />
                                            <span className={cx(Styles.required)}>Required *</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <span className="input_name_text">Email Address</span>
                                            <input  type="email"  className="form-control"
                                                placeholder="Email Address" />
                                            <span className={cx(Styles.required)}>Required *</span>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <span className="input_name_text">Phone Number</span>
                                            <input  type="phone" className="form-control" placeholder="Phone Number" />
                                            <span className={cx(Styles.required)}>Required *</span>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <span className="input_name_text">Message</span>
                                            <textarea  className="form-control" placeholder="Drop your message"></textarea>
                                            <span className={cx(Styles.required)}>Required *</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span>
                                            <button type="submit" className={cx(Styles.bookBtn)}>
                                                Book session
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={cx(Styles.modalImageContainer)}>
                        <span onClick={hideModal} className={cx(Styles.closeIcon)}>X</span>
                        <div >
                            <img className="imga" src={Images.MeetMe} alt="message_icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BookSession;