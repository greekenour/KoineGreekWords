import React from "react";
import Header from "../Header";
import BodyLayout from "../BodyLayout";
import { useKoineWords } from "../../context/WordsHook";
import { WordsContainer } from "../../context/WordsContainer";

function KOINE() {
  return (
    <React.Fragment>
      <Header />
      <WordsContainer.Provider initialState={useKoineWords()}>
        <BodyLayout />
      </WordsContainer.Provider>
    </React.Fragment>
  );
}

export default KOINE;
