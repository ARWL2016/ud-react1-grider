####Object Destructuring 
- `import { Component } from 'react';` is equivalent to `const Component = React.Component;` The {} allows us to pull a property of an object and assign that property to the same variable. 
- if the key and value of an object are the same, we can omit one: { data } 

####Getting Functional Component Props
These are equivalent: 
1. const video = props.video; 
2. ES6: const { video } = props; 
3. ES6: const component = ({video}) => {}


####Classes 
