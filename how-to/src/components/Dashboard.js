import React from 'react';

import NewPost from './NewPost';
import HowToList from './HowToList';

import {Link, Route, BrowserRouter as Router } from 'react-router-dom';

const Dashboard = props => {

    return (
        <>
        <Router>
            <h2>Welcome 'Username'!</h2>
            <span><Link to='/dashboard/new-post'>New Post</Link></span>
            <span><Link to='/dashboard/posts'>View Posts</Link></span>

            <Route exact path='/dashboard/posts' component={HowToList}/>
            <Route exact path='/dashboard/new-post' component={NewPost}/>
        </Router>
        </>
    )
}

export default Dashboard;
