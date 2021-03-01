import React, {useState} from 'react'
import * as userServices from '../services/userServices'

const ProfilePage = () => {
    const authUser = JSON.parse(localStorage.getItem('user'))
    const [firstname, setFirstName] = useState(authUser.first_name);
    const [lastname, setLastName] = useState(authUser.last_name);
    const [password, setPassword] = useState(authUser.user_name);

    const onPressAdd = () => {
        const dataSend = {
            _id: authUser._id,
            user_name: authUser.user_name,
            password,
            first_name: firstname,
            last_name: lastname,
            role: authUser.role,
        };

        userServices.updateUser(authUser._id, dataSend)
        .then(() => {
            alert("Cap nhat thanh cong")
        })
        .catch(() => {
            alert("that bai")
        })
    }

    return (
        <div class="row g-3">
            <div class="col-md-6">
                <label for="firstname" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstname" placeholder = "Enter your first name"
                    value = {firstname} onChange = {e => setFirstName(e.target.value)}/>
            </div>
            <div class="col-md-6">
                <label for="lastname" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastname" placeholder = "Enter your last name"
                    value = {lastname} onChange = {e => setLastName(e.target.value)}/>
            </div>
            <div class="col-12">
                <label for="username" class="form-label">UserName</label>
                <input type="text" class="form-control" id="username" disabled 
                    value = {password} onChange = {e => setPassword(e.target.value)}/>
            </div>
            <div class="col-12">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter password" />
            </div>
            <div class="col-md-6">
                <label for="inputState" class="form-label">Role</label>
                <input type="text" class="form-control" id="role" disabled value = {authUser.role} />
            </div>
            <div class="col-md-6">
                
            </div>
            <div class="col-md-6">
                <button type="button" class="btn btn-primary" onClick = {onPressAdd}>save</button>
            </div>
        </div>
    )
}

export default ProfilePage;