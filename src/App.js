import Home from "./pages/Home/Home";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login/Signup/Login";
import Schools from "./pages/schools/Schools";
const Parse = require("parse");
Parse.serverURL = "https://parse-server-dev-claassor-app.fandogh.cloud/parse";
Parse.initialize("Claassor-dev-app");
function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/schools" component={Schools} />
    </Router>
  );
}

export default App;
