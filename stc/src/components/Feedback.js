import React from 'react';
import { useState } from 'react';

import './Feedback.css';

const Feedback = () => {
  const [showWidget, setShowWidget] = useState(true);
  const [showPost, setShowPost] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowWidget(false);
    setShowPost(true);
  };

  const handleEdit = () => {
    setShowWidget(true);
    setShowPost(false);
  };

  return (
    <div className="container">
      <div className={`post ${showPost ? 'active' : ''}`}>
        <div className="text">Thanks for rating us!</div>
        <div className="edit" onClick={handleEdit}>EDIT</div>
      </div>
      <div className={`star-widget ${showWidget ? 'active' : ''}`}>
        <input type="radio" name="rate" id="rate-5" />
        <label htmlFor="rate-5" className="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-4" />
        <label htmlFor="rate-4" className="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-3" />
        <label htmlFor="rate-3" className="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-2" />
        <label htmlFor="rate-2" className="fas fa-star"></label>
        <input type="radio" name="rate" id="rate-1" />
        <label htmlFor="rate-1" className="fas fa-star"></label>
        <form onSubmit={handleFormSubmit}>
          <header></header>
          <div className="textarea">
            <textarea cols="30" placeholder="Describe your experience.."></textarea>
          </div>
          <div className="btn">
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;