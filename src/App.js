import React, { useState } from 'react';
import './App.css';
import Question from './components/Question';
import QRCodeDisplay from './components/QRCodeDisplay';

function App() {
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: [
        { id: "A", label: "A - Paris" },
        { id: "B", label: "B - London" },
        { id: "C", label: "C - Berlin" },
        { id: "D", label: "D - Madrid" }
      ],
      answer: "A"
    },
    {
      id: 2,
      question: "What is 2 + 2?",
      options: [
        { id: "A", label: "A - 3" },
        { id: "B", label: "B - 4" },
        { id: "C", label: "C - 5" },
        { id: "D", label: "D - 6" }
      ],
      answer: "B"
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        { id: "A", label: "A - Atlantic" },
        { id: "B", label: "B - Indian" },
        { id: "C", label: "C - Arctic" },
        { id: "D", label: "D - Pacific" }
      ],
      answer: "D"
    },
    {
      id: 4,
      question: "Which planet is known as the Red Planet?",
      options: [
        { id: "A", label: "A - Earth" },
        { id: "B", label: "B - Mars" },
        { id: "C", label: "C - Jupiter" },
        { id: "D", label: "D - Saturn" }
      ],
      answer: "B"
    },
    {
      id: 5,
      question: "What is the smallest prime number?",
      options: [
        { id: "A", label: "A - 1" },
        { id: "B", label: "B - 2" },
        { id: "C", label: "C - 3" },
        { id: "D", label: "D - 4" }
      ],
      answer: "B"
    }
  ];

  const [playerName, setPlayerName] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [playerAnswer, setPlayerAnswer] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [score, setScore] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handlePlayerJoin = () => {
    setIsMobile(true);
  };

  const handleAnswerSubmission = () => {
    if (playerAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setPlayerAnswer(''); 
    } else {
      setShowCompletion(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);  
    setScore(0);  
    setPlayerName('');  
    setPlayerAnswer('');  
    setShowCompletion(false);  
    setIsMobile(false);  
  };

  return (
    <div className="App">
      {!isMobile && (
        <div>
          <h1>Quiz Game</h1>
          <QRCodeDisplay />
          <input
            type="text"
            placeholder="Enter your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <button onClick={handlePlayerJoin}>Join Game</button>
        </div>
      )}

      {isMobile && showCompletion && (
        <div>
          <h1>Game Over!</h1>
          <p>{playerName}, your score: {score}/{questions.length}</p>
          <button onClick={handleReset}>Play Again</button>
        </div>
      )}

      {isMobile && !showCompletion && (
        <Question
          currentQuestion={currentQuestion}
          playerAnswer={playerAnswer}
          setPlayerAnswer={setPlayerAnswer}
          handleAnswerSubmission={handleAnswerSubmission}
        />
      )}
    </div>
  );
}

export default App;









 