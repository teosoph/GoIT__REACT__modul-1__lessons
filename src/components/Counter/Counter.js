import { Component } from "react";

// Old lexicon
// import React, { Component } from "react";
// import React from "react";

import { Increment } from "./Increment";

export class Counter extends Component {
  // export class Counter extends React.Component {
  state = {
    value: 10,
    open: true,
  };

  handleClick = () => {
    this.myProp = setTimeout(() => {
      this.setState({ value: 11 });
    }, 5000);
  };

  toggleOpen = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <h1>
          {this.props.name} {this.props.count}
        </h1>
        <div>
          <button onClick={this.toggleOpen}>Toggle increment</button>
        </div>
        {this.state.open && (
          <div onClick={this.handleClick}>
            <Increment
              name={this.props.name}
              onClick={this.props.onIncrement}
            />
          </div>
        )}
      </div>
    );
  }
}

Counter.defaultProps = {
  name: "Banana 🍌",
};
