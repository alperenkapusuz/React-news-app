import React from "react";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Home from "./components/home/Home"
import Business from "./components/categories/Business";
import Entertainment from "./components/categories/Entertainment";
import Health from "./components/categories/Health"
import Science from "./components/categories/Science"
import Sports from "./components/categories/Sports"
import Technology from "./components/categories/Technology"
import Navi from "./components/navi/Navi";

const App = () => {
  return (
    <BrowserRouter>
    <Navi/>
      <Switch>
      <Route path="/" exact component={Home} />
        <Route path="/business" exact component={Business} />
        <Route path="/entertainment" exact component={Entertainment} />
        <Route path="/health" exact component={Health} />
        <Route path="/science" exact component={Science} />
        <Route path="/sports" exact component={Sports} />
        <Route path="/technology" exact component={Technology} />
      </Switch>
      </BrowserRouter>
  );
};

export default App;
