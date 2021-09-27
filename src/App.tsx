import Home from "./app/pages/Home/Home";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Login from "./app/pages/Login/Signup/Login";
import Schools from "./app/pages/schools/Schools";

import PanelMain from "./app/pages/PanelMain/PanelMain";
import { ThemeConsumer, ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/schools" component={Schools} />

        {/* <Route path="/users/dashboard" component={PanelDashboard} /> */}
        <Route path="/users" component={PanelMain} />
        {/* <Route path="/users/archive" component={PanelArchive} /> */}
        {/* <Route path="/users/plans" component={PanelPlans} /> */}
        {/* <Route path="/users/notifications" component={PanelNotificaions} /> */}
        {/* <Route path="/users/bookmarks" component={BookmarksPage} /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
