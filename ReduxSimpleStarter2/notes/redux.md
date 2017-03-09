**reducer** - a function which returns a piece of the application state. Redux maintains global application state. Reducers may respond to actions and mutate the application state.  
**container** - (aka 'smart component') a react component that has a direct connection to application state maintained by Redux.   
**action** - an object which contains data about an action, such as action type and any associated date. Actions are automatically sent to all reducers.   
**action creator** - a function which returns an action.  Action creator functions are called by events such as button clicks and API responses.  
**state** - the global application state maintained by Redux as a simple Javascript object. It is completely independent of component state. 


####General Notes 
- There is absolutely no intrinsic connection between React and Redux. To bridge the React App to the Data container, use 'react-redux' library.
- Container or smart components are usually the most-parent component that cares about a particular part of the Redux state.  
- We cannot return an undefined value from a reducer.  
- Reducers will be called automatically on application bootup  
- Note that Reducers will be called continually, often with events that don't apply to them. So they must be able to return the same state as a default.  

####Creating a Container Component 
1. `import { connect } from 'react-redux';` This function will join the component to the redux state. 
2. Create a mapStateToProps(state) {}. This function will take in the application (Redux) state and return the props for this component. What is returned will be available as `this.props`.  
3. `export default connect(mapStateToProps)(BookList);` Call the connect function twice: on the mapping function and the component.  
4. Remember to move the `export default` statement from the component to the connect function. 
5. This file will now export a component glued to the Redux state. 
6. Nb. The container will rerender when the state changes.  

