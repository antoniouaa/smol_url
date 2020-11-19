import logo from "./logo.svg";
import "./App.css";

import InputTextBox from "./Components/InputTextBox";
import Title from "./Components/Title";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <InputTextBox />
      </header>
    </div>
  );
}

export default App;
