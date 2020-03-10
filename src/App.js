import React from 'react';
import seedColors from './seedColors';
import Palette from './containers/Pallete';

function App() {
  return (
    <div>
      <Palette palette={seedColors[4]} />
    </div>
  );
}

export default App;
