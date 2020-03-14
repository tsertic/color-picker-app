import React from 'react';
import seedColors from './seedColors';
import Palette from './containers/Palette';
import { generatePalette } from './utils/colorHelpers';

function App() {
  const newPallete = generatePalette(seedColors[4]);
  console.log(newPallete);

  return (
    <div>
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
