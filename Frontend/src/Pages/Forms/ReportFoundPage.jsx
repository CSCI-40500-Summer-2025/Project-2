import React, { useState } from "react";
import "./ReportFoundPage.css";

const ReportFoundPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    contact: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Found item submitted:", formData);
    alert("✅ Found item reported!");
    // TODO: upload to storage / save to Firestore if needed
  };

  return (
    <div className="report-found-container">
      <h2>Report a Found Item</h2>
      <form onSubmit={handleSubmit} className="found-form">
        <label>
          Item Title:
          <input
            type="text"
            name="title"
            placeholder="e.g., Found Umbrella"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Location Found:
          <input
            type="text"
            name="location"
            placeholder="e.g., Library, 3rd floor"
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

        <label>
          Upload Image:
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="submit-btn">
          Submit Found Report
        </button>
      </form>
    </div>
  );
};

export default ReportFoundPage;
