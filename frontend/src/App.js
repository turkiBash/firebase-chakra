import React, { useState } from "react";
import { ProfileContext } from "./context/useContext";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const MyTheme = extendTheme({
  color: {
    primary: "#e2f4fb",
    secondary: "#3c8da8",
    highlight: "#9b89b3",
    warning: "#c34a36",
  },
});

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ProfileContext.Provider value={ {setIsLoggedIn, isLoggedIn }}>
      <ChakraProvider theme={MyTheme}>
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
      </ChakraProvider>
    </ProfileContext.Provider>
  );
};

export default App;
