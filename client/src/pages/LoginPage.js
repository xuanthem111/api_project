import React, {useState} from "react";
import styles from '../styles/login.module.css'
import {useHistory} from 'react-router-dom'
import * as actions from '../redux/actions/index'
import {connect} from 'react-redux'
import {useAuth} from '../cusHook/useAuth'
import * as userServices from '../services/userServices'
import {
    Button
} from 'reactstrap'

export const Login = ({ dispatch }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()
    
    const onPressSubmit = () => {
        if (username && password) {
            userServices.login({
                user_name: username,
                password: password
            })
            .then(data => {
                const token = data.token;
                const user = data.data;
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                dispatch(actions.setAuthUser(user))
                
                if (user.role === 'admin') {
                    history.push('/admin/users')
                } else {
                    history.push('/admin/profile')
                }
               
            })
            .catch(error => {
                alert('Đăng nhập thất bại!')
            })
           
        } else {
            alert('Thông tin đăng nhập bị lũi')
        }
    }

    return (
        <div className={styles.contain}>
            <div className={styles.loginPage}>
                <div className={styles.form}>
                    <form className={styles.registerForm}>
                        <input type="text" placeholder="name" value={username}
                            onChange = {(e) => setUsername(e.target.value) }/>
                        <input type="password" placeholder="password" value={password}
                            onChange = {(e) => setPassword(e.target.value) }/>
                        <input type="text" placeholder="email address"/>
                        <button>create</button>
                        <p class='message'>Already registered? <a href="#">Sign In</a></p>
                    </form>
                    <form class="login-form">
                        <input type="text" placeholder="username" value={username}
                         onChange = {(e) => setUsername(e.target.value) }/>
                        <input type="password" placeholder="password" value={password}
                         onChange = {(e) => setPassword(e.target.value) }/>
                        <button type="button" onClick = {onPressSubmit}>login</button>
                        <p class='message'>Not registered? <a href="#">Create an account</a></p>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default connect()(Login)
