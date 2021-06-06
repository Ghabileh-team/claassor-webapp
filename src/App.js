import Home from "./pages/Home/Home";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login/Signup/Login";
import Schools from "./pages/schools/Schools";
import PanelDashboard from "./pages/PanelDashboard";
import PanelArchive from "./pages/PanelArchive";
import PanelNotificaions from "./pages/PanelNotifications";
import PanelPlans from "./pages/PanelPlans";
import BookmarksPage from "./pages/PanelBookmarks";
import PanelMain from "./pages/PanelMain/PanelMain";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/schools" component={Schools} />

      {/* <Route path="/users/dashboard" component={PanelDashboard} /> */}
      <Route path="/users" component={PanelMain} />
      {/* <Route path="/users/archive" component={PanelArchive} /> */}
      <Route path="/users/plans" component={PanelPlans} />
      {/* <Route path="/users/notifications" component={PanelNotificaions} /> */}
      {/* <Route path="/users/bookmarks" component={BookmarksPage} /> */}
    </Router>
  );
}

export default App;
