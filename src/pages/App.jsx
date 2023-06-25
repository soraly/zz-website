import { lazy, Suspense } from 'react'
import { useEffect } from 'react'
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'
import Home from './Home';
import { message } from 'antd';

import "../utils/rem.js"
import "./App.scss"

const AppWrapper = styled.div`
  
`
const BodyWrapper = styled.div` 
  height: 44px;
`

export default function App() {

    message.config({
        duration: 2,
        maxCount: 1,
        top: 175,
    })

    return (
        <div className='wrap'>
            <AppWrapper>
                <Suspense>
                    <Switch>
                        <Route exact strict path="/" component={Home} />
                    </Switch>
                </Suspense>
            </AppWrapper>

        </div>
    )
}