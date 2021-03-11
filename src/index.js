import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 4},
    {id: 2, message: 'It is my first post', likesCount: 12},
    {id: 1, message: 'Hi, how are you?', likesCount: 4},
    {id: 2, message: 'It is my first post', likesCount: 12},
]

let dialogs = [
    {id: 1, name: 'Igor'},
    {id: 2, name: 'Gurman'},
    {id: 3, name: 'Vova'},
    {id: 4, name: 'Andrew'},
    {id: 5, name: 'Sasha'},
    {id: 6, name: 'Jeka'},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Fine'},
    {id: 4, message: 'Ok'},
    {id: 5, message: 'Ok'},
]

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
