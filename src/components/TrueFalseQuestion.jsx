import { useState } from 'react';

const TrueFalseQuestion = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onAnswer(option === question.correctAnswer);
  };

  return (
    <div className="question-container">
      <p>{question.text}</p>
      <button
        onClick={() => handleSelect(true)}
        className={selectedOption === true ? 'selected' : ''}
      >
        Verdadeiro
      </button>
      <button
        onClick={() => handleSelect(false)}
        className={selectedOption === false ? 'selected' : ''}
      >
        Falso
      </button>
      {selectedOption !== null && (
        <p className={`feedback ${selectedOption === question.correctAnswer ? '' : 'error'}`}>
          {selectedOption === question.correctAnswer ? 'Correto!' : 'Errado!'}
        </p>
      )}
    </div>
  );
};

export default TrueFalseQuestion;
