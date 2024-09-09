const data = [
    {
      id:1,
      question: "What is React JS?",
      answers: [
        {
          text: "Server-side Framework",
          correct: false,
        },
        {
          text: "User-interface framework",
          correct: false,
        },
        {
          text: "A Library for building interaction interface",
          correct: true,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id:2,
      question: "How many elements does a react component return?",
      answers: [
        {
          text: "1 Element",
          correct: false,
        },
        {
          text: "2 Elements",
          correct: false,
        },
        {
          text: "Multiple Elements",
          correct: true,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id:3,
      question: "Everthing in React is a -------?",
      answers: [
        {
          text: "Module",
          correct: false,
        },
        {
          text: "Component",
          correct: true,
        },
        {
          text: "Package",
          correct: false,
        },
        {
          text: "Class ",
          correct: false,
        },
      ],
    },
    {
      id:4,
      question: "The arbitrary inputs of components are called ---?",
      answers: [
        {
          text: "Props",
          correct: true,
        },
        {
          text: "Keys",
          correct: false,
        },
        {
          text: "Elements",
          correct: false,
        },
        {
          text: "Ref ",
          correct: false,
        },
      ],
    },
    {
      id:5,
      question: "What is used to pass a data to a component from outside?",
      answers: [
        {
          text: "setState",
          correct: false,
        },
        {
          text: "render with arguments",
          correct: false,
        },
        {
          text: "PropTypes",
          correct: false,
        },
        {
          text: "props ",
          correct: true,
        },
      ],
    },
    {
      id:6,
      question: "Which of the following is not a rile for React Hooks?",
      answers: [
        {
          text: "Hooks can be called in Class or Function components",
          correct: true,
        },
        {
          text: "Hooks cannot be conditional",
          correct: false,
        },
        {
          text: "Hooks can only be called at the top level of a component",
          correct: false,
        },
        {
          text: "Hooks can only be called inside React Function components ",
          correct: false,
        },
      ],
    },
    {
      id:7,
      question: "Ref is used for reffering an element or component returned by -------",
      answers: [
        {
          text: "react()",
          correct: false,
        },
        {
          text: "render()",
          correct: true,
        },
        {
          text: "reduce()",
          correct: false,
        },
        {
          text: "refer() ",
          correct: false,
        },
      ],
    },
    {
      id:8,
      question: "What is the correct syntex to import a Component from React?",
      answers: [
        {
          text: "import {Component} from 'react' ",
          correct: true,
        },
        {
          text: "import Component from 'react'",
          correct: false,
        },
        {
          text: "import [Component] from 'react'",
          correct: false,
        },
        {
          text: "import React.Component from 'react' ",
          correct: false,
        },
      ],
    },
    {
      id:9,
      question: "What is a common use case for ref?",
      answers: [
        {
          text: "To ref to a function",
          correct: false,
        },
        {
          text: "To directly access a DOM node",
          correct: true,
        },
        {
          text: "To ref to another JavaScript file",
          correct: false,
        },
        {
          text: "To bind a function",
          correct: false,
        },
      ],
    },
    {
      id:10,
      question: "What tool does React use to compile JSX",
      answers: [
        {
          text: "JSX Compiler",
          correct: false,
        },
        {
          text: "ReactDom",
          correct: false,
        },
        {
          text: "Babel",
          correct: true,
        },
        {
          text: "React Router",
          correct: false,
        },
      ],
    },
    {
      id:11,
      question: "Which operator can be used to conditionally render a React component?",
      answers: [
        {
          text: "??",
          correct: false,
        },
        {
          text: "||",
          correct: false,
        },
        {
          text: "::",
          correct: false,
        },
        {
          text: "&& ",
          correct: true,
        },
      ],
    },
    {
      id:12,
      question: "What is the defualt local host port that a React development servers uses?",
      answers: [
        {
          text: "3500",
          correct: false,
        },
        {
          text: "3000",
          correct: true,
        },
        {
          text: "8080",
          correct: false,
        },
        {
          text: "5000 ",
          correct: false,
        },
      ],
    },
    {
      id:13,
      question: "What command is used to start the React local development server?",
      answers: [
        {
          text: "npm serve",
          correct: false,
        },
        {
          text: "npm run dev",
          correct: false,
        },
        {
          text: "npm build",
          correct: false,
        },
        {
          text: "npm start",
          correct: true,
        },
      ],
    },
    {
      id:14,
      question: "what is the correct command to create a new React project?",
      answers: [
        {
          text: "npx creat-react-app",
          correct: false,
        },
        {
          text: "npm create-react-app myReactApp",
          correct: false,
        },
        {
          text: "npx create-react-app myReactApp",
          correct: true,
        },
        {
          text: "npm create-react-app ",
          correct: false,
        },
      ],
    },
    {
      id:15,
      question: "what is the correct command to create a new React project?",
      answers: [
        {
          text: "npx creat-react-app",
          correct: false,
        },
        {
          text: "npm create-react-app myReactApp",
          correct: false,
        },
        {
          text: "npx create-react-app myReactApp",
          correct: true,
        },
        {
          text: "npm create-react-app ",
          correct: false,
        },
      ],
    }
     

  ];

  export default data;