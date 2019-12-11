import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import LoginForm from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">
        <h1> My React app</h1>
      </Link>
      <ul>
        <li>
          <Link to="/FriendsList">Friends</Link>
        </li>
        <li>
          <Link to="/FriendsList/AddFriend">Add Friend</Link>
        </li>
      </ul>

      <Switch>
        <PrivateRoute exact path="/FriendsList" component={FriendsList} />
        <PrivateRoute path="/FriendsList/AddFriend" component={AddFriend} />

        <Route component={LoginForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
