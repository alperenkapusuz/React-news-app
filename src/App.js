import React from "react";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Business from "./components/Business";
import Navi from "./components/Navi";

const App = () => {
  return (
    <BrowserRouter>
    <Navi/>
      <Switch>
        <Route path="/business" exact component={Business} />
      </Switch>
      </BrowserRouter>
  );
};

export default App;
