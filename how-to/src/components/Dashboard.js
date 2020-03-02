import React from 'react';

import NewPost from './NewPost';
import HowToList from './HowToList';

const Dashboard = props => {

    return (
        <>
        <h2>Welcome 'Username'!</h2>
            <NewPost/>
            <HowToList/>
        </>
    )
}

export default Dashboard;
