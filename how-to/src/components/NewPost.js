import React from 'react';

const NewPost = props => {

    return (
        <>
            <form>
                <label>Title: <br/>
                    <input type='text'/>
                </label>
                <br/>
                <label>Body: <br/>
                    <input type ='textarea'/>
                </label>
            </form>
        </>
    )
}

export default NewPost;