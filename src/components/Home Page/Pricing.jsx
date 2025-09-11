import PricingCards from "./PricingCards";
export default function Pricing(){
    return(
        <section className="pricing-section">
            <h2>Easy And Affordable Pricing</h2>
            <div style={{display:"flex"}}>
            <PricingCards  plan="Basic" price="50" discount="10"/>
            <PricingCards  plan="Silver" price="85" discount="15"/>
            <PricingCards  plan="Gold" price="150" discount="25"/>
            </div>
        </section>
    );
}


