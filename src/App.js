import React, {Component} from 'react';
import './App.css';

import Menu from './Menu.js';
import Home from './Home';
import About from './About';
import Topics from './Topics';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Menu/>

                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topics" component={Topics}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
