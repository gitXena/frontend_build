import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // import this

const plans = [
  { id: "basic", name: "Basic Plan", amount: 50.0 },
  { id: "silver", name: "Silver Plan", amount: 85.0 },
  { id: "gold", name: "Gold Plan", amount: 150.0 },
];

const services = [
  { id: "furn", name: "Furniture Assembly", amount: 80.0 },
  { id: "gutt", name: "Gutter Cleaning", amount: 120.0 },
  { id: "homerep", name: "Home Repairs", amount: 60.0 },
  { id: "paint", name: "Painting", amount: 80.0 },
  { id: "plumb", name: "Plumbing", amount: 90.0 },
  { id: "siding", name: "House Siding", amount: 200.0 },
  { id: "carp", name: "Carpentry", amount: 60.0 },
  { id: "elect", name: "Electrical", amount: 70.0 },
  { id: "outliv", name: "Outdoor Living", amount: 400.0 },
  { id: "pool", name: "Pools", amount: 1000.0 },
  { id: "hards", name: "Hardscaping", amount: 600.0 },
  { id: "patio", name: "Patios", amount: 700.0 },
  { id: "outkit", name: "Outdoor Kitchens", amount: 1500.0 },
];

const PaymentsPage = () => {
  const navigate = useNavigate(); // initialize navigate

  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    selectedPlanId: "",
    selectedServiceId: "",
  });

  // Format card number as "1234 5678 9012 3456"
  const formatCardNumber = (value) => {
    const digits = value.replace(/\D/g, "");
    const groups = digits.match(/.{1,4}/g);
    return groups ? groups.join(" ") : "";
  };

  // Format expiry date as "MM/YY"
  const formatExpiry = (value) => {
    const digits = value.replace(/\D/g, "");

    if (digits.length === 0) return "";
    if (digits.length === 1) {
      if (parseInt(digits, 10) > 1) {
        return "0" + digits;
      }
      return digits;
    }
    if (digits.length === 2) {
      const month = parseInt(digits, 10);
      if (month === 0) return "0";
      if (month > 12) {
        return "1";
      }
      return digits + "/";
    }
    if (digits.length <= 4) {
      return digits.slice(0, 2) + "/" + digits.slice(2);
    }
    return digits.slice(0, 2) + "/" + digits.slice(2, 4);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      const formattedValue = formatCardNumber(value);
      setFormData((prev) => ({ ...prev, [name]: formattedValue }));
    } else if (name === "expiry") {
      const formattedValue = formatExpiry(value);
      setFormData((prev) => ({ ...prev, [name]: formattedValue }));
    } else if (name === "selectedPlanId") {
      // When plan selected, clear service selection
      setFormData((prev) => ({
        ...prev,
        selectedPlanId: value,
        selectedServiceId: "",
      }));
    } else if (name === "selectedServiceId") {
      // When service selected, clear plan selection
      setFormData((prev) => ({
        ...prev,
        selectedServiceId: value,
        selectedPlanId: "",
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let selectedName = "";
    let selectedAmount = 0;

    if (formData.selectedPlanId) {
      const plan = plans.find((p) => p.id === formData.selectedPlanId);
      selectedName = plan?.name || "";
      selectedAmount = plan?.amount || 0;
    } else if (formData.selectedServiceId) {
      const service = services.find((s) => s.id === formData.selectedServiceId);
      selectedName = service?.name || "";
      selectedAmount = service?.amount || 0;
    } else {
      alert("Please select a Plan or a Service.");
      return;
    }

    alert(
      `Payment submitted for ${selectedName} - $${selectedAmount.toFixed(2)}`
    );
    navigate("/");
  };

  // Determine amount and label based on selection
  let amount = 0;
  let selectedLabel = "";

  if (formData.selectedPlanId) {
    const plan = plans.find((p) => p.id === formData.selectedPlanId);
    amount = plan?.amount || 0;
    selectedLabel = plan?.name || "";
  } else if (formData.selectedServiceId) {
    const service = services.find((s) => s.id === formData.selectedServiceId);
    amount = service?.amount || 0;
    selectedLabel = service?.name || "";
  }

  return (
    <section id="payments-page">
      <div className="payments-container">
        <h2>Make a Payment</h2>
        <form className="payment-form" onSubmit={handleSubmit}>
          <label htmlFor="selectedPlanId">Select a Plan</label>
          <select
            id="selectedPlanId"
            name="selectedPlanId"
            value={formData.selectedPlanId}
            onChange={handleChange}
            disabled={formData.selectedServiceId !== ""}
          >
            <option value="">Choose a Plan</option>
            {plans.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.name}
              </option>
            ))}
          </select>

          <h4>OR</h4>

          <label htmlFor="selectedServiceId">Select a Service</label>
          <select
            id="selectedServiceId"
            name="selectedServiceId"
            value={formData.selectedServiceId}
            onChange={handleChange}
            disabled={formData.selectedPlanId !== ""}
          >
            <option value="">Choose a Service</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>

          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={amount ? `$${amount.toFixed(2)}` : ""}
            readOnly
            aria-readonly="true"
            placeholder="Select a plan or service"
          />

          <label htmlFor="cardName">Name on Card</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            placeholder="John Doe"
            required
            autoComplete="cc-name"
          />

          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            maxLength="19"
            required
            inputMode="numeric"
            pattern="(\d{4} ){3}\d{4}"
            autoComplete="cc-number"
          />

          <div className="paymentform-row">
            <div className="paymentform-group">
              <label htmlFor="expiry">Expiry Date</label>
              <input
                type="text"
                id="expiry"
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                maxLength="5"
                pattern="(0[1-9]|1[0-2])\/\d{2}"
                required
                autoComplete="cc-exp"
                inputMode="numeric"
              />
            </div>

            <div className="paymentform-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="password"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
                maxLength="4"
                pattern="\d{3,4}"
                required
                inputMode="numeric"
                autoComplete="cc-csc"
              />
            </div>
          </div>

          <button type="submit" className="pay-button">
            Pay Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default PaymentsPage;
