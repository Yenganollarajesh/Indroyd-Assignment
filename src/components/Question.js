import React, { useState } from 'react';
import './Question.css';

const Question = ({ currentQuestion, playerAnswer, setPlayerAnswer, handleAnswerSubmission }) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmission = () => {
    if (!playerAnswer) {
       
      setErrorMessage('Please select an answer before submitting.');
    } else {
       
      setErrorMessage('');
      handleAnswerSubmission();
    }
  };

  return (
    <div className="question-container">
      <h2 className="question-text">{currentQuestion.question}</h2>
      <div className="options-container">
        {currentQuestion.options.map((option) => (
          <label key={option.id} className="option-label">
            <input
              type="radio"
              name="answer"
              value={option.id}
              checked={playerAnswer === option.id}
              onChange={(e) => {
                setPlayerAnswer(e.target.value);
                setErrorMessage('');
              }}
              className="radio-button"
            />
            {option.label}
          </label>
        ))}
      </div>
      <button className="submit-button" onClick={handleSubmission}>
        Submit Answer
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}  
    </div>
  );
};

export default Question;

