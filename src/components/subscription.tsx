import React, { useState, useEffect } from 'react';
import SubscriptionData from './model/SubscriptionData';
import SubscriptionRequest from './subscription-request';
import '../css/subscription.css'
import Left_icon from './img/left-icon.svg'
import Right_icon from './img/right-icon.svg'

const Subscription: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const maxLength = 3;
    const [request, setRequest] = useState<SubscriptionData[]>([])

    const size = request.length + 1;

    let accessTokenData = localStorage.getItem('accessToken')
    let accessToken: string = ""
    if (accessTokenData) {
        accessToken = JSON.parse(accessTokenData);
    }

    // let usernameData = localStorage.getItem('username')
    // let username:string = ""
    // if (usernameData){
    //     username=JSON.parse(usernameData);
    // }

    const requestData = {
        method: 'POST',
        headers: { 'authorization': accessToken, 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'creator_id': "", 'subscriber_id': "", 'status': "" })
    }

    const getRequest = async () => {
        const request = await fetch("http://localhost:3001/api/getSubRequests", requestData);
        const response = await request.json();
        console.log(response)

    }

    function pagination() {
        if (currentPage * maxLength < size) {
            return (
                request.slice((currentPage - 1) * maxLength, currentPage * maxLength).map((req) => (
                    <SubscriptionRequest
                        request={req}
                        setRequest={setRequest} />
                ))
            )
        }

        else {
            return (
                request.slice((currentPage - 1) * maxLength, size).map((req) => (
                    <SubscriptionRequest
                        request={req}
                        setRequest={setRequest} />
                ))
            )
        }
    }

    const addPage = () => {
        const pages = Math.ceil(size / maxLength)
        if (currentPage < pages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const subPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    /*
    useEffect(() => {
        getRequest()
    }, []); */

    return (
        <div className='side-content'>
            <section className="user section-fw flex-col">
                <div className="flex-row">
                    <h1 className="section-title">Subscription Request</h1>
                </div>
                <div className="flew-rox">
                    <ul>
                        <li>
                            {pagination()}
                        </li>
                    </ul>
                </div>
                <div className="l-page-control-info flex-row">
                    <div className="l-which-page">
                        Page <span className="l-current-page">{currentPage}</span>
                    </div>
                    <div className="l-page-control-btn">
                        <img src={Left_icon} alt="left" className="l-previous-page-icon" onClick={subPage} />
                        <img src={Right_icon} alt="right" className="l-next-page-icon" onClick={addPage} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Subscription