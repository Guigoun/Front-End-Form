// ResultSummary.js
const ResultSummary = ({ answers }) => {
  const correctAnswersCount = answers.filter(answer => answer.isCorrect).length;
  const totalQuestions = answers.length;

  return (
    <div className="result-summary">
      <h2>Resumo do Questionário</h2>
      <p>Você respondeu corretamente a {correctAnswersCount} de {totalQuestions} perguntas.</p>
      {/* Opcional: Você pode adicionar mais informações sobre a performance aqui */}
    </div>
  );
};

export default ResultSummary;
