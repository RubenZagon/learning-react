import * as React from "react";
import "./App.css";
import Hello from "./components/hello/Hello";

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello name="Paco"></Hello>
        <Hello name="Dimp"></Hello>
      </div>
    );
  }
}

export default App;
