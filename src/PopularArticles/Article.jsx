import React from "react";
import c from './PopularArticles.module.css'

const Article = (props) => {
    return (
        <div className={c.article}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, dolorum eius eligendi enim error fugit harum id maiores nam nemo, obcaecati odit porro provident recusandae reprehenderit sit, tempora totam ullam!
            <br/>
            <div className={c.views}>
                <img className={c.icons} src="https://img.icons8.com/external-prettycons-lineal-prettycons/2x/external-view-essentials-prettycons-lineal-prettycons.png" alt="views"/>
                views : {props.views}
            </div>

            <div className={c.likes}>
                <img className={c.icons} src="https://img.icons8.com/external-those-icons-lineal-those-icons/2x/external-like-feedback-those-icons-lineal-those-icons.png" alt="likes"/>
                like : {props.likes}
            </div>
            <hr/>
        </div>
    )
}
export default Article