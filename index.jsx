import { React } from "react";
import { ReactDOM } from "react-dom";

class HelloWorld extends React.Component {
  render() {
    return <div className="Hello">Hello World!</div>;
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById("container"));
