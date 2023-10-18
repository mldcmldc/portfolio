import { useEffect, useState } from "react";

function useRandomizeText(){
    const letters = "abcdefghijklmnopqrstuvwxyz";
  const endOutput = "frontend developer";

  function getRandomIndexFromAlphabet() {
    const alphabetLength = 26;

    return Math.floor(Math.random() * alphabetLength);
  }

  function generateRandomText(input: string, start: number) {
    const partial = endOutput.substring(0, start);

    const jumbledLetters = Array.from(input.substring(start)).map(
      (_) => letters.split("")[getRandomIndexFromAlphabet()]
    );

    const result = partial + jumbledLetters.join("");

    setTitle(result);
  }

  function getInitialRandomText() {
    const jumbledLetters = Array.from(Array(endOutput.length)).map(
      (_) => letters.split("")[getRandomIndexFromAlphabet()]
    );

    return jumbledLetters.join("");
  }

  const [title, setTitle] = useState("");

  useEffect(() => {
    let index = 0;
    let result = getInitialRandomText();

    setTimeout(() => {
      const interval = setInterval(() => {
        generateRandomText(result, index);

        index += 1;

        if (index == endOutput.length + 1) clearInterval(interval);
      }, 150);
    }, 500);
  }, []);

  return { title }
}

export default useRandomizeText;