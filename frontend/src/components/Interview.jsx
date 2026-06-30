function Interview() {

  const questions = [
    "Tell me about yourself.",
    "Explain your React project architecture.",
    "How do you manage state in React?",
    "Describe a challenging project you completed.",
    "Why should we hire you?",
    "How do you optimize web applications?"
  ];

  return (
    <div className="card">

      <h2>AI Interview Questions</h2>

      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            {q}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Interview;