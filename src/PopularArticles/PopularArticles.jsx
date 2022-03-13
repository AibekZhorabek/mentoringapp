import React from "react";

import c from './PopularArticles.module.css'
import Article from './Article'

const PopularArticles = () => {
    return(
        <div className={c.pop_articles}>
            <p className={c.articles}>Popular articles</p>
            <hr className={c.hrarticles}/>
            <Article views = {20} likes = {10}/>
            <Article views = {20} likes = {10}/>

        </div>
    )
}
export default PopularArticles