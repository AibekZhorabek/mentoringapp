import c from './FilterBlock.module.css'

import React from "react";

const FilterBlock = () => {
    return (
        <div className={c.filterblock}>
            <div className={c.header}>
                <span className={c.spanhead}>Articles</span>
                <span className={c.spanhead}>Posts</span>
                <hr/>
                <div className={c.inputs}>
                    <div className={c.input}>
                        <input type="text" placeholder="Search..."/>
                    </div>
                    <div className={c.input}>
                        <select>
                            <option value="backend">Backend</option>
                            <option value="frontend">FrontEnd</option>
                            <option value="uxui">Ux/Ui</option>
                        </select>
                    </div>
                    <div className={c.input}>
                        <select>
                            <option value="beginner">beginner</option>
                            <option value="midddle">middle</option>
                            <option value="senior">senior</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilterBlock