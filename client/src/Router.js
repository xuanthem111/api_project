import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Tabs from './pages/Layout/Sidebar/sidebarConst'
import {useSelector, useDispatch} from 'react-redux'
import * as actions from './redux/actions'

const LoginPage = require('./pages/LoginPage').default;
const MainLayout = require('./pages/Layout/MainLayout').default;
const UserPage = require('./pages/UserPage').default;
const ProfilePage = require('./pages/ProfilePage').default;
const AddUserPage = require('./pages/AddUserPage').default;

export function AppRouter() {
    const user = useSelector(state => state.userReducer);
    const localUser = persistUserState();
    const token = user?.user?.token;

    return (
        <Router>
            <Switch>
                <Route path = '/login'>
                    <MainLayout 
                        WrapComponent = {() => (<LoginPage />)}
                    />
                </Route>

                <PrivateRoute path="/admin/users/add" user= {user.user || localUser}>
                        <MainLayout 
                            isShowTemplete = {true}
                            tab = {Tabs.ADD_USER}
                            WrapComponent = {() => (<AddUserPage />)}
                        />
                </PrivateRoute>

                <PrivateRoute path="/admin/users" user= {user.user || localUser}>
                        <MainLayout 
                            isShowTemplete = {true}
                            tab = {Tabs.USER_LIST}
                            WrapComponent = {() => (<UserPage />)}
                        />
                </PrivateRoute>

                <PrivateRoute path="/admin/profile" user= {user.user || localUser}>
                        <MainLayout 
                            isShowTemplete = {true}
                            tab = {Tabs.PROFILE}
                            WrapComponent = {() => (<ProfilePage />)}
                        />
                </PrivateRoute>
                
                <PrivateRoute path="/admin" user= {user.user || localUser}>
                    <Redirect to="/admin/users"/>
                </PrivateRoute>

                <PrivateRoute path="/" user= {user.user || localUser}>
                    <Redirect to="/admin/profile"/>
                </PrivateRoute>
                
            </Switch>
        </Router>
    )
}

function PrivateRoute({children, user, ...rest}) {
    const adminRouters = [
        '/admin/users/add',
        '/admin/users',
        '/admin'
    ];

    const route = rest.path;
    const isFound = adminRouters.find(item => item === route)

    let accessValid = true;

    if (user && user.role != 'admin') {
        accessValid = !isFound
    }

    return (
        <Route 
            {...rest}
            render={({location}) => 
                (user && Object.keys(user).length > 0) && accessValid ? children : (
                    accessValid ? (
                        <Redirect to={{
                            pathname: '/login',
                            state: {from: location}
                        }}/>
                    ) : 
                        <Redirect to={{
                            pathname: '/admin/profile',
                            state: {from: location}
                        }}/>
                )}
        />
    )
}

const persistUserState = () => {
    try {
        const serilizialUser = localStorage.getItem('user');
        if (serilizialUser) {
            return JSON.parse(serilizialUser)
        }
        return undefined
    } catch (e) {
        return undefined
    }
}

export default AppRouter;