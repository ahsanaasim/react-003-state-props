# React JSX & Components

#### Getting Started with the previous project

#### Why jsx
It is faster because it performs optimization while compiling code to JavaScript.

It is also type-safe and most of the errors can be caught during compilation.

It makes it easier and faster to write templates, if you are familiar with HTML.


1. Create a seprate file Header.js which will be our first Component. It should extend  React.Component
2. It should export itself so we can import it in everywhere
3. Render should return only one html element which can have multiple child elements.
4. To import jsx file we need add the extension on import statement. and if it is js file then we dont need add the extension

#### Working with CSS
1. For inline styling, style attribute can have a object of object of style properties.
2. style properties should be camel cased but actual css property can be passed but will throw errors. So react recommends css properties to be camel cased.
3. css object can be used on style attribute.
##### CSS FILE Loader
1. npm install --save-dev style-loader css-loader
2. add loader in webpack
3. import in component
4. Add className
