import React from 'react'
import FormUser from '../component/FormUser'
import * as userServices from '../services/userServices'

const AddUserPage = () => {
    const onAddUserEvent = (userData) => {
       userServices.register(userData)
       .then(response => {
           const status = response.status;
           if (status == "success") {
               alert("Thêm thành công");
           } else {
               alert(response.message)
           }
       })
       .catch(error => {
           alert('Thêm thất bại')
       })
    }


    return (
        <>
        <h3>Add New User</h3>
        <div>
            <FormUser onAddUser = {onAddUserEvent}/>
        </div>
       </>
    )
}

export default AddUserPage;