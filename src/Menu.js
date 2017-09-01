/**
 * Created by vanny on 01.09.2017.
 */
import React from 'react';
import {NavLink} from 'react-router-dom';

export default () => {
    return (
        <div className="menu-block">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/topics">Topics</NavLink></li>
            </ul>
        </div>
    )
}