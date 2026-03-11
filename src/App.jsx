import { useState } from "react";

function App() {
  const [fact, setFact] = useState("");

  const getFact = async () => {
    // const res = await fetch(import.meta.env.VITE_API_URL)
    const res = await fetch("https://catfact.ninja/fact")
    const data = await res.json();
    setFact(data.fact);
  };

  const AnimatedHeading = ({ text }) => (
    <h1 className="animated-heading">
      {[...text].map((char, index) => {
        if (char === " ") {
          return (
            <span key={`space-${index}`} className="heading-space">
              &nbsp;
            </span>
          );
        }
        const direction = index % 2 === 0 ? "from-top" : "from-bottom";
        return (
          <span
            key={`${char}-${index}`}
            className={`heading-letter ${direction}`}
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            {char}
          </span>
        );
      })}
    </h1>
  );

  return (
    <div className="app-wrap">
      <AnimatedHeading text="Random Cat Facts" />

      <button className="button" onClick={getFact}>
        Get Cat Fact
      </button>

      <p className="fact-text">{fact}</p>
    </div>
  );
}

export default App;

