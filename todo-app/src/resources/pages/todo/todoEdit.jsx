import { useEffect, useState,use } from "react";
import { useDispatch } from "react-redux";
import {useParams} from 'react-router-dom'
import {todoActions} from '../../../redux/actions/todoAction';
function TodoEdit(){
    const dispatch = useDispatch();
    const {id}=useParams();
    const [nameTodo,setNameTodo] = useState("");
    const [statusTodo,setStatusTodo] = useState(0);
    const onSaveTodo =(e)=>{
        e.preventDefault();
        const body = {
            id:id,
            name:nameTodo,
            status:statusTodo
        }
        dispatch(todoActions.update(body))
    }
    const onChangeName=(e)=>{
        setNameTodo(e.targe.value);
    }
    const onChangeStatus=(e)=>{
        setStatusTodo(e.targe.value);
    }
    useEffect(async ()=>{
       const data =  await todoActions.getByID(id);
       setNameTodo(data.data.name);
       setStatusTodo(data.data.status)
    },[])
    return(
        <>
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Edit Todo</h3>
                </div>
                <div className="card-body">
                        <form onSubmit={onSaveTodo}>
                            <div className="row">
                                    <div className="col-md-8">
                                        <div className="form-group">
                                            <input value={nameTodo} onChange={(e)=>onChangeName(e)} type="text" name="name" placeholder="Todo name ... " className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <select  value={statusTodo} onChange={(e)=>onChangeStatus(e)} name="status"  className="form-control"> 
                                                <option value="1">OK</option>
                                                <option value="0">NO OK</option>
                                             </select>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-info btn-block"> Save </button>
                                        </div>
                                    </div>
                            </div>
                        </form >
                </div>
            </div>
        </>
    );
}
export default TodoEdit;