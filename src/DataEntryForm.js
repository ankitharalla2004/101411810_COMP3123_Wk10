import React, { useState } from 'react';
import './DataEntryForm.css';

function DataEntryForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agree: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '40px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '500px', width: '100%' }}>
        <h2 style={{ marginBottom: '20px', color: '#333', textAlign: 'center' }}>Data Entry Form</h2>
        <form onSubmit={handleSubmit}>

          <div style={{ marginBottom: '15px' }}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ced4da', marginBottom: '10px' }}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ced4da' }}
              required
            />
          </div>

          <input
            type="text"
            name="address"
            placeholder="1234 Main St"
            value={formData.address}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ced4da', marginBottom: '10px' }}
            required
          />

          <input
            type="text"
            name="address2"
            placeholder="Apartment, studio, or floor (optional)"
            value={formData.address2}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ced4da', marginBottom: '10px' }}
          />

          <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ced4da' }}
              required
            />
            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
              style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ced4da' }}
              required
            >
              <option value="">Province</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
            </select>
          </div>

          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ced4da', marginBottom: '10px' }}
            required
          />

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                style={{ marginRight: '10px' }}
              />
              I agree to the terms and conditions
            </label>
          </div>

          <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#007bff', color: 'white', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
            Submit
          </button>
        </form>

        {submittedData && (
          <div style={{ marginTop: '20px', padding: '15px', borderRadius: '4px', backgroundColor: '#e9ecef' }}>
            <h3 style={{ color: '#333' }}>Submitted Data</h3>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Address:</strong> {submittedData.address}</p>
            <p><strong>Address 2:</strong> {submittedData.address2}</p>
            <p><strong>City:</strong> {submittedData.city}</p>
            <p><strong>Province:</strong> {submittedData.province}</p>
            <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
            <p><strong>Agreed to Terms:</strong> {submittedData.agree ? 'Yes' : 'No'}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DataEntryForm;
