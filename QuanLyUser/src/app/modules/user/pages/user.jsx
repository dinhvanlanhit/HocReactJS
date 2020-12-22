import React, { useState, useEffect } from 'react';
import UserList from '../components/userList'
import UserForm from '../components/userForm'
function User() {
    const [param,setPram]=useState(null);
    const [usersList,setusersList]=useState(
      [
        {id:1,mail:"001@gmail.com"},
        {id:2,mail:"002@gmail.com"},
        {id:3,mail:"003@gmail.com"},
        {id:4,mail:"004@gmail.com"},
      ]
    );
    function onUserClickDelete(user){
      const index = usersList.findIndex(x=>x.id==user.id);
      if(index<0)return;
      const newUserList = [... usersList];
      newUserList.splice(index,1);
      setusersList(newUserList);
    }
    function handelAddUser(params) {
      const newUserList = [... usersList];
      const user = {
        id:usersList.length+1,
        mail:params.mail
      }
      newUserList.push(user);
      setusersList(newUserList);
    }
    function onUserClickUpdate(params) {
      setPram(params);
      console.log(param);
    }
    // useEffect(()=>{
    //     async function fetchUserList(){
    //         const requesturl = 'http://apidev.com/api/user/getAll';
    //         const response  = await fetch(requesturl);
    //         const responseJSON = await response.json();
    //         console.log(responseJSON);
    //     }
    //     fetchUserList();
    // },[]);
    return (
      <>
        <br/>
        <UserForm onSubmit={handelAddUser}  showDataUpdate={param}/>
        <div className="card">
            <div className="card-header">Danh Sách Tài Khoản</div>
            <div className="card-boody ">
              <div className="row">
              <div className="col-md-12">
              <table className="table table-bordered">
                      <thead>
                        <tr>
                            <th>ID</th>  
                            <th>Emal</th> 
                            <th className="text-center">Tác vụ</th>  
                        </tr>
                      </thead>
                     
                          <UserList 
                          users={usersList} 
                          onUserClickDelete={onUserClickDelete}
                          onUserClickUpdate={onUserClickUpdate}
                          />
                     
                  </table>
              </div>
              </div>
            </div>
        </div>
      </>
    );
}

export default User;