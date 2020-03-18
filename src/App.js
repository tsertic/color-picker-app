import React from "react";
import seedColors from "./seedColors";
import Palette from "./containers/Palette";
import { generatePalette } from "./utils/colorHelpers";

import { Route, Switch } from "react-router-dom";

function App() {
  const genPallete = generatePalette(seedColors[4]);

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <h1>Pallet list</h1>;
        }}
      />
      <Route
        exact
        path="/palette/:id"
        render={() => <h1>Individual palette</h1>}
      />
      {/*     <div>
        <Palette palette={genPallete} />
      </div> */}
    </Switch>
  );
}

export default App;
