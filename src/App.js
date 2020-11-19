import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import {Home, Post, Search, Categories, NavBar, Widget, Comment, LeaveComment, LikeBtn, DisLikeBtn, ShareBtn} from './Home';

function App() {
  return (
    <Router>
    <Switch>
        <Route path= "/">
          <Home/>
          <NavBar />
        </Route>
        <Route path="/Home">
          <NavBar />
          <Post />
          <Search />
          <Categories />
        </Route> 
    </Switch>
  </Router>
  );
}

export default App;
