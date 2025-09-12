import ServiceCards from "./ServiceCards";
import { useNavigate } from "react-router-dom";


export default function Service(){

  const navigate = useNavigate();

    return(
        <section id="services-section">
    <h1>
        Our Top Rated Services
    </h1>
    <div class="servicecard-ui">
    <ServiceCards serviceLogo="/images/Services/furniture-svgrepo-com.svg" service="Furniture assembly" serviceInfo="Attain's Bots work alongside your team members to"pageId="furn"/>
    <ServiceCards serviceLogo="/images/Services/sewer-icon.svg" service="Gutter cleaning" serviceInfo="Attain's Bots work alongside your team members to" pageId="gutt"/>
    <ServiceCards serviceLogo="/images/Services/repair-costs-svgrepo-com.svg" service="Home repairs" serviceInfo="Attain's Bots work alongside your team members to" pageId="homerep"/>
    <ServiceCards serviceLogo="/images/Services/paint-roller-svgrepo-com.svg" service="Painting" serviceInfo="Attain's Bots work alongside your team members to" pageId="paint"/>
    </div>
    <div class="servicecard-ui">
    <ServiceCards serviceLogo="/images/Services/tap-water-drink-water-tap-svgrepo-com.svg" service="Plumbing" serviceInfo="Attain's Bots work alongside your team members to" pageId="plumb"/>
    <ServiceCards serviceLogo="/images/Services/house-svgrepo-com.svg" service="House siding" serviceInfo="Attain's Bots work alongside your team members to" pageId="siding"/>
    <ServiceCards serviceLogo="/images/Services/hammer-with-nail-puller-svgrepo-com.svg" service="Carpentry" serviceInfo="Attain's Bots work alongside your team members to" pageId="carp"/>
    <ServiceCards serviceLogo="/images/Services/house-svgrepo-com.svg" service="Electrical" serviceInfo="Attain's Bots work alongside your team members to" pageId="elect"/>
    </div>
    <button onClick={() => navigate("/service")} id="button" >View all Services</button>
    
    </section>

    
    );
}