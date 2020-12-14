import UserList from '../components/userList'
import UserForm from '../components/userForm'
import {useState} from 'react'
function User() {
    const [usersList,setusersList]=useState(
      [
        {id:1,mail:"001@gmail.com"},
        {id:2,mail:"002@gmail.com"},
        {id:3,mail:"003@gmail.com"},
        {id:4,mail:"004@gmail.com"},
      ]
    );
    function handelClick(user){
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
    return (
      <>
        <br/>
        <UserForm onSubmit={handelAddUser}/>
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
                     
                          <UserList users={usersList} onUserClick={handelClick}/>
                     
                  </table>
              </div>
              </div>
            </div>
        </div>
      </>
    );
  }
  
  export default User;