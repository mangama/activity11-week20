import React from "react";
import Books from "./pages/Books";
import NoMatch from "./pages/NoMatch";
import Detail from "./pages/Detail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NavBar from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <div className ="container">
            <Switch>
            <Route exact path="/" component={Books} />
              <Route exact path="/books" component={Books} />
              <Route exact path="/details" component={Detail} />
              <Route component={NoMatch} /> {/* This means that any other url will take you there */}
            </Switch>
          </div>
        </>
    </Router>
  );
}

export default App;
