import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router'; 

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts(); 
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id} > 
          <span className="pull-xs-right">{post.categories}</span>
          <strong>{post.title}</strong>
        </li> 
      );
    });
  }
  render() {
    return (
      <div>
        <div className="text-xs-right"> 
          <a href="/posts/new" className="btn btn-primary">
            Add a Post 
            </a> 
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all }
}

// give us access to this.props.fetchPost (shortcut method - without mapDispatchToProps)
// attaches fetchPosts to our component
export default connect(mapStateToProps, { fetchPosts })(PostsIndex); 