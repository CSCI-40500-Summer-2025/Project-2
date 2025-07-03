import React, { useState } from "react";
import "./ReportLostPage.css";
import { getOrCreateUserId } from "../../utils/userid";
import { useNavigate } from "react-router";

const ReportLostPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    contact: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = getOrCreateUserId();

    const postData = {
      ...formData,
      type: "lost",
      date: new Date().toISOString(),
      userId,
    };

    try {
      const res = await fetch(
        "https://project-2-hwiy.onrender.com/post/addpost",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to submit.");
      }

      alert("✅ Lost item reported!");
      navigate("/");
      setFormData({ title: "", location: "", description: "", contact: "" });
    } catch (error) {
      console.error("Error submitting lost post:", error.message);
      alert("❌ Could not report lost item.");
    }
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
