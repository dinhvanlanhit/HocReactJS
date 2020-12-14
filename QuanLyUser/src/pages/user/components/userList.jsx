import React from 'react'
import PropTypes from 'prop-types';

UserList.propTypes ={
    users:PropTypes.array,
    onUserClick:PropTypes.func
}
UserList.defaultProps ={
    users:[],
    onUserClick:null
}
function UserList(props) {
    const { users,onUserClick}= props;
    function handleClick (user){
        if(onUserClick){
            onUserClick(user)
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
                                <button onClick={()=>handleClick(user)} className="btn btn-danger btn-sm">Xóa</button>
                                <button className="btn btn-success btn-sm">Sửa</button>
                            </div>
                        </td>  
                    </tr> 
            ))}
             
            </tbody>
    );
  }
  
  export default UserList;