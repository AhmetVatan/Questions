import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions }) => {
  return (
    <section className="container">
      <h1>Frequently Asked Questions</h1>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} question={question} />;
      })}
    </section>
  );
};

export default Questions;
