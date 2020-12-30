import React from 'react';
import Consult from './component/Consultation/Consultation';


const ConsultationPage = (props) =>{

    return(
        <div>
            <Consult consultRef={props.consultRef} />
        </div>
    )
}
export default ConsultationPage;