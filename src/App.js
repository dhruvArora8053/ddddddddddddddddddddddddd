import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const [range, setRange] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <div className="column">
      <div className="column-deep">
        <div>
          <input
            type="range"
            min="0"
            max="10"
            value={range}
            onChange={(e) => setRange(+e.target.value)}
          />
          <span>{range}</span>
        </div>
        <div>
          <button onClick={() => setStep((c) => c - range)}>-</button>
          <input
            type="text"
            value={step}
            onChange={(e) => setStep(+e.target.value)}
          />
          <button onClick={() => setStep((c) => c + range)}>+</button>
        </div>
      </div>

      <p>
        <span>
          {step === 0
            ? "Today is "
            : step > 0
            ? `${step} days from today is `
            : `${Math.abs(range)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
