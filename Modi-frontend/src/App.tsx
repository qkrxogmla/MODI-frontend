import "./App.css";
import Router from "./routes/router";
import { CharacterProvider } from "./contexts/CharacterContext";
import Footer from "./components/common/Footer";

function App() {
  return (
    <CharacterProvider>
      <Router />
      <Footer />
    </CharacterProvider>
  );
}

export default App;
