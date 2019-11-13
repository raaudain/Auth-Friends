import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";
import {axiosWithAuth} from "./auth/axiosAuth"

function App() {

  const [friends, setFriends] = useState([]);

  useEffect(() => {
      axiosWithAuth()
          .get("/api/friends")
          .then(res => {
              console.log("axios", res.data)
              const listFriends = res.data;
              setFriends(...friends, listFriends)
              
          })
          
          .catch(err => console.log(err.response))
  },[]);

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
          <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Pages</Link>
          </li>
        </ul>
        <Switch>

          <PrivateRoute path="/protected">
            
            <AddFriend friends={friends} setFriends={setFriends} />
            <FriendsList friends={friends} />
          </PrivateRoute>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
