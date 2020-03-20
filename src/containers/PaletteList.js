import React, { Component } from 'react';
import './PaletteList.css';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { palettes } = this.props;

    return (
      <div className="PaletteList">
        <h1>React Colors</h1>
        {palettes.map(palette => {
          return <MiniPalette {...palette} />;
        })}
      </div>
    );
  }
}

export default PaletteList;
