import React from 'react'
import {NavBar} from './Navbar/Nabar'
import {connect} from 'react-redux'
import {
    Row,
    Col,
    Container
} from 'reactstrap'
import {SideBar} from './Sidebar/SideBar'

export default connect()(function ({WrapComponent, isShowTemplete , tab, ...rest}) {
   return (
    <div>
        {isShowTemplete ? 
            <div class="wrapper d-flex align-items-stretch">
                <SideBar tabActive = {tab}/>
                <div id="content" class="p-4 p-md-5">
                    <WrapComponent {...rest}/>
                </div>
            </div>
            :
            <WrapComponent {...rest}/>
        }
    </div>
   )
})
