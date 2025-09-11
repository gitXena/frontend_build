import ReviewCards from "./ReviewCards";

export default function Reviews() {
    return(
        <section className="review-section">
            <div className="review-title">
        <img src="/images/Trustpilot_Logo_(2022).svg.png" alt="" />
        <img src="/images/stars-5-1.svg" alt="" />
        <h2>Over 400+ reviews On Trust Pilot</h2>
        </div>
        <div className="review-cards-ui">
        <ReviewCards title="Very impressed" review="The Handyman came this morning Saturday at 8am bang on time. Got to say he was very professional and polite and did a excellent job building my new chest of drawers - I can highly recommend" customerName="Mike Lohman" daysAgo="2"/>
        <ReviewCards title="I am very pleased with the work done" review="I am very pleased with the work done. Very quick response, came in half an hour, also completed the work quickly and efficiently at a very decent price. Outstanding value and would definitely recommend!" customerName="Debbie sheavyn" daysAgo="2"/>
        <ReviewCards title="Léa Chaoui" review="Excellent service! On time, very professional and Super quick! And on top of that a very nice and polite person. I fully recommend him. He built the bunk beds for my kids and the cot for the baby. I fully trust him!" customerName="Chris Hasan" daysAgo="2"/>
        </div>
        
        <div className="review-cards-ui">
        <ReviewCards title="Put up My shed perfectly" review="Put up my shed perfectly and for a great price, very happy with the service I received and would highly recommend to all my friends and family" customerName="Melisa" daysAgo="2"/>
        <ReviewCards title="I was very happy with Shawn work" review="He does things really professionally and Care myself and my partner recommend Shawn services to assemble any furniture Our bed wasn’t a easy but with Shawn help. We got it together and placed where we needed attached to the wall !" customerName="Mirjan" daysAgo="2"/>
        <ReviewCards title="Great work that was done" review="Excellent work, managed to dismantle and assemble another item very quickly👍. Great work that was done and was impressed. Was also really friendly" customerName="Mrs Asha Srivasta" daysAgo="2"/>
        </div>
        <button>Read All Reviews</button>
        </section>
    );
}