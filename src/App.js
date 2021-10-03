import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddPost from "./components/add-post.component";
import Post from "./components/post.component";
import PostsList from "./components/posts-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href="/posts" className="navbar-brand text-primary ms-5">
            Blog
          </a>
          <div className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to={"/posts"} className="nav-link">
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/posts"]} component={PostsList} />
            <Route exact path="/add" component={AddPost} />
            <Route path="/posts/:id" component={Post} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
