import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Navigation = props => {

    return (
        <>
        <Router>
            <div className='navbar'>
                <h1>How-To App</h1>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/login'>Login</Link>
            </div>

        </Router>
        </>
    )
}

export default Navigation;
