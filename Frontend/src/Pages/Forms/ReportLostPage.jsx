import React from "react";

const ReportLostPage = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    dateLost: "",
    location: "",
    contactInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lost Item Reported:", formData);
    alert("Thank you! Your lost item has been reported.");
    setFormData({
      itemName: "",
      description: "",
      dateLost: "",
      location: "",
      contactInfo: "",
    });
  };



export default ReportLostPage;
