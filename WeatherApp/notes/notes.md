####This and Event Handlers 
1. `onChange={this.onInputChange}`. When attaching an event handler callback to an element, the context of **this** may be lost.  
2. `this.onInputChange = this.onInputChange.bind(this);` This line inside the constructor will bind the current component to the handler.
3. In some situation, we may be able to use a fat arrow function on the attribute itself.  

####Form Element Default Behaviors
- refresh the page on submit 
- clear form input on submit 
- submit on enter  (this ) 

####Middleware in Redux 
- the middleware functions sit between the action creator and the reducers, and act like a gatekeeper  
- Redux-Promise takes in a promise from the action-creator and pauses execution until the promise resolves, then passes the action (with the response data now attached to the payload) to the reducer. 
- Redux-Promise copes with the async request, so that the action and reducer functions can remain synchronous.  
