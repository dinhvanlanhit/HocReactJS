import React from 'react'
import  {useSelector,useDispatch} from 'react-redux'
import {addTodo} from '../redux/actions/todoAction'
function Todo(props){

    const todoReducer = useSelector(state => state.todoReducer);
    const dispatch = useDispatch()

    const handleSubmitAddTodo =(e)=>{
        e.preventDefault();
        const body = document.querySelector('input').value;
        dispatch(addTodo(body));
        document.querySelector('input').value="";
    }
    return(
        <div>
            <br></br>
            <h1>TODO</h1>
             <form onSubmit={handleSubmitAddTodo}>
                 <input className="form-control"/>
             </form>
            <hr></hr>
            <h5>Todo List :</h5>
            <ul>
                    {todoReducer.todoList.map((item,key)=>{
                        return <li key={key}>{item} <button className="btn btn-danger btn-xs">Xoa</button></li>
                    })}
            </ul>
        </div>
    );
}
export default Todo;