import React, { Component } from 'react';
import { reduxForm }  from 'redux-form'; 
import { createPost } from '../actions/index'; 

class PostsNew extends Component {
  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // blog post has been created, navigate the user to the index
        // We navigate by calling this.context.router.push with the
        // new path to navigate to.
        this.context.router.push('/');
      });
  }
  render() {
    const { fields: {title, categories, content}, handleSubmit } = this.props; // from redux-form
    //  same as: const title = this.props.fields.title; 
    return(
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}> 
          <h3>Create a New Post</h3>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" {...title} /> 
          </div>

          <div className="form-group">
            <label>Categories</label>
            <input type="text" className="form-control" {...categories} /> 
          </div>

          <div className="form-group">
            <label>Content</label>
            <textarea type="text" className="form-control" {...content} /> 
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form> 
    );
  }
}

export default reduxForm({
  form: 'PostsNew', 
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew); 



  /* 
  configure redux-form with field names 
  this enables redux-form to capture input as global application state
  using form reducer 
  redux-form is a wrapper for the PostsNew component
  Like connect, it is injecting helpers into our props
  The arguments are the same as connect, but there is an extra
  first argument: this configuration object 
  */

// object destructuring in line 13 adds methods like onChange, onBlur to our form input 