import React from 'react'
import Tabs from './sidebarConst'
import classNames from 'classnames';
import * as actions from '../../../redux/actions'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

export const getActive = (indicate, tabSource) => {
    return classNames({'active': indicate === tabSource})
}

export const SideBar = ({tabActive}) => {

    const authUser = JSON.parse(localStorage.getItem('user'))
    console.log("from sidebar");
    console.log(authUser)
    const dispatch = useDispatch()
    const history = useHistory()

    const onClickLogout = () => {
        dispatch(actions.removeAuthUser())
        localStorage.setItem('token', '')
        localStorage.setItem('user', '')
        history.push('/login')
    }

    return (
        <nav id="sidebar">
            <div class="p-4 pt-5">
                <a href="#" class="img logo rounded-circle mb-5" style={{backgroundImage: 'images/logo.jpg'}}></a>
                <ul class="list-unstyled components mb-5">
                    <li class="active">
                        {authUser.role == 'admin' && 
                        <>
                            <a href="#homeSubmenu" data-bs-toggle="collapse"  
                            data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">User Mangament</a>

                            <ul class="collapse list-unstyled" id="homeSubmenu">
                                <li class={getActive(tabActive, Tabs.USER_LIST)}>
                                    <Link to="/admin/users">Danh sách</Link>
                                </li>
                                <li class={getActive(tabActive, Tabs.ADD_USER)}>
                                    <Link to="/admin/users/add">Thêm mới</Link>
                                </li>
                            </ul>
                        </>
                        }
                    </li>
                    <li class={getActive(tabActive, Tabs.PROFILE)}>
                        <Link to='/admin/profile'>Profile</Link>
                    </li>
                    <li onClick = {onClickLogout} >
                        <Link href="#" >Logout</Link>
                    </li>
                </ul>
                <div class="footer">
                </div>
            </div>
        </nav>
    )
}