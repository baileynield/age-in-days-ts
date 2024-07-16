import "./App.css";
import Calculator from "./Calculator";

function App() {
  return (
    <>
      <header>
        <h1>Age in Days Calculator</h1>
        <p>Given how many years old someone is, this app will tell you how many days old they are</p>
      </header>
      <main>
        <Calculator />
      </main>
    </>
  );
}

export default App