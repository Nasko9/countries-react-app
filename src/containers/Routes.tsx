import { Switch, Route } from "react-router-dom";

// Pages
import Home from "./Home";
import SingleCountry from "./SingleCountry";

export default function Routes(): any {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/singleCountry">
        <SingleCountry />
      </Route>
    </Switch>
  );
}
