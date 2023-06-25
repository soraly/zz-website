import React, { useEffect, useState } from 'react';

import "./index.scss"


export default (props) => {
    const [selectactive, setSelectactive] = useState(0);
    const [hideData, setHideData] = useState(false);

    useEffect(()=>{

       // 判断h5还是pc true就是h5
       let client =
       /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
         navigator.userAgent
       );
     if (client) {
    //    alert("h5");
       setHideData(true)
     } else {
    //    alert("pc");
     }
    }, [])

    const headArr = [
        {
            "id": 0,
            "text": "首页"
        },
        {
            "id": 1,
            "text": "产品服务"
        },
        {
            "id": 2,
            "text": "关于我们"
        },
        {
            "id": 3,
            "text": "合作伙伴"
        },
        {
            "id": 4,
            "text": "联系我们"
        },
    ]

    const jump = (item, index) => {
        setSelectactive(index);
        console.log(item, index, "itemitemitem")
        var offsetTop = document.getElementById(item.id).offsetTop;

        console.log('offsetTop', offsetTop);
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    }

    return <div className="header">
        <div className='container' id="0">
            <div className='logo' onClick={() => { window.location.href = "/" }}>
                <img src={require("../../assets/image/logo.png")} alt="" />
            </div>
            {
                hideData ? "" :
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
            }

        </div>

    </div>
}
