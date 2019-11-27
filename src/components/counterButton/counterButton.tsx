import * as React from "react";

interface CounterButtonState {
  numberOfClicks: number;
}

class CounterButton extends React.Component<{}, CounterButtonState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      numberOfClicks: 0
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState({
      numberOfClicks: this.state.numberOfClicks + 1
    });
  }

  render() {
    return (
      <button onClick={this.incrementCount}>{this.state.numberOfClicks}</button>
    );
  }
}

export default CounterButton;
