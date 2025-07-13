import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useContext } from "react";
const CharacterContext = createContext({
    character: null,
    setCharacter: () => { },
});
export function CharacterProvider({ children }) {
    const [character, setCharacter] = useState(() => localStorage.getItem("character") || null);
    const saveCharacter = (c) => {
        setCharacter(c);
        if (c)
            localStorage.setItem("character", c);
        else
            localStorage.removeItem("character");
    };
    return (_jsx(CharacterContext.Provider, { value: { character, setCharacter: saveCharacter }, children: children }));
}
export function useCharacter() {
    return useContext(CharacterContext);
}
