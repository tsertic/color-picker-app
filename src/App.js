import React from 'react';
import seedColors from './seedColors';
import Palette from './containers/Palette';

function App() {
  return (
    <div>
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
