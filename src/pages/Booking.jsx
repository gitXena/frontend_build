import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Booking() {
  // let selected service show
  const location = useLocation();
  const { defaultOption } = location.state || {}; // value from Page A

  const navigate = useNavigate();

  const [bookingData, setbookingData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "choose", // initialize with "choose"
    info: ""
  });

  // set default option if passed from previous page
  useEffect(() => {
    if (defaultOption) {
      setbookingData((prev) => ({ ...prev, service: defaultOption }));
    }
  }, [defaultOption]);

  // Update bookingData on input change
  const handleChange = (e) => {
    setbookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Map only what backend expects
    const formData = {
      customerName: bookingData.name,
      customerEmail: bookingData.email,
      phone: bookingData.phone,
      service: bookingData.service,
      status: bookingData.info
    };

    try {
      const response = await fetch("http://localhost:3000/schedule/addSchedule", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);

      // navigate only after success
      navigate("/payment");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id="bookingform">
      <form onSubmit={handleSubmit}>
        <h2>Booking Form</h2>

        <input
          type="text"
          placeholder="Name"
          name="name"
          value={bookingData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="E-mail address"
          name="email"
          value={bookingData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          placeholder="Phone"
          name="phone"
          value={bookingData.phone}
          onChange={handleChange}
          required
        />

        <select
          name="service"
          value={bookingData.service}
          onChange={handleChange}
          required
        >
          <option value="choose">Services type</option>
          <option value="option1">Furniture Assembly</option>
          <option value="option2">Gutter Cleaning</option>
          <option value="option3">Home Repairs</option>
          <option value="option4">Painting</option>
          <option value="option5">Plumbing</option>
          <option value="option6">House Siding</option>
          <option value="option7">Carpentry</option>
          <option value="option8">Electrical</option>
          <option value="option9">Outdoor Living</option>
          <option value="option10">Pools</option>
          <option value="option11">Hardscaping</option>
          <option value="option12">Patios</option>
          <option value="option13">Outdoor Kitchens</option>
        </select>

        <textarea
          placeholder="Additional information"
          name="info"
          value={bookingData.info}
          onChange={handleChange}
        ></textarea>

        <button 
        onClick={() => navigate("/payment")} 
        type="submit">Book Service</button>
      </form>
    </section>
  );
}
