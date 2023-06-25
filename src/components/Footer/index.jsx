import React, { useEffect, useState } from 'react';

import "./index.scss"


export default (props) => {
    const [selectactive, setSelectactive] = useState(0);


    return (
        <div className='bottom'>
            <div className='container'>
                <div className='left'>
                    <img src={require("../../assets/image/logo.png")} alt="" />
                    <p>
                        瑞力德（杭州）新能源科技有限公司
                    </p>
                    <span>浙ICP备2023004641号-1</span>
                </div>
                <div className='right'>
                    <ul>
                        <li>首页</li>
                        <li>关于瑞力德</li>
                        <li>产品服务</li>
                        <li>合作伙伴</li>
                        <li>联系瑞力德</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}