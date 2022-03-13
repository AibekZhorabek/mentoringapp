import React from 'react'
import Post from './Post/Post'
import c from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={c.posts}>
            <h4>My Posts</h4>
            <Post message="Hello world, This is my first post!" like="2"/>
            <Post message="Post about War" like = "100"/>
        </div>
    )
}

export default MyPosts;