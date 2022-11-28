import React, {useState} from 'react';
import Subscription_data from './model/subscription_data';
import Subscription_request from './subscription-request';
import '../css/subscription.css'
import Left_icon from './img/left-icon.svg'
import Right_icon from './img/right-icon.svg'

const Subscription:React.FC = () => {
    const [currentPage,setCurrentPage] = useState(1)
    const maxLength = 3;
    const[request,setRequest] = useState<Subscription_data[]>([])

    const addRequest = () =>{
        if(request){
            setRequest([...request,{date:"010101", sender:"MK", singer:"hakita"}])
        }
    }

    const size = request.length+1;

    function pagination(){
        if(currentPage * maxLength < size){
            return(
                request.slice((currentPage-1) * maxLength, currentPage * maxLength).map((req) => (
                    <Subscription_request 
                    request={req} 
                    setRequest={setRequest} />
                ))
            )
        }

        else{
            return(
                request.slice((currentPage-1) * maxLength, size).map((req) => (
                    <Subscription_request 
                    request={req} 
                    setRequest={setRequest} />
                ))
            )
        }
    }

    const addPage = () =>{
        const pages = Math.ceil(size/maxLength)
        if(currentPage<pages){
            setCurrentPage(currentPage+1)
        }
    }

    const subPage = () =>{
        if (currentPage>1){
            setCurrentPage(currentPage-1)
        }
    }

    return(
        <body>
            <section className = "user section-fw flex-col">
                <div className = "flex-row">
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
                        <img src={Left_icon} alt="left" className="l-previous-page-icon" onClick={subPage}/>
                        <img src={Right_icon} alt="right" className="l-next-page-icon" onClick={addPage}/>
                    </div>
                </div>
            </section>
            <button onClick={addRequest}>help</button>
        </body>
    )
}

export default Subscription