import React, { useState } from 'react';


function Content() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <main className="content">
      <p>This is the content area.</p>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <br />
      <input type="text" value={message} onChange={handleChange} placeholder="Enter message" />
      <p>Typed Message: {message}</p>
    </main>
  );
}

export default Content;

