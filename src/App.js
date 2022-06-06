import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import "bootstrap/dist/css/bootstrap.min.css";
import Upload from "./pages/upload";
import "./App.css";
import Post from "./pages/post";
import Due from "./pages/due";
import Summary from "./pages/summary";

function App() {
  return (
    <div className="App">
      <Router className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/signup" component={Signup} /> */}
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/summary" component={Summary} />
          <Route exact path="/due" component={Due} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
