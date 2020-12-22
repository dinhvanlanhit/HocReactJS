import React from 'react'
import PropTypes from 'prop-types';

UserList.propTypes ={
    users:PropTypes.array,
    onUserClickDelete:PropTypes.func,
    onUserClickUpdate:PropTypes.func
}
UserList.defaultProps ={
    users:[],
    onUserClickDelete:null,
    onUserClickUpdate:null
}
function UserList(props) {
    const { users,onUserClickDelete,onUserClickUpdate}= props;
    function handleClickDelete (user){
        if(onUserClickDelete){
            onUserClickDelete(user)
        }
    }
    function handleClickUpdatate (user){
        if(onUserClickUpdate){
            onUserClickUpdate(user)
        }
    }
    return (
            <tbody>
            {users.map(user=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>  
                        <td>{user.mail}</td> 
                        <td className="text-center">
                            <div className="btn-group">
                                <button onClick={()=>handleClickDelete(user)} className="btn btn-danger btn-sm">Xóa</button>
                                <button onClick={()=>handleClickUpdatate(user)}className="btn btn-success btn-sm">Sửa</button>
                            </div>
                        </td>  
                    </tr> 
            ))}
             
            </tbody>
    );
  }
  
  export default UserList;