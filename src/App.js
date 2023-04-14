// Importing required dependencies
import React, { useEffect, useState } from "react";
import "./App.css";
import { words } from "./words/word";
import WordDropdown from "./components/WordDropdown";

function App() {
  const [word, setWord] = useState([]);
  const [tooltipToggle, handleTooltipToggle] = useState(false)

  const randomWord = () => {
    // Get a list of keys from the words object
    const keys = Object.keys(words);
    // Choose a random key from the list
    const randomLetter = keys[(keys.length * Math.random()) << 0];
    // Use the selected key to get a subset of words from the words object
    const randomSubset = words[randomLetter];
    // Get a list of keys from the selected subset
    const subKeys = Object.keys(randomSubset);
    // Choose a random word from the subset
    const finalWord = subKeys[(randomSubset.length * Math.random()) << 0];
    // Update the state with the selected word and its definition
    setWord([finalWord, randomSubset[finalWord]]);
  };

  useEffect(() => {
    // Call randomWord() when the component mounts
    randomWord();
  }, []);

  return (
    <div className="App">
      <div onClick={() => handleTooltipToggle(!tooltipToggle)} class="tooltip">
        ?
        <span class={`tooltip-text ${tooltipToggle ? "mobile-tooltip-toggle" : ""}`}>
          The Dictionary of Obscure Sorrows is a website, YouTube channel and book
          that coins and defines new words for emotions that don't have a name.
          It's a creative and insightful look at the human condition, and it can
          help you to better understand yourself and the world around you.
        </span>
      </div>
      <div className="word-box">
        <div className="word">{word[0]?.toUpperCase()}:</div>
        <div className="word-def">{word[1]?.toLowerCase()}</div>
      </div>
      <button onClick={randomWord}>New Word</button>
      {/* Render the WordDropdown component and pass the setWord function as a prop */}
      <WordDropdown setWord={setWord} />
    </div>
  );
}

export default App;
