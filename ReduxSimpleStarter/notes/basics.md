####General Notes
- We only need ReactDOM when we are actually rendering the root component into html file. 
- Simple functional components can be used just for display components. But if a component need to maintain some state, we should use a class component.
- if we declare a component with `class SearchBar extends React.Component` then our class inherits properties and methods from the React Component class. 