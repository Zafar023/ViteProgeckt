import React, { useState } from 'react';


function Sidebar() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [newItemText, setNewItemText] = useState('');

  const addItem = () => {
    if (newItemText.trim() !== '') {
      setItems(prevItems => [...prevItems, newItemText]);
      setNewItemText('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItemText(e.target.value);
  };

  return (
    <aside className="sidebar">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input type="text" value={newItemText} onChange={handleChange} />
      <button onClick={addItem}>Add Item</button>
    </aside>
  );
}

export default Sidebar;

