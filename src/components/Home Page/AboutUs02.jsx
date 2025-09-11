import AboutUs02Component from "./AboutUs02Components";

export default function AboutUs02(){
return(
<section className="aboutus02">
    <div className="aboutus02container">
        <div>
    <div id="experience">

    <h1>Over 25+ Year of Experience In Handyman Service</h1>

    <p >
    With 25+ years of experience, we are the go-to experts for all your handyman service requirements. Trust in our skill and professionalism for top-notch results
    </p>

    </div>

    <div id="aucomponentdiv">
    <AboutUs02Component title="High Quality Work" explanation="At vero eos et accusamus et iusto odio dignissimos."/>
    <AboutUs02Component title="Qualified team" explanation="At vero eos et accusamus et iusto odio dignissimos."/>
    </div>
    
    <button>More About Us</button>
    </div>
    

<div className="au02imagecontainer">

<img id="first" src="/images/AboutUs02\b867aa2995e3880fe87d03bfd4a8999eb02e6f1a.png" alt="" />
<img id="second" src="/images/AboutUs02\fce6cef4dbbdd45294d242c7a14660367c055cdb.png" alt="" />
<img id="third" src="/images/AboutUs02\df6e5d1f0320f85e4dd9aae24dfb52e13e7b80d9.png" alt=""/>

</div>
</div>
    </section>
);
}