import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/home";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
