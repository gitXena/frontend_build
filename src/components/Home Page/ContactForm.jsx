// export default function ContactForm(){
//     return(
//     <section id="contactform-section">
//     <img src="/Images/f746f29265c0e7f497a12325ec4c85630b45bb68.png" alt="" />
//     <form action="">
//         <h2>Contact Form</h2>
//         <input type="text" placeholder="Name"/>
//         <input type="email"  placeholder="E-mail address"/>
//         <input type="tel" placeholder="Phone"/>
//        <select>
//             <option value="option1">Subject</option>
//             <option value="option2">Option 2</option>
//             <option value="option3">Option 3</option>
//             </select>
//        <textarea placeholder="Message"></textarea>

//         <button type="submit">Send Message</button>
//     </form>
//     </section>
//     );
// }

import React, { useState } from "react";

export default function ContactForm() {
  // State for each form field
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "option1",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendUrl}/contact/addContact`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        // Optionally reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "option1",
          message: "",
        });
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      alert("Error submitting form: " + error.message);
    }
  };

  return (
    <section id="contactform-section">
      <img src="/images/f746f29265c0e7f497a12325ec4c85630b45bb68.png" alt="" />
      <form onSubmit={handleSubmit}>
        <h2>Contact Form</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        >
          <option value="choose">Subject</option>
          <option value="inquiry">Inquiry</option>
          <option value="sched">Scheduling</option>
          <option value="plan">Payment Plan</option>
        </select>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}