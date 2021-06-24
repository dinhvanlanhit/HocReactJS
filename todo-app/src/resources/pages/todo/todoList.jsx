import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import ItemList from './components/item-todo';
import {todoActions} from '../../../redux/actions/todoAction'
function TodoList(){
    const stateTodo = useSelector(state => state.todoReducer);
    const dispatch = useDispatch();
    const [keySearch,setKeySearch] = useState("");
    const handleChangeInputSearch=(e)=>{
        setKeySearch(e.target.value)
    }
    const onSearch=(e)=>{
        e.preventDefault();
        dispatch(todoActions.search(keySearch));
    }
    useEffect(function(){
       dispatch(todoActions.getAll());
    },[])
    return(
        <>
            <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">To do list</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={onSearch}>
                            <div className="row">
                                    <div className="col-md-8">
                                        <div className="form-group">
                                            <input onChange={(e)=>handleChangeInputSearch(e)} placeholder="Search ... " className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-info btn-block"> {stateTodo.loading?'... !':'Seach'} </button>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <Link to="/todo/add" className="btn btn-success btn-block"> Add</Link >
                                        </div>
                                    </div>

                            </div>
                            </form>
                        <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Number</th>
                                <th scope="col">Todo name</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                                <ItemList lists={stateTodo.data.lists}/> 
                        </tbody>
                        </table>
                                
                        </div>
            </div>
        </>
    )
}
export default TodoList;