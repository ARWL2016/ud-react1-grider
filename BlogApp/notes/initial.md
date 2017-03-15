####React-Router
- Has had a very changeable API
- react-router contains a history library that watches for URL changes
- browserHistory and hashHistory are two alternative objects which help react-router to track URL changes. 
- browserHistory interprets everything after the protocol and hostname. 
- hashHistory interprets everything after an interpolated #
- a nested route must be rendered by its parent component's render method as {this.props.children}

####IndexRoute 
- This is shown by default with its parent component unless a sibling component is specified. Basically, a default route. 
- It has no path of its own. 

####Redux-Promise 
- This must be imported at `index.js` and passed to the applyMiddleware function from Redux.  
