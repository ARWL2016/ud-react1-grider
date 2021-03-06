#### This and Event Handlers 
1. `onChange={this.onInputChange}`. When attaching an event handler callback to an element, the context of **this** may be lost.  
2. `this.onInputChange = this.onInputChange.bind(this);` This line inside the constructor will bind the current component to the handler.
3. In some situation, we may be able to use a fat arrow function on the attribute itself.  

#### Form Element Default Behaviors
- refresh the page on submit 
- clear form input on submit 
- submit on enter  (this ) 

#### Middleware in Redux 
- the middleware functions sit between the action creator and the reducers, and act like a gatekeeper  
- Redux-Promise takes in a promise from the action-creator and pauses execution until the promise resolves, then passes the action (with the response data now attached to the payload) to the reducer. 
- Redux-Promise copes with the async request, so that the action and reducer functions can remain synchronous.  

#### Redux and State (and ES6 Spread Operator)
- As in a component, we do not change state directly (by assignment), we use setState.  
- As a general principle, we should not mutate current state in a reducer. We should return a completely new instance of state. 
- Using .push() will mutate state, because it adds to the current array.
- Using concat() will join state to a new array and return a NEW ARRAY. 
- `return state.concat([action.payload.data]);` or:   
- ES6: `return [ action.payload.data, ...state ];` This is the spread operator. It unpacks an array. It can be used for merging arrays and for passing an array as a set of arguments to a function. 

#### Keys
- These should be applied to the top level element in a list

#### ES6 Stateless Functional Component
- `export default (props) => { return () }`

#### Ref 
- Gives us a reference to an HTML element that has been rendered to the page. 
- Google maps can use this to render an embedded map
- Refs is useful for integrating with 3rd party libraries that are difficult to integrate with React  

#### ES6 Const
- const is a value that cannot be reassigned. But, it can contain changing values. For example, if we have a function `const result = a + b` then we can pass in different values and the value of result will change. What we cannot do is reassign to `result = a - b`. 
- Therefore, if const is a number or a string, then it is immutable. But if it is an object, we can change values inside the object. We can also add new properties. 
- If const is a function, that function can return different values. 
  