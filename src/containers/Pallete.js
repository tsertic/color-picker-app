import React, { Component } from 'react';

class Palette extends Component {
  render() {
    console.log(this.props.palette);
    return (
      <div>
        <h1>Pallete</h1>
      </div>
    );
  }
}

export default Palette;
