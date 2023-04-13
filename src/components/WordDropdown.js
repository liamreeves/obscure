// Importing required dependencies
import { useEffect, useState } from "react";
import { words } from "../words/word";

// Declaring functional component
export default function WordDropdown(props) {
  
  // State variable to hold full list of words
  const [fullWordList, setFullWordList] = useState([]);

  // Effect hook to fetch all words from the word file
  useEffect(() => {
    let wordArray = [];
    const letters = Object.keys(words);

    // Looping through all letters and words to create an array
    letters.map((letter) => {
      Object.keys(words[letter]).map((word) => {
        wordArray = wordArray.concat([[letter, word]]);
        return wordArray;
      });
      return wordArray;
    });
    // Updating the state variable with the word array
    setFullWordList(wordArray);
  }, []);

  // Creating an array of options for dropdown
  const dropdownOptions = fullWordList.map((wordArray) => {
    return (
      <option key={wordArray[1]} value={wordArray}>
        {wordArray[1].toUpperCase()}
      </option>
    );
  });

  // Rendering the dropdown with options and onChange event
  return (
    <select
      onChange={(event) => {
        const letterAndWord = event.target.value.split(",");
        props.setWord([
          letterAndWord[1],
          words[letterAndWord[0]][letterAndWord[1]],
        ]);
      }}
      className="dropdown-option"
    >
      {dropdownOptions}
    </select>
  );
}
