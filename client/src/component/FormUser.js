import React, {useState} from 'react'


export default function({onAddUser, targetUser}) {
    const [firstName, setFirstName] = useState((targetUser && targetUser.first_name) || '');
    const [lastName, setLastName] = useState((targetUser && targetUser.last_name) || '');
    const [username, setUserName] = useState((targetUser && targetUser.user_name) || '');
    const [password, setPassword] = useState((targetUser && targetUser.password) || '');
    const [role, setRoleIndex] = useState((targetUser && targetUser.role) || '');

    const onPressAdd = () => {
        const dataSend = {
            _id: targetUser && targetUser._id,
            user_name: username,
            password,
            first_name: firstName,
            last_name: lastName,
            role: role == '1' ? 'admin' : 'user',
            role_id: targetUser && targetUser.role_id
        }
       
        console.log("Data Send");
        console.log(dataSend)
        onAddUser && onAddUser(dataSend)
    }

    return (

        <form class="row g-3">
            <div class="col-md-6">
                <label for="firstname" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstname" placeholder = "Enter your first name"
                value={firstName} onChange = {e => setFirstName(e.target.value)}/>
            </div>
            <div class="col-md-6">
                <label for="lastname" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastname" placeholder = "Enter your last name"
                    value={lastName} onChange = {e => setLastName(e.target.value)}/>
            </div>
            <div class="col-12">
                <label for="username" class="form-label">UserName</label>
                <input type="text" class="form-control" id="username" placeholder="Enter username" 
                value={username} onChange = {e => setUserName(e.target.value)}/>
            </div>
            <div class="col-12">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter password" 
                value={password} onChange = {e => setPassword(e.target.value)}/>
            </div>
            <div class="col-md-6">
                <label for="inputState" class="form-label">Role</label>
                <select id="inputState" class="form-select" onChange = {(e) => {
                    const intIndex = Number.parseInt(e.target.value)
                    setRoleIndex(intIndex)
                }}>
                    <option selected>Choose...</option>
                    <option value="1">Admin</option>
                    <option value="2">User</option>
                </select>
            </div>
            <div class="col-md-6">
                
            </div>
            <div class="col-12">
                <button type="button" class="btn btn-primary" onClick = {onPressAdd}>Add New User</button>
            </div>
        </form>
    )
}