import { createRef, Component } from "react";
import PropTypes from "prop-types";

export class Increment extends Component {
  state = {
    value: 0,
  };

  intervalId = null;

  updateValue = () => {
    this.setState({ value: this.state.value + 3 });
  };

  componentDidMount() {
    // console.log('component did mount');
    // this.intervalId = setInterval(() => console.log("kvas"), 2000);
  }

  componentWillUnmount() {
    console.log("component will unmount");
    // clearInterval(this.intervalId);
  }

  render() {
    // console.log('render');
    return (
      <div>
        <input ref={this.myFirstRef} />
        <button onClick={this.updateValue}>+++</button>
        <p>Value = {this.state.value}</p>
      </div>
    );
  }
}
