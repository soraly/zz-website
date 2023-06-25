import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from "react-router-dom"

import "./index.scss"


export default (props) => {
    const [selectactive, setSelectactive] = useState(1);
    const history = useHistory();

    const headArr = [
        {
            "id": 0,
            "text": "首页"
        },
        {
            "id": 1,
            "text": "更新记录"
        },
    ]

    const jump = (item, index) => {
        setSelectactive(index);
        if (item.text === "首页") {
            history.push("/")
        }

    }

    return <div className="header_records">
        <div className='container' id="0">
            <div className='logo' onClick={() => { window.location.href = "/" }}>
                <img src={require("../../assets/img/logo.png")} alt="" />
            </div>
            <div className='menu'>
                <ul>
                    {
                        headArr.map((item, index) => {
                            return (
                                <li
                                    className={
                                        item.id === selectactive
                                            ? "active"
                                            : ""
                                    }
                                    key={index}
                                    onClick={jump.bind(null, item, index)}
                                >
                                    {item.text}
                                </li>
                            );
                        })}

                </ul>
            </div>
        </div>

    </div>
}