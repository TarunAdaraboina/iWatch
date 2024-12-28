import React from 'react';
import './WatchPreview.css';

const caseImages = {
  Titanium: "https://your-cdn-url.com/images/titanium-case.jpg",
  Aluminum: "https://your-cdn-url.com/images/aluminum-case.jpg",
  Stainless: "https://your-cdn-url.com/images/stainless-case.jpg",
};

const bandImages = {
  Sport: "https://your-cdn-url.com/images/sport-band.jpg",
  Leather: "https://your-cdn-url.com/images/leather-band.jpg",
  Milanese: "https://your-cdn-url.com/images/milanese-band.jpg",
};

const WatchPreview = ({ selectedCase, selectedBand, selectedSize }) => {
  return (
    <div className="watch-preview">
      <h2>Your Watch Preview</h2>
      <div className="preview-image">
        <img src={caseImages[selectedCase]} alt={`${selectedCase} case`} />
        <img src={bandImages[selectedBand]} alt={`${selectedBand} band`} />
        <p>Size: {selectedSize}</p>
      </div>
    </div>
  );
};

export default WatchPreview;
