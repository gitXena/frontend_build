import { useNavigate } from "react-router-dom";
export default function CTA(){
    const navigate = useNavigate();
    return (
        <section className="cta-section">
        <h2>
            Get Premium Handyman Service From Us!
        </h2>
        <div>
        <button onClick={() => navigate("/service")}>Get Our Service</button>
        <button onClick={() => navigate("/contact")}>Contact Us</button>
        </div>
        </section>
    );
}