/**
 * Created by vanny on 01.09.2017.
 */
import React from 'react';

import Components from './topics/Components';
import Props_State from './topics/Props_State';
import Rendering from './topics/Rendering';

import {NavLink} from 'react-router-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export default () => {
    return (
        <BrowserRouter>
            <div>
                <h1>Topics</h1>
                <ul>
                    <li><NavLink to="/topics/RenderingwithReact">Rendering with React</NavLink></li>
                    <li><NavLink to="/topics/Components">Components</NavLink></li>
                    <li><NavLink to="/topics/Propsv.State">Props v. State</NavLink></li>
                </ul>
                <h3>Please select a topic.</h3>

            <Switch>
                <Route path="/topics/RenderingwithReact" exact component={Rendering}/>
                <Route path="/topics/Components" component={Components}/>
                <Route path="/topics/Propsv.State" component={Props_State}/>
            </Switch>
            </div>

        </BrowserRouter>
    )
}