import React, { Component } from 'react';
import ToDoList from "./to-do-list";
import './index.css';
class App extends Component {
    render () {
        return (
            <div>
                <ToDoList/>
            </div>
        )
    }
}
export default App;