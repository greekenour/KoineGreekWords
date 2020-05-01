import React from "react";
import Header from "../Header"
import Flashcard from "../Flashcard";
import { useKoineWords } from "../../context/WordsHook";
import { WordsContainer } from "../../context/WordsContainer";

function KOINE () {
    return (
        <>
            <Header />
            <WordsContainer.Provider initialState={useKoineWords()}>
                <Flashcard />
            </WordsContainer.Provider>
        </>
    )
}

export default KOINE;