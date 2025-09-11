import { useNavigate } from "react-router-dom";

export default function ServiceCards({service, serviceInfo, serviceLogo, pageId}){    
  const navigate = useNavigate();
    return(
        <button
         className="servicecard-section"
        onClick={() => navigate(`/service/${pageId}`) }>
    <div >
    <img src={serviceLogo} alt="" />
    <h2>
        {service}
    </h2>
    <p>
        {serviceInfo}
    </p>
    </div>
    </button>
    );
}