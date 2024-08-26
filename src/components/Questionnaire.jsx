import { useState } from 'react';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import TrueFalseQuestion from './TrueFalseQuestion';

const Questionnaire = () => {
  const [name, setName] = useState('');
  const [matricula, setMatricula] = useState('');
  const [answers, setAnswers] = useState([]);
  const [showForm, setShowForm] = useState(true); // Controle de exibição do formulário
  const [showQuestions, setShowQuestions] = useState(false); // Controle de exibição das perguntas
  const [errors, setErrors] = useState('');

  const questions = [
    {
      type: 'multiple',
      text: 'Qual é a função principal do hook `useEffect` no React?',
      options: [
        'Gerenciar o estado do componente',
        'Manipular eventos de clique',
        'Executar efeitos colaterais após a renderização do componente',
        'Atualizar o DOM diretamente',
        'Renderizar uma lista de itens'
      ],
      correctAnswer: 'Executar efeitos colaterais após a renderização do componente',
    },
    {
      type: 'multiple',
      text: 'Qual das seguintes afirmativas sobre `props` em React está correta?',
      options: [
        '`props` são mutáveis e podem ser alteradas diretamente pelo componente que as recebe',
        '`props` são utilizados para gerenciar o estado interno do componente',
        '`props` são passadas de um componente pai para um componente filho',
        '`props` são utilizados apenas para definir o estilo dos componentes',
        '`props` são exclusivos de componentes de classe e não funcionam em componentes funcionais'
      ],
      correctAnswer: '`props` são passadas de um componente pai para um componente filho',
    },
    {
      type: 'multiple',
      text: 'Qual é a principal diferença entre um componente de classe e um componente funcional em React?',
      options: [
        'Componentes de classe não podem usar hooks, enquanto componentes funcionais podem',
        'Componentes de classe não têm suporte para `render`',
        'Componentes funcionais não têm acesso ao ciclo de vida do componente',
        'Componentes de classe não podem ser utilizados com `props`',
        'Componentes funcionais não têm métodos de ciclo de vida, ao contrário dos componentes de classe'
      ],
      correctAnswer: 'Componentes funcionais não têm métodos de ciclo de vida, ao contrário dos componentes de classe',
    },
    {
      type: 'truefalse',
      text: 'Em React, o hook `useState` é utilizado para gerenciar o estado em componentes funcionais.',
      correctAnswer: true,
    },
    {
      type: 'truefalse',
      text: 'Os componentes de classe em React têm acesso ao hook `useEffect`.',
      correctAnswer: false,
    },
  ];

  const handleAnswer = (questionText, isCorrect) => {
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      { question: questionText, isCorrect },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && matricula) {
      setShowForm(false); // Oculta a seção de nome e matrícula
      setShowQuestions(true); // Exibe o questionário
      setErrors(''); // Limpa possíveis erros
    } else {
      setErrors('Preencha nome e matrícula antes de começar o questionário.');
    }
  };

  return (
    <div className="questionnaire">
      <h1>Questionário de Frontend</h1>
      {showForm && !showQuestions && (
        <form onSubmit={handleSubmit} className="form-container">
          <div className="input-group">
            <label>
              Nome:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Matrícula:
              <input
                type="text"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
                required
              />
            </label>
          </div>

          <button type="submit" className="submit-button">
            Enviar
          </button>
          {errors && <p className="error-message">{errors}</p>}
        </form>
      )}

      {showQuestions && (
        <div>
          {questions.map((question, index) => {
            if (question.type === 'multiple') {
              return (
                <MultipleChoiceQuestion
                  key={index}
                  question={question}
                  onAnswer={(isCorrect) => handleAnswer(question.text, isCorrect)}
                />
              );
            } else if (question.type === 'truefalse') {
              return (
                <TrueFalseQuestion
                  key={index}
                  question={question}
                  onAnswer={(isCorrect) => handleAnswer(question.text, isCorrect)}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Questionnaire;