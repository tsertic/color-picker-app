import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500
    };
  }

  changeLevel = newLevel => {
    this.setState({ level: newLevel });
  };

  render() {
    console.log(this.props);
    const { level } = this.state;
    const colorBoxes = this.props.palette.colors[level].map(color => {
      return <ColorBox background={color.hex} name={color.name} />;
    });
    return (
      <div className="Palette">
        <div>
          <Slider
            min={100}
            step={100}
            max={900}
            defaultValue={level}
            onAfterChange={this.changeLevel}
          />
        </div>
        {/* Navbar goes  here */}
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
