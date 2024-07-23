import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatiticsLine = ({ text, value, porcent, fixed }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{fixed ? Number.parseFloat(value).toFixed(1) : value} {porcent ? '%' : ''}</td>
      </tr>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [score, setScore] = useState(0);

  const clickGood = () => {
    setGood(good + 1);
    setTotal(total + 1);
    setScore(score + 1);
  };

  const clickNeutral = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
  };
  const clickBad = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    setScore(score - 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={clickGood} text={"good"} />
      <Button handleClick={clickNeutral} text={"neutral"} />
      <Button handleClick={clickBad} text={"bad"} />
      <h1>Statitics</h1>
      {total === 0 ? (
        "No feedback given"
      ) : (
        <>
          <table>
            <tbody>
              <StatiticsLine text="good" value={good} fixed={false} />
              <StatiticsLine text="neutral" value={neutral} fixed={false} />
              <StatiticsLine text="bad" value={bad} fixed={false} />
              <StatiticsLine text="total" value={total} fixed={false} />
              <StatiticsLine text="average" value={score / total} />
              <StatiticsLine text="positive" value={(good * 100) / total} porcent={true} />
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default App;
