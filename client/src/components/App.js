import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser.js";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm.js";
import SignInForm from "./authentication/SignInForm.js";
import TopBar from "./layout/TopBar.js";
import FrontPage from "./FrontPage.js";
import PuzzlePage from "./PuzzlePage.js";
import PuzzleShow from "./PuzzleShow.js";
import RandomPuzzleShow from "./RandomPuzzleShow.js";
import CreateNewPuzzle from "./CreateNewPuzzle.js";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch(() => {
        setCurrentUser(null);
      });
  }, []);

  let userId

  if (currentUser) {
    userId = currentUser.id
  }

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <Route exact path="/">
          <FrontPage userId={userId}/>
        </Route>
        <Route exact path="/puzzle/:id">
          <PuzzleShow userId={userId} />
        </Route>
        <Route exact path="/puzzles">
          <PuzzlePage userId={userId} />
        </Route>
        <Route exact path="/randomPuzzle/:difficulty">
          <RandomPuzzleShow userId={userId} />
        </Route>
        <Route exact path="/createNewPuzzle">
          <CreateNewPuzzle userId={userId} />
        </Route>


      </Switch>
    </Router>
  );
};

export default hot(App);
