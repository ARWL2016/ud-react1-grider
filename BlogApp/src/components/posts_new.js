import React, { Component } from 'react';
import { reduxForm }  from 'redux-form'; 

class PostsNew extends Component {
  render() {
    const { fields: {title, categories, content}, handleSubmit } = this.props; // from redux-form
    //  same as: const title = this.props.fields.title; 
    return(
        <form onSubmit={handleSubmit}> 
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
  /* 
  configure redux-form with field names 
  this enables redux-form to capture input as global application state
  using form reducer 
  redux-form is a wrapper for the PostsNew component
  Like connect, it is injecting helpers into our props
  */
  form: 'PostsNewForm', 
  fields: ['title', 'categories', 'content']

})(PostsNew); 

// object destructuring in line 13 adds methods like onChange, onBlur to our form input 