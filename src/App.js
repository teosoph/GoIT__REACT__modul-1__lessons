import { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink as Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { Cat } from "components/Cat";
import { Hook } from "components/Hook";

// path = /test
class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <ul>
            <li>
              <Link exact activeClassName="active-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link exact activeClassName="active-link" to="/cat?v-meshke=true">
                Mr Cat
              </Link>
            </li>
          </ul>
        </header>
        <Switch>
          <Route path="/cat" component={Cat} />
          <Route path="/" exact component={Hook} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
