import AboutUs01Stats from "./AboutUs01Stats";

export default function AboutUs01(){
return(   
<section id="aboutus01-section"> 
    <div className="aboutus01-info">
<h2>One Stop Handyman Service</h2>
<p>We prioritize sustainability in every aspect of our work, aiming to create a greener and more eco-conscious future.</p>
    </div>

<div id="austatcontainer">
    <div className="austat-ui">
<AboutUs01Stats number="28+" stat="Years Business"/>
<AboutUs01Stats number="5150" stat="Projects Achivements"/>
    </div>

    <div className="austat-ui">
<AboutUs01Stats number="26k" stat="Expert Members"/>
<AboutUs01Stats number="15+" stat="No. of Branches"/>
    </div>
    
</div>
</section>
);
}