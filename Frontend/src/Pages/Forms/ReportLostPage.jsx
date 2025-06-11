import React, { useState } from "react";
import "./ReportLostPage.css";

const ReportLostPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lost item submitted:", formData);
    alert("✅ Lost item reported!");
    // TODO: save to Firebase or wherever
  };

  return (
    <div className="report-lost-container">
      <h2>Report a Lost Item</h2>
      <form onSubmit={handleSubmit} className="lost-form">
        <label>
          Item Title:
          <input
            type="text"
            name="title"
            placeholder="e.g., Lost Backpack"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Location Lost:
          <input
            type="text"
            name="location"
            placeholder="e.g., North Building, 2nd floor"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            placeholder="Describe the item in detail..."
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Your Contact (Email or Phone):
          <input
            type="text"
            name="contact"
            placeholder="e.g., you@example.com"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="submit-btn">
          Submit Lost Report
        </button>
      </form>
    </div>
  );
};

export default ReportLostPage;
