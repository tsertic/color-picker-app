import React from "react";
import seedColors from "./seedColors";
import Palette from "./containers/Palette";
import { generatePalette } from "./utils/colorHelpers";

import { Route, Switch } from "react-router-dom";
import PaletteList from "./containers/PaletteList";

function App() {
  const genPallete = generatePalette(seedColors[4]);

  const findPalette = id => {
    return seedColors.find(palette => {
      return palette.id === id;
    });
  };

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          return <PaletteList palettes={seedColors} />;
        }}
      />
      <Route
        exact
        path="/palette/:id"
        render={routeProps => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
    </Switch>
  );
}

export default App;
