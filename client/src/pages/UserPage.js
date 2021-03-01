import React, {useEffect, useState} from "react";
import {connect} from 'react-redux'
import * as actions from '../redux/actions'
import Utils from '../common/utils'
import ReactFlexyTable from 'react-flexy-table'
import 'react-flexy-table/dist/index.css'
import * as userServices from '../services/userServices'
import Images from '../image'
import deleteIcon from '../image/trash.png'
import editIcon from '../image/edit.png'
import ModalUserEdit from '../component/ModalUserEdit';
import _ from 'lodash'
const ROLE = {
  '6034c179c7f75d27640b3f06': 'admin',
  '6034c179c7f75d27640b3f07': 'user'
}

export default connect() (function UserPage({removeFoods, orderFoods}) {
    const [listUser, setListUser] = useState([])
    const [isOpenEditUser, setEditUser] = useState(false)
    const [targetUser, setTargetUser] = useState({})

    const fetchData = () => {
      userServices.getAllUser()
      .then(data => {
        const users = data?.data.map(data => {
          data.role = ROLE[data.role_id];
          delete data.role_id;
          delete data._v;
          return data;
        })
        console.log(users)
        setListUser(users)
      })
      .catch(error => console.log(error.message))
    }

    useEffect(() => {
      fetchData();
    }, [])

   
    const onClickEditUser = (data) => {
        setTargetUser(data)
        setEditUser(true);
    }
    
    const onClickDeleteUser = (data) => {
      userServices.deleteUser(data._id)
      .then((response) => {
        _.remove(listUser, item => (item._id == data._id))
        setListUser([...listUser])
      })
      .catch((err) => {
        alert("Xoa Fail")
      })
    }
    
    const onEditUser = (user) => {
      console.log(user)
      userServices.updateUser(user._id, user)
      .then(() => {
        fetchData()
        setEditUser(false)
      })
      .catch((error) => {
        console.log(error)

        alert("Fail")
      })
    } 

    const additionalCols = [
        {
          header: 'Actions',
          td: (data) => {
            return (
              <div className="d-flex flex-row">
                <img
                  src={deleteIcon}
                  width='25'
                  height='25'
                  className="mr-1"
                  onClick={() => onClickDeleteUser(data)}
                />{' '}
                <img
                  src={editIcon}
                  width='25'
                  height='25'
                  onClick={() => onClickEditUser(data)}
                /> 
              </div>
            )
          }
        }
      ]


    return (
        <>
            <h3>User Manament</h3>  
            <ReactFlexyTable 
              data={listUser} 
              additionalCols = {additionalCols}
            /> 
            {isOpenEditUser && <ModalUserEdit 
                isOpen = {isOpenEditUser} 
                onClosed = {() => setEditUser(false)}
                targetUser = {targetUser}
                onEditUser = {onEditUser}
              /> }
        </>
    )

})


