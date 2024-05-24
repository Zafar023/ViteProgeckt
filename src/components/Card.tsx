import React, { useState } from 'react';
import './App.css';

interface CardProps {
  title: string;
  content: string;
}

function Card({ title, content }: CardProps) {
  const [showContent, setShowContent] = useState(false);
  const [likes, setLikes] = useState(0);

  const toggleContent = () => {
    setShowContent(prevShowContent => !prevShowContent);
  };

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={toggleContent}>{showContent ? 'Hide Content' : 'Show Content'}</button>
      {showContent && <p>{content}</p>}
      <button onClick={handleLike}>Like</button>
      <p>Likes: {likes}</p>
    </div>
  );
}

export default Card;

