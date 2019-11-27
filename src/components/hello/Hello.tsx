import * as React from "react";

interface HelloProps {
  name: string;
}

class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <h1 className="Hello">Hello {this.props.name}</h1>;
  }
}

export default Hello;
