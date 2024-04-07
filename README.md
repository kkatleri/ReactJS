# Learning ReactJS

This repository contains my understanding of ReactJS and example react scripts as part of my learning journey. 

## What is React
- React is one of the most popular development framework for Single Page Applications (SPAs).
- It was developed by Facebook. But now its used by lot of big techs out there.

## Why React
- It provides innovative way to solve traditional problems with Single page applications as below - 
    - Automatic UI State Management
    - Lightning fast DOM Manipulation
        - Provides virtual DOM which later gets synched to actual DOM as an when needed. This process is called Reconciliation.
    - Provides great API to develop and manage UI reusable components.
    - View through JavaScript
        - Provides power of javascript to define our view
        - Its called JSX (JavaScript XML)
- Basically React addresses V(view) component in the MVC architecture.

## JSX
- JSX stands for JavaScript XML. 
- It is a syntax extension for JavaScript that is often used with the React library to describe what the UI should look like. 
- By using JSX, you can write HTML structures in the same file as your JavaScript code, making the code easier to understand and develop 

## Babel Script
- Converts JSX into plain HTML & JavaScript that browser can understand
- This is included in React scripts

## Example scripts to demonstrate the understanding of the important concepts

### 1. [First React script](#First-Reaction)
- Writing simple Hello script by importing react and babel scripts, and using simple react syntax for content rendering.

### 2.  [Understanding Components](#components)
- Create a simple component
- Create complext components by combining multiple components
- Display list of items

### 3. [Understanding Events](#events)
- How to handle events

### 4. [Understaning State Management](#state)
- How to update UI state based on user inputs dynamically. 

### 5. [Understanding Styling](#styling)
- How to apply styling the react way using `style` attribute


## React Projects

- This section demonstrates how React projects are created using CREATE-REACT-APP CLI utility.
- Syntax - `npx create-react-app <project-name>
- There are 2 types of components 
    - Class based components - This is what explored in the previous sections while learning about important concepts. These inherently provides state and are verbose in nature.
    - Function based components - This was introducded and encouraged in the later version of React. These are stateless, lightweight and easy to test components and provides better encapsulation.
- Latest React version create-react-app utility will create project with function based components.
- Following projects are created to explore more features of React

### 1. First React Project
- How to create react project using create-react-app utility.
- Understand project structure
- Understand execution flow
    - React Webpack plugin plays important role in starting up React application
    - It invokes index.js which is the starting point 

### 2. Making Ajax Calls
- How to call REST APIs - GET, POST
- Use of Axion library to make REST calls

### 3. Component Lifecycle
- Understand various component lifecycle and methods 
- How to make use React Hooks to use states with Function based components.
    - useState - helps manage the state 
    - useEffect - helps be in sync with external system such as API calls

 