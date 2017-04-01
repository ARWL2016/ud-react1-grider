import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router'; 

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts(); 
  }
  render() {
    return (
      <div>
        <div className="text-xs-right"> 
          <a href="/posts/new" className="btn btn-primary">
            Add a Post 
            </a> 
        </div>
      List of blog posts 
      </div>
    );
  }
}




// give us access to this.props.fetchPost (shortcut method - without mapDispatchToProps)
// attaches fetchPosts to our component
export default connect(null, { fetchPosts })(PostsIndex); 