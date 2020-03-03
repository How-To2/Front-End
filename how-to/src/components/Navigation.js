import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute';
import HowTo from './HowTo';

import Login from './Login';
import Dashboard from './Dashboard';

const Navigation = props => {

    return (
        <>
            <div className='navbar'>
                <h1>How-To App</h1>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/login'>Login</Link>
            </div>

            <Route path='/login' component={Login}/>
            <Route path='/dashboard' component={Dashboard}/>
        </>
    )
}

export default Navigation;
