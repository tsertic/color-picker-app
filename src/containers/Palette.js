import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';



class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format:"hex"
    };
  }

  changeLevel = newLevel => {
    this.setState({ level: newLevel });
  };

  changeFormat=(val)=>{
    this.setState({format:val})
  }

  render() {
    console.log(this.props);
    const { level,format } = this.state;
    const colorBoxes = this.props.palette.colors[level].map(color => {
      return <ColorBox background={color[format]} name={color.name} />;
    });
    return (
      <div className="Palette">
        <Navbar level={level} handleChange={this.changeFormat} changeLevel={this.changeLevel} />
        {/* Navbar goes  here */}
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Palette;
