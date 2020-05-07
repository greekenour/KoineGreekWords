import { useState, useCallback, useEffect } from "react";
import { generateEmptyWords } from "../tools/Utilities";
import * as api from "../api/KoineWordsApi";

export function useKoineWords() {
  const [words, setWords] = useState(generateEmptyWords());
  debugger;
  const getWordData = useCallback(async () => {
    const res = await api.getWordData();
    setWords(res);
  }, []);

  useEffect(() => {
    getWordData();
  }, [getWordData]);

  return {
    words,
  };
}
