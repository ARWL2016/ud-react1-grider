####General Notes
- We only need ReactDOM when we are actually rendering the root component into html file. 
- Simple functional components can be used just for display components. But if a component need to maintain some state, we should use a class component.
- Functional components can contain class-based components. 
- if we declare a component with `class SearchBar extends React.Component` then our class inherits properties and methods from the React Component class. 

####State 
- An object on each class-based component. It's a component-level attribute.  
- Functional components do not have state.  
- When updated, the component and all child components are automatically rerendered.  
- In ES6, we use `constructor` to set initial state. This is called automatically each time the component is instantiated / rendered. 
- In the constructor ONLY, we don't have to use `setState`. 

####Controlled Component    
- a controlled component (such as an input) has its value set by state.  
- Add property value={this.state.x} to create a controlled component.  

####Data  
- In React, there is a concept of 'downward data flow'.   
- An API call should be performed on the most parent component.  

####Props
- Added as an attribute to a JSX Component tag.  
- In a functional component, (props) are an argument, available as `props`. 
- In a class component, props are available anywhere as this.props 

####Callback Functions  
- Adding a callback function to props is a good way to do parent-child communication, especially for input handlers.  
- Redux is an alternative.  