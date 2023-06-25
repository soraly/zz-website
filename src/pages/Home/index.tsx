import React, { useEffect, useState } from 'react';
import Header from 'components/Head';
import Footer from 'components/Footer';

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Select, Input, message } from "antd"
import { Link } from 'react-router-dom';
import { Map, Marker } from 'react-bmap'

import "./index.scss"

declare global {
    interface Window {
        gsap: any
        ScrollTrigger: any
    }
}

const productList = [
    {
        "id": 0,
        "text": "电动压缩机"
    },
    {
        "id": 1,
        "text": "电子膨胀阀"
    },
    {
        "id": 2,
        "text": "电子膨胀阀"
    },
    {
        "id": 3,
        "text": "三通阀"
    },
    {
        "id": 4,
        "text": "电子水泵"
    },
    {
        "id": 5,
        "text": "PTC加热器"
    },
    {
        "id": 6,
        "text": "电控板"
    },
    {
        "id": 7,
        "text": "传感器"
    },
]

const partnerList = [
    {
        "id": 0,
        "text": "上游供应商以及授权证书"
    },
    {
        "id": 1,
        "text": "下游渠道及维保伙伴"
    },
]


export default (props) => {
    const [swiperList, setSwiperList] = useState<any>([])
    const [honorList, setHonorList] = useState<any>([])
    const [bannerList, setBannerList] = useState<any>([])

    const [name, setName] = useState<string>("")

    const [selectactive, setSelectactive] = useState(0);
    const [textareaVal, setTextareaVal] = useState<string>("")
    const [versionData, setVersionData] = useState<any>({
        newVersion: {}
    })
    const [joinWay, setJoinWay] = useState<string>("1")
    SwiperCore.use([Autoplay, Pagination, Navigation])
    const { Option } = Select

    const jump = (item, index) => {
        setSelectactive(index);
    }

    useEffect(() => {
        setSwiperList([
            {
                id: 1,
                goodsImg: require("../../assets/image/machine/海立1.png"),
                goodsName: "海立 ETS34",
                goodsImg2: require("../../assets/image/machine/威乐1.png"),
                goodsName2: "威乐 28CC-1"
            },
            {
                id: 2,
                goodsImg: require("../../assets/image/machine/海立2.png"),
                goodsName: "海立 ETS36",
                goodsImg2: require("../../assets/image/machine/威乐2.png"),
                goodsName2: "威乐 28CC-2"
            },
            {
                id: 3,
                goodsImg: require("../../assets/image/machine/海立3.png"),
                goodsName: "海立 EVS27",
                goodsImg2: require("../../assets/image/machine/威乐3.png"),
                goodsName2: "威乐 28CC-4"
            },
            {
                id: 4,
                goodsImg: require("../../assets/image/machine/海立4.png"),
                goodsName: "海立 EVS34",
                goodsImg2: require("../../assets/image/machine/威乐4.png"),
                goodsName2: "威乐 35CC"
            },
            {
                id: 5,
                goodsImg: require("../../assets/image/machine/海立1.png"),
                goodsName: "海立 ETS34",
                goodsImg2: require("../../assets/image/machine/威乐1.png"),
                goodsName2: "威乐 28CC-1"
            },
        ])
        setHonorList([
            {
                id: 1,
                goodsImg: "https://yihuazhu.obs.cn-east-3.myhuaweicloud.com/yihuazhu/h5/dcc39ebd4cac4928b5ce5e01ad4fe84d.png",
            },
            {
                id: 2,
                goodsImg: "https://yihuazhu.obs.cn-east-3.myhuaweicloud.com/yihuazhu/h5/d1401a27c88243628905779b8d690314.png",
            },
            {
                id: 3,
                goodsImg: "https://yihuazhu.obs.cn-east-3.myhuaweicloud.com/yihuazhu/h5/bc33ffde0d27423caf4370c9847e81d2.png",
            },
            {
                id: 4,
                goodsImg: "https://yihuazhu.obs.cn-east-3.myhuaweicloud.com/yihuazhu/h5/4392b95439114416a4166f0153ac79b5.png",
            },
        ])
    }, [])


    return (
        <>
            <Header />
            <div className='main-content'>
                <div className='banner'>

                    <Swiper
                        loop={true}
                        pagination={
                            {
                                clickable: true,
                            }
                        }
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false
                        }}

                        slidesPerView={1}

                        onSwiper={swiper => console.log(swiper, 'banner')}>


                        <SwiperSlide className="sub-slide">
                            <img className='banner-img' src={require("../../assets/image/Banner1.png")} alt="" />
                            <div className='wrap'>
                                <div className='container'>
                                    <h2>新能源汽车</h2>
                                    <h3>
                                        <em>热管理系统</em>专业服务商
                                    </h3>
                                    <p>专注于新能源汽车热管理系统产品销售及售后服务商</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="sub-slide">
                            <img className='banner-img' src={require("../../assets/image/Banner2.png")} alt="" />
                            <div className='wrap wrap2'>
                                <div className='container'>
                                    <div className='value'>瑞力德价值观
                                    {/* <img width={40} src={require("../../assets/image/arrow.png")} alt="" /> */}
                                    </div>
                                    <h2>服务好每一辆</h2>
                                    <h3>
                                        <em>新能源汽车</em>热管理系统
                                    </h3>
                                    <p>Serve every new energy vehicle thermal management system well</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="sub-slide">
                            <img className='banner-img' src={require("../../assets/image/Banner3.png")} alt="" />
                            <div className='wrap wrap3'>
                                <img className='point' src={require("../../assets/image/Point.png")} alt="" />
                                <div className='container'>
                                    <h2>新能源汽车</h2>
                                    <h3>
                                        <em>热管理系统</em>
                                    </h3>
                                    <p>New energy vehicle thermal management system</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>

                <div className='search'>
                    <div className='input-wrap'>
                        <Input placeholder='根据车型查询热管理系统匹配产品'></Input>
                        <span>
                            <img src={require("../../assets/image/icon_serch.png")} alt="" />
                        </span>
                    </div>
                </div>

                <div className='product-service container' id="1">

                    <div className='logo-title'>
                        <span>产品服务</span>
                    </div>

                    <div className='menu'>
                        <ul>
                            {
                                productList.map((item, index) => {
                                    return (
                                        <li
                                            className={
                                                item.id === selectactive
                                                    ? "active"
                                                    : "disabled"
                                            }
                                            // onClick={() => { setSelectactive(index) }}
                                            key={index}
                                        >
                                            {item.text}
                                        </li>
                                    );
                                })}

                        </ul>
                    </div>

                    <div className='swiper-img machines'>

                        <Swiper
                            slidesPerView={4}
                            spaceBetween={24}

                            loop={false}
                            navigation={
                                {
                                    enabled: true,
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }
                            }
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false
                            }}

                            onSwiper={swiper => console.log(swiper)}>

                            {
                                swiperList.map(item => {
                                    return (
                                        <SwiperSlide className="sub-slide" key={item.id}>
                                            <div className='slider-wrap'>
                                                <div className='slider1'>
                                                    <div className='img-wrap'>
                                                        <img
                                                            src={item.goodsImg}
                                                            alt=""
                                                        />
                                                    </div>

                                                    <p>{item.goodsName}</p>
                                                </div>
                                                <div className='slider2'>
                                                    <div className='img-wrap'>
                                                        <img
                                                            src={item.goodsImg2}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <p>{item.goodsName2}</p>
                                                </div>
                                            </div>

                                        </SwiperSlide>
                                    )
                                })
                            }

                        </Swiper>

                    </div>

                    <div className='prev-next'>
                        <img className='swiper-button-prev' src={require("../../assets/image/icon_left.png")} alt="" />
                        <img className='swiper-button-next' src={require("../../assets/image/icon_right.png")} alt="" />
                    </div>

                </div>

                <div className='about-us' id="2">
                    <img className='bg' src={require("../../assets/image/bg.png")} alt="" />
                    <div className='container'>
                        <div className='logo-title'>
                            <span>关于我们</span>
                        </div>
                        <div className='content'>
                            <div className='left'>
                                <p>瑞力德（杭州）新能源科技有限公司（以下简称“瑞力德“）成立于2022年9月，由20多年制冷行及汽车后市场多年经验的专业资深人士牵头组建，聚集了一群新能源汽车热管理8年以上行业经验资深的专业团队。</p>
                                <p>瑞力德是一家专注于新能源汽车热管理系统产品销售及售后服务商，“瑞力德”新能源汽车热管理系统产品及服务包括新能源电动压缩机、电子膨胀阀、热力膨胀阀、三通阀、电子水泵、PTC加热器、压缩机电控板、传感器等。“瑞力德”通过与“小拇指”战略合作，在全国范围内建立了1200多家新能源汽车热管理系统售后服务网点，以保障“瑞力德”新能源汽车热管理系统产品全国范围内的售后维保服务和售后维保服务产品销售规范运营。</p>
                                <p>瑞力德团队都具有制冷行业及汽车后市场多年的实践经险。团队拥有较强技术、制造、营销和管理能力；拥有全球知名客户、供应链、市场网络的资源和汽车后市场运行经验，聚焦新能源汽车热管理后市场，聚焦服务新能源汽车后市场，建成国内新能源汽车零部件服务的龙头企业。</p>

                                <div className='count'>
                                    <div>
                                        <span>1100<em>+</em></span>
                                        <p>服务网点</p>
                                    </div>

                                    <div>
                                        <span>8 <em>年+</em></span>
                                        <p>团队经验</p>
                                    </div>
                                </div>
                            </div>
                            <div className='right'>
                                <img src={require("../../assets/image/paper.png")} alt="" />
                            </div>
                        </div>

                    </div>

                </div>

                <div className='product-service container' id="3">

                    <div className='logo-title'>
                        <span>合作伙伴</span>
                    </div>

                    <div className='swiper-img'>

                        <Swiper
                            slidesPerView={4}
                            spaceBetween={24}

                            loop={false}
                            autoplay={false}

                            onSwiper={swiper => console.log(swiper)}>

                            {
                                honorList.map(item => {
                                    return (
                                        <SwiperSlide className="sub-slide" key={item.id}>
                                            <img
                                                src={item.goodsImg}
                                                alt=""
                                            />
                                        </SwiperSlide>
                                    )
                                })
                            }

                        </Swiper>

                    </div>

                </div>

                <div className='partners'>
                    <div className='container'>
                        <div className='line1'>
                            <img src={require("../../assets/image/partners/Logo_海立.png")} alt="" />
                            <img src={require("../../assets/image/partners/Logo_威乐.png")} alt="" />
                            <img src={require("../../assets/image/partners/Logo_小拇指.png")} alt="" />
                            <img src={require("../../assets/image/partners/Logo_北汽新能源.png")} alt="" />
                            <img src={require("../../assets/image/partners/Logo_吉利汽车.png")} alt="" />
                            <img src={require("../../assets/image/partners/Logo_江淮新能源.png")} alt="" />
                            <img src={require("../../assets/image/partners/Logo_长城汽车.png")} alt="" />
                        </div>

                    </div>
                </div>

                <div className='contact-us container' id="4">
                    <div className='logo-title'>
                        <span>联系我们</span>
                    </div>

                    <div className='baidu-map'>
                        <Map center={{ lng: 120.12469, lat: 30.34221 }} zoom="16" style={{ height: "500px" }}>
                            <Marker position={{ lng: 120.12469, lat: 30.34221 }} title="中国（杭州）智慧信息产业园"></Marker>
                            {/* <NavigationControl />
                    <InfoWindow position={{ lng: 120.12469, lat: 30.34221 }} text="智慧信息产业园" title="中国（杭州）" /> */}
                        </Map>
                    </div>
                </div>

                <div className='contact-bg'>
                    <ul className='container'>
                        <li>
                            <img src={require("../../assets/image/icon_number.png")} alt="" />
                            <p>400-0000-0000</p>
                        </li>
                        <li>
                            <img src={require("../../assets/image/icon_wachat.png")} alt="" />
                            <p>微信公众号</p>
                        </li>
                        <li>
                            <img src={require("../../assets/image/icon_Mail.png")} alt="" />
                            <p>Youxiang@xxx.xx</p>
                        </li>
                        <li>
                            <img src={require("../../assets/image/icon_base.png")} alt="" />
                            <p>浙江省杭州市拱墅区祥园路88号4幢719室</p>
                        </li>
                    </ul>
                </div>

                <Footer />
            </div>
        </>
    )


}