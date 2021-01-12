import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import {Post, Search, Categories, NavBar, Widget, Comment, LeaveComment, Btns, AddPost} from './Home';
import {Login, Register} from './Login';
import {insertIntoDb} from './licenta/connect';



ReactDOM.render(
<React.StrictMode>

<Router>
  <Switch>
      <Route path= "/Login">
        <Login />
      </Route>
      <Route path= "/Register">
        <Register />
      </Route>
      <Route exact path= "/">
        <NavBar />
        <Home/>
        <Search />
        <Categories />
        <Widget />
      </Route>
      <Route path="/Home">
        <NavBar />
        <Post />
        <Search />
        <Categories />
        <Widget />
        <Btns />
        <LeaveComment />
        <Comment />
        <Comment />
      </Route>
      <Route path="/AddPost">
        <NavBar />
        <AddPost />
        <Search />
        <Categories />
        <Widget />
      </Route> 
  </Switch>
</Router>
        
</React.StrictMode>,

document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
