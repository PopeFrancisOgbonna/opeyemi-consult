import React, { useState } from 'react';
import Styles from './CurrentEvents.module.css';
import cx from 'classname';
import Images from '../Images/Images';
import EventForm from './EventForm';


const CurrentEvents = ({eventRef}) =>{
    const [show, setShow] = useState(false);
    const [program, setProgram] =useState({});
    
    const joinEvent = (obj) =>{
        let visible = obj.visible;
        setShow(visible);
        setProgram({title:obj.title, subtitle:obj.subtitle});
    }
    const dismiss = () =>{
        setShow(false);
    }
    return(
        <div ref={eventRef} className={cx(Styles.containerDiv)}>
            <h2 className={cx(Styles.main_title)}>Current Programmes</h2>
            <div className={cx(Styles.flexDiv)}>
                <div className={cx(Styles.cards)}>
                    <div className={cx(Styles.flexDiv)}>
                        <img className={cx(Styles.icons)} src={Images.Question} alt="questionIcon" />
                        <div className={cx(Styles.content)}>
                            <h1 className={cx(Styles.titleText)}>Who am I?</h1>
                            <p className={cx(Styles.contentText)}>Delivered via Telegram & Zoom. 
                                Plus personal coaching session with Opeyemi Shokunbi.
                            </p>
                        </div>
                    </div>
                    <p className={cx(Styles.cards_p)}>Self discovery coaching session</p>
                    <button onClick={()=>joinEvent({visible:true,title:'Who am I?', subtitle:'Self discovery coaching session'})} className={cx(Styles.join)}>Join</button>
                </div>
                <div className={cx(Styles.cards)}>
                    <div className={cx(Styles.flexDiv)}>
                        <img className={cx(Styles.icons)} src={Images.Binocular} alt="questionIcon" />
                        <div className={cx(Styles.content)}>
                            <h1 className={cx(Styles.titleText)}>Discovering Purpose</h1>
                            <p className={cx(Styles.contentText)}>Delivered via Telegram & Zoom. 
                                Plus personal coaching session with Opeyemi Shokunbi.
                            </p>
                        </div>
                    </div>
                    <p className={cx(Styles.cards_p)}>Understanding why I'm on earth</p>
                    <button onClick={()=>joinEvent({visible:true,title:'Discovering Purpose', subtitle:"Understanding why I'm on earth"})} className={cx(Styles.join)}>Join</button>
                </div>
                <div className={cx(Styles.cards, Styles.teleBg)}>
                    <div className={cx(Styles.flexDiv, Styles.telegramDiv)}>
                        <img className={cx(Styles.icons)} src={Images.Telegram} alt="questionIcon" />
                        <div className={cx(Styles.content, Styles.telegram)}>
                            <h1>Join our Telegram Group</h1>
                            <p>Delivered via Telegram & Zoom. Plus personal coaching sessions.</p>
                        </div>
                    </div>
                    <button className={cx(Styles.join)}>Join</button>
                </div>
            </div>
            <EventForm show={show} program={program} dismiss={dismiss}/>
        </div>
    )
}

export default CurrentEvents;