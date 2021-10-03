import React, { Component } from "react";
import PostDataService from "../services/posts.service";
import { Link } from "react-router-dom";

export default class PostsList extends Component {
  constructor(props) {
    super(props);
    this.retrievePosts = this.retrievePosts.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActivePost = this.setActivePost.bind(this);
    this.removeAllPosts = this.removeAllPosts.bind(this);

    this.state = {
      posts: [],
      currentPost: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    this.retrievePosts();
    console.log("SDSDS");
  }

  retrievePosts() {
    console.log("OQU");
    PostDataService.getAll()
      .then((response) => {
        this.setState({
          posts: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    console.log("UHUUUU");
  }

  refreshList() {
    this.retrievePosts();
    this.setState({
      currentPost: null,
      currentIndex: -1,
    });
  }

  setActivePost(post, index) {
    this.setState({
      currentPost: post,
      currentIndex: index,
    });
  }

  removeAllPosts() {}

  render() {
    const { posts, currentPost, currentIndex } = this.state;
    console.log(posts);
    if (Array.isArray(posts)) {
      console.log("YEEEES");
    }
    if (Array.isArray(posts)) {
      console.log("YEEEES");
    } else {
      console.log("NSODOSODSO");
    }
    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3"></div>
        </div>
        <div className="col-md-6">
          <h4>Posts List</h4>

          <ul className="list-group">
            {posts &&
              posts.map((post, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActivePost(post, index)}
                  key={index}
                >
                  {post.title}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllPosts}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentPost ? (
            <div>
              <h4>Post</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentPost.title}
              </div>
              <div>
                <label>
                  <strong>Body:</strong>
                </label>{" "}
                {currentPost.body}
              </div>

              <Link to={"/posts/" + currentPost.id} className="badge-warning">
                Click to Edit
              </Link>
              </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Post...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
