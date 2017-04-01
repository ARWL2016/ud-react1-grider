import React, { Component, PropTypes } from 'react';
import { reduxForm }  from 'redux-form'; 
import { createPost } from '../actions/index'; 
import { Link } from 'react-router'; 

class PostsNew extends Component {
  // gives us access to context 
  // context behaves like props, but is used implicitly by React
  static contextTypes = {
    router: PropTypes.object
  }; 

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

          <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
            <label>Title</label>
            <input type="text" className="form-control" {...title} /> 
            <div className = "text-help"> 
              {title.touched ? title.error : ''}
            </div> 
          </div>

          <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
            <label>Categories</label>
            <input type="text" className="form-control" {...categories} /> 
            <div className = "text-help"> 
              {categories.touched ? categories.error : ''}
            </div> 
          </div>

          <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
            <label>Content</label>
            <textarea type="text" className="form-control" {...content} /> 
            <div className = "text-help"> 
              {content.touched ? content.error : ''}
            </div> 
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form> 
    );
  }
}

function validate(values) {
  const errors = {}; 

  if(!values.title) {
    errors.title = 'Enter a username';
  }
  if(!values.categories) {
    errors.categories = 'Enter categories';
  }
  if(!values.content) {
    errors.content = 'Enter some content';
  }

  return errors; 
}

export default reduxForm({
  form: 'PostsNew', 
  fields: ['title', 'categories', 'content'], 
  validate: validate 
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