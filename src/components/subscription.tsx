import React, {useState} from 'react';
import Subscription_data from './model/subscription_data';
import Subscription_request from './subscription-request';
import '../css/subscription.css'

const Subscription:React.FC = () => {

    const[request,setRequest] = useState<Subscription_data[]>([])

    const addRequest = () =>{
        if(request){
            setRequest([...request,{date:"010101", sender:"MK", singer:"hakita"}])
        }
    }

    return(
        <body>
            <section className = "section-fw flex-col">
                <div className = "flex-row">
                    <h1 className="section-title">Subscription Request</h1>
                </div>
                <div className="flew-rox">
                    <ul>
                        <li>
                            {request?.map((req) => (
                                <Subscription_request 
                                request={req} 
                                setRequest={setRequest} /> 
                            ))}
                        </li>
                    </ul>
                </div>
            </section>
            <button onClick={addRequest}>help</button>
        </body>
    )
}

export default Subscription