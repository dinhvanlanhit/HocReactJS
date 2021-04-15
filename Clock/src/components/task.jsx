import React from 'react'
import {useSelector,useDispatch} from  'react-redux'
import {addTask,deleteTask} from '../redux/actions/taskAction'
export default function Task(){
    const task = useSelector(state=>state.taskReducer);
    const dispatch  = useDispatch()
    const handleOnsubmitAddTask =(e)=>{
        e.preventDefault();
        const body = document.querySelector('input').value;
        if(!body)return;
        dispatch(addTask(body));

    }
    const handleOnDelete =(body)=>{
        console.log(body);
        dispatch(deleteTask(body));
    }
    return (
        <div>
            <h1>TASK</h1>
            <form onSubmit={handleOnsubmitAddTask} >
                <input className="form-control"/>
            </form>
            <ul>
               {task.taskList.map((item,key)=>{
                   return <li key={key}>{item} <button type="button" onClick={()=>handleOnDelete(key)} className="btn btn-danger btn-xs">Xoa</button></li>
               })}
            </ul>
        </div>
    );
}