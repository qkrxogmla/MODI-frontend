import { jsx as _jsx } from "react/jsx-runtime";
import "./App.css";
import Router from "./routes/router";
import { CharacterProvider } from "./contexts/CharacterContext";
function App() {
    return (_jsx(CharacterProvider, { children: _jsx(Router, {}) }));
}
export default App;
