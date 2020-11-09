import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FirstPage } from "./pages/FirstPage";
import { SecondPage } from "./pages/SecondPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FirstPage} />
        <Route path="/second" exact component={SecondPage} />
      </Switch>
    </BrowserRouter>
  );
};
