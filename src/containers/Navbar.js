import React, { Component } from "react";
import "./Navbar.css";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
//material ui
import Select from '@material-ui/core/Select'
import { MenuItem } from "@material-ui/core";

class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="/">reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <span>Level:{level}</span>
          <div className="slider">
            <Slider
              min={100}
              step={100}
              max={900}
              defaultValue={level}
              onAfterChange={changeLevel}
            />
          </div>

        </div>
        <div className="select-container">
            <Select>
                <MenuItem value="hex">HEX - #ffffff</MenuItem>
                <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                <MenuItem value="rgba">RGBA - rgba(255,255,255,0.1)</MenuItem>
               
            </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;
