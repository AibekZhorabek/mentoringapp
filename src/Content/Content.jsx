import React from 'react'
import c from './Content.module.css'
import FilterBlock from './FilterBlock/FilterBlock'
import MyPosts from "../Profile/MyPosts/MyPosts";
const Content = () => {
    return (
        <div className={c.content}>
            <div className={c.filterBlock}>
            <FilterBlock/>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Content;