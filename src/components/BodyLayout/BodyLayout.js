import React from "react";
import Flashcard from "../Flashcard";
import { WordsContainer } from "../../context/WordsContainer";

function BodyLayout() {
  const result = WordsContainer.useContainer();
  const words = Object.values(result);
  debugger;
  return words[0].map((item) => {
    return <Flashcard word={item} key={item.id} />;
  });
}

export default BodyLayout;
