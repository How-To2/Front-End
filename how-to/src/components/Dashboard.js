import React from 'react';

import NewPost from './NewPost';
import HowToList from './HowToList';

import {Link, Route, BrowserRouter as Router } from 'react-router-dom';
import HowTo from './HowTo';

const dummyData = [
    {
        title: 'How to bake chicken',
        body: 'Pound chicken to an even thickness. Place chicken between two pieces of parchment paper or in a sealed plastic bag and lightly pound. This will tenderize the meat and also help the chicken to cook evenly Rub all over with olive oil. You could also use melted butter, or a variety of different types of oil, like avocado or corn oil. Season the chicken well. Rub salt, pepper, garlic powder, chili powder and onion powder all over the chicken. I like to add a sprinkling of salt over the top just to make sure it’s probably seasoned. Sometimes I’ll use paprika in place of chili powder.',
        author: 'Yellowblissroad',
        id: 1
    },
    {
        title: 'How to bake chicken',
        body: 'Pound chicken to an even thickness. Place chicken between two pieces of parchment paper or in a sealed plastic bag and lightly pound. This will tenderize the meat and also help the chicken to cook evenly Rub all over with olive oil. You could also use melted butter, or a variety of different types of oil, like avocado or corn oil. Season the chicken well. Rub salt, pepper, garlic powder, chili powder and onion powder all over the chicken. I like to add a sprinkling of salt over the top just to make sure it’s probably seasoned. Sometimes I’ll use paprika in place of chili powder.',
        author: 'Yellowblissroad',
        id: 2
    }
]

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
