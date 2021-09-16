import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import useStateComponent from "./01-useState";
import UseReducerComponent from "./06-useReducer";
export default function App() {
  return (
    <Router>
      <div className="links">
        <NavLink to="/useState">useState</NavLink>
        <NavLink to="/useEffect">useEffect</NavLink>
        <NavLink to="/useReducer">useReducer</NavLink>
      </div>
      <Switch>
        <Route path="/useState" component={useStateComponent} />
        <Route path="/useReducer" component={UseReducerComponent} />
      </Switch>
    </Router>
  );
}
