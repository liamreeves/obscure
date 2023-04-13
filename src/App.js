// Importing required dependencies
import React, { useEffect, useState } from "react";
import "./App.css";
import { words } from "./words/word";
import WordDropdown from "./components/WordDropdown";

function App() {
  const [word, setWord] = useState([]);

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
      <div className="word-box">
        <div className="word">{word[0]?.toUpperCase()}:</div>
        <div className="word-def">{word[1]?.toLowerCase()}</div>
        <button onClick={randomWord}>New Word</button>
      </div>
      {/* Render the WordDropdown component and pass the setWord function as a prop */}
      <WordDropdown setWord={setWord} />
    </div>
  );
}

export default App;
