import React from 'react';
import seedColors from './seedColors';
import Palette from './containers/Palette';
import { generatePalette } from './utils/colorHelpers';


function App() {
  const genPallete = generatePalette(seedColors[4]);

  return (
    <div>
      
      <Palette palette={genPallete} />
    </div>
  );
}

export default App;
