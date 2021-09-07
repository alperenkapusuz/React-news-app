import React from "react";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Business from "./components/Business";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Business} />
      </Switch>
      </BrowserRouter>
  );
};

export default App;
