import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";

class App extends Component {
    render() {
        return (
            <div className="navbar bg-primary">
                <Navbar title={"Github Finder"}/>
            </div>
        );
    }
}

export default App;
