import { useState } from 'react';

const MultipleChoiceQuestion = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onAnswer(option === question.correctAnswer);
  };

  return (
    <div className="question-container">
      <p>{question.text}</p>
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleSelect(option)}
          className={selectedOption === option ? 'selected' : ''}
        >
          {option}
        </button>
      ))}
      {selectedOption !== null && (
        <p className={`feedback ${selectedOption === question.correctAnswer ? '' : 'error'}`}>
          {selectedOption === question.correctAnswer ? 'Correto!' : 'Errado!'}
        </p>
      )}
    </div>
  );
};

export default MultipleChoiceQuestion;
