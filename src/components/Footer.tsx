import React, { useState } from 'react';


function Footer() {
  const [buttonClicks, setButtonClicks] = useState(0);

  const handleButtonClick = () => {
    setButtonClicks(prevClicks => prevClicks + 1);
  };

  return (
    <footer className="footer">
      <p>Footer Component</p>
      <p>Button Clicks: {buttonClicks}</p>
      <button onClick={handleButtonClick}>Click me</button>
    </footer>
  );
}

export default Footer;

