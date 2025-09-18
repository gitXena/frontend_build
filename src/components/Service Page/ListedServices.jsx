import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ListedServices({ service, serviceInfo, pageId }) {
  const navigate = useNavigate();

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch({
      /*"http://localhost:5000/api/services" replace with backend url*/
    })
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  return (
    <div className="listed-services">
      <div className="service-listing-info">
        <h3>
          {service}
          {/* {service.title} replace with backend title*/}
        </h3>

        <p>{serviceInfo}</p>

        <button onClick={() => navigate(`/service/${pageId}`)}>
          Read More
        </button>
      </div>
    </div>
  );
}
