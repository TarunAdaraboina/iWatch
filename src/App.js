import React, { useState } from 'react';
import Header from './components/Header/Header';
import CustomizationForm from './components/CustomizationForm/CustomizationForm';
import WatchPreview from './components/WatchPreview/WatchPreview';
import Footer from './components/Footer/Footer';

function App() {
  const [selectedCase, setSelectedCase] = useState('Titanium');
  const [selectedBand, setSelectedBand] = useState('Sport');
  const [selectedSize, setSelectedSize] = useState('40mm');

  return (
    <div>
      <Header />
      <div className="customization-container">
        <CustomizationForm 
          setSelectedCase={setSelectedCase} 
          setSelectedBand={setSelectedBand} 
          setSelectedSize={setSelectedSize} 
        />
        <WatchPreview selectedCase={selectedCase} selectedBand={selectedBand} selectedSize={selectedSize} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
