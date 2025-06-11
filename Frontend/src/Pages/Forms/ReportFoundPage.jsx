import React, { useState } from "react";
//import './ReportFoundPage,css'; will use later for styling

const ReportFoundPage = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    itemDescription: '',
    dateFound: '',
    locationFound: '',
    contactInfo: '',
  });
  const handleChange = (e) =>{
    const { name, value } = e.target;
    setFormData(prevFormData => ({...prevFormData, [name]: value}));
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    // add data to server
    console.log('item report submitted:', formData);
    //clears input
    setFormData({
      itemName: '',
      itemDescription: '',
      dateFound: '',
      locationFound: '',
      contactInfo: '',
    })
    alert('Thank you for reporting the item found!');
  }
  return (
    <div>
      <h1>Found an item?</h1>
      <form onSubmit = {handleSubmit}>
        <label>
          Item Name:
          <input
            type = "text"
            name = "itemName"
            value = {formData.itemName}
            onChange = {handleChange}
            required
            />
        </label>
        <label>
          Item Description:
          <input
          type = "text"
          name = "itemDescription"
          value = {formData.itemDescription}
          onChange = {handleChange}
          />
        </label>
        <label>
          Date Found:
          <input
          type = "date"
          name = "dateFound"
          value = {formData.dateFound}
          onChange = {handleChange}
          required
          />
        </label>
        <label>
          Location Found:
          <input
          type = "text"
          name = "locationFound"
          value = {formData.locationFound}
          onChange = {handleChange}
          required
          />
        </label>
        <label>
          Contact Information:
          <input
          type = "text"
          name = "contactInfo"
          value = {formData.contactInfo}
          onChange = {handleChange}
          placeholder = "111-111-1111"
          />
        </label>
        <button type = "submit"> Submit </button>
      </form>
    </div>
  );
};

export default ReportFoundPage;
