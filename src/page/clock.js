import React from 'react';
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    console.log(this.state.date.toLocaleTimeString());
  }

  componentWillUnmount() {
    console.log(this.state.date.toLocaleTimeString());
  }

  componentDidUpdate() {
    console.log(this.state.date.toLocaleTimeString());
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default Clock;