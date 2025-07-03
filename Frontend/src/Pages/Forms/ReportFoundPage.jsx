import React, { useState } from "react";
import "./ReportFoundPage.css";
import { getOrCreateUserId } from "../../utils/userid";
import { useNavigate } from "react-router";

const ReportFoundPage = () => {
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = getOrCreateUserId();

    const postData = {
      title: formData.title,
      location: formData.location,
      description: formData.description,
      contact: formData.contact,
      date: new Date().toISOString(),
      type: "found",
      userId,
    };

    try {
      const response = await fetch("http://localhost:5555/post/addpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit report.");
      }

      const result = await response.json();
      console.log("Success:", result);
      alert("✅ Found item reported!");
      navigate("/");
      setFormData({
        title: "",
        location: "",
        description: "",
        contact: "",
        image: null,
      });
    } catch (error) {
      console.error("Submission error:", error.message);
      alert("❌ Failed to report found item.");
    }
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

        {/* <label>
          Upload Image:
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </label> */}

        <button type="submit" className="submit-btn">
          Submit Found Report
        </button>
      </form>
    </div>
  );
};

export default ReportFoundPage;
