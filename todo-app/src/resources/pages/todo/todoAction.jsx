import { useEffect, useState,use } from "react";
import { useDispatch } from "react-redux";
import {useParams,useHistory} from 'react-router-dom'
import {todoActions} from '../../../redux/actions/todoAction';
function TodoAction(){
    const dispatch = useDispatch();
    const history = useHistory();
    const {id}=useParams();
    const [nameTodo,setNameTodo] = useState("");
    const [statusTodo,setStatusTodo] = useState(0);
    const onSaveTodo = async (e)=>{
        e.preventDefault();
        const body = {
            id:id,
            name:nameTodo,
            status:statusTodo
        }
        if(id){
            const result =  await todoActions.update(body);
            if(result.status=='success'){
                history.push('/todo/list')
            }
        }else{
            const result =  await todoActions.create(body);
            if(result.status=='success'){
                history.push('/todo/list')
            }
        }
    }
    const onChangeName=(e)=>{
        setNameTodo(e.target.value);
    }
    const onChangeStatus=(e)=>{
        // console.log(e);
        setStatusTodo(e.target.value);
    }
    useEffect(async ()=>{
        if(id){
            const data =  await todoActions.getByID(id);
            setNameTodo(data.data.name);
            setStatusTodo(data.data.status)
        }
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
export default TodoAction;