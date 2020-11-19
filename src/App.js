import "./App.css";

import InputTextBox from "./Components/InputTextBox";
import Title from "./Components/Title";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App App-header">
      <div className="header">
        <Title />
        <InputTextBox />
      </div>
      <Footer />
    </div>
  );
}

export default App;
