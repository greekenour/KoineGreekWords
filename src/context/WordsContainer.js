import { createContainer } from "unstated-next";
import { useKoineWords } from "./WordsHook";

export const WordsContainer = createContainer(() => { return useKoineWords() });