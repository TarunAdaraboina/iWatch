import React from 'react';
import './CustomizationForm.css';

const CustomizationForm = ({ setSelectedCase, setSelectedBand, setSelectedSize }) => {
  return (
    <div className="customization-form">
      <h2>Customize Your Watch</h2>
      <div>
        <label>Case Material:</label>
        <select onChange={(e) => setSelectedCase(e.target.value)}>
          <option value="Titanium">Titanium</option>
          <option value="Aluminum">Aluminum</option>
          <option value="Stainless">Stainless</option>
        </select>
      </div>
      <div>
        <label>Band:</label>
        <select onChange={(e) => setSelectedBand(e.target.value)}>
          <option value="Sport">Sport</option>
          <option value="Leather">Leather</option>
          <option value="Milanese">Milanese</option>
        </select>
      </div>
      <div>
        <label>Size:</label>
        <select onChange={(e) => setSelectedSize(e.target.value)}>
          <option value="40mm">40mm</option>
          <option value="44mm">44mm</option>
        </select>
      </div>
    </div>
  );
};

export default CustomizationForm;
