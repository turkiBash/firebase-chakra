import React, { useState } from "react";
import { ProfileContext } from "./context/useContext";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ProfileContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/Login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </ProfileContext.Provider>
  );
};

export default App;
