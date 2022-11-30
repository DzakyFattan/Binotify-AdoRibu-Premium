import React from 'react';
import SubscriptionData from './model/SubscriptionData';
import '../css/subscription.css'

interface Sub{
    request:SubscriptionData;
    setRequest:React.Dispatch<React.SetStateAction<SubscriptionData[]>>
}

const SubscriptionRequest:React.FC<Sub> = ({request,setRequest}) => {
    return(
        <a className="request-detail">
            <div className="l-elmt-detail-wrapper">
                <div className="l-elmt-detail"> 
                    <div className="description">Request To {request.singer}</div>
                    <div className="description-sub">Sender = <a className="description-content">{request.sender}</a></div>
                    <div className="description-sub">Date = <a className="description-content">{request.date}</a></div>
                </div>
            </div>
            <input type="button" value="Accept" className="button-request"/>
            <input type="button" value="Reject" className="button-request"/>
        </a>
    )
}

export default SubscriptionRequest