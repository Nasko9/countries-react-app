import { Routes as Switch, Route } from "react-router-dom";
// Pages
import Home from "./Home";
import SingleCountry from "./SingleCountry";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/:name" element={<SingleCountry />} />
    </Switch>
  );
}
