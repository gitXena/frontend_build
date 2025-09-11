import { useParams, useNavigate } from "react-router-dom";


export default function({plan, price, discount}){

    const navigate = useNavigate();

    return(
        <div className="pricingcard-section">
            <div>
            <h3>{plan} Plan</h3>
            <p><span>${price}</span> /month</p>
            <hr/>
            <ul>
              <li> {discount}% Off On All Services </li> 
                <li>Priority Scheduling</li>
                <li>Maintained Equipment</li>
                <li>Priority Scheduling</li>
            </ul>

            <button onClick={() => navigate("/payment")}>Choose Plan</button>
            </div>
        </div>
    );
}