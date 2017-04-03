### Modern React with Redux (Udemy: Grider)
#### Blogging App 

#### Useful Links 
- http://reduxblog.herokuapp.com/ (API)

#### Featured Libraries 
- react-router 2.0.0-rc5
- redux-form 4.1.3 http://redux-form.com/6.6.1/docs/GettingStarted.md/ 

#### Techniques 
- Making get, post and delete requests with Redux   
- Navigating users programatically with React Router (`posts_new.js`) 
- Passing a route parameter into a component  
- Creating a Redux Form with validation, help text, and warnings (`posts_new`)  

#### Programmatic Navigation 
1. import PropTypes 
2. define router in a static contextTypes object  
3. Push the route: `this.context.router.push('/');` 
4. In this case, the navigation id defined in a `then` function after an API call 

#### Passing a Route Parameter  
1. In `routes.js` define the route: `<Route path = "posts/:id" component = { ... }/>`  
2. This will now be available on the component as `this.props.params.id`