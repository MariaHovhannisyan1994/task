import React from 'react';
import classes from './Button.module.css'

const  Button=({handleShowMorePosts})=> {

    return (
        <div className={classes.button}>
            <button onClick={handleShowMorePosts}>Load more</button>
        </div>
    )
}

export default Button
