import React, { useEffect, useState } from "react";
import "./App.css";
import { words } from "./words/word";

function App() {
  const [word, setWord] = useState([]);

  const randomWord = () => {
    // get a list of keys from object
    const keys = Object.keys(words);
    // get a random key from that list
    const randomLetter = keys[(keys.length * Math.random()) << 0];
    // using that key select a subset fro the object
    const randomSubset = words[randomLetter];
    // then get a list of keys from that subset
    const subKeys = Object.keys(randomSubset);
    // finally get a random item from the subset
    const finalWord = subKeys[(randomSubset.length * Math.random()) << 0];
    console.log(finalWord);
    setWord([finalWord, randomSubset[finalWord]]);
  };
  
  useEffect(() => {
    randomWord();
  }, []);

  return (
    <div className="App">
      <div className="word-box">
        <div>{word[0]}:</div>
        <div>{word[1]}</div>
        <button onClick={randomWord}>New Word</button>
      </div>
    </div>
  );
}

export default App;
