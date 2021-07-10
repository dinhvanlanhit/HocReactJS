import { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import ItemList from './components/item-todo';
import Pagination from '../../components/pagination'
import {todoActions} from '../../../redux/actions/todoAction'
import AppMain from '../../../helpers/main'
function TodoList(){
    const location = useLocation();
    const m = AppMain.getQueryParams(location);
    const stateTodo = useSelector(state => state.todoReducer);
    const dispatch = useDispatch();
    const [keySearch,setKeySearch] = useState("");
    const [page,setPage] = useState(0);
    const [limit,setLimit] = useState(5);
    const handleChangeInputSearch=(e)=>{
        setKeySearch(e.target.value)
    }
    const onSearch=(e)=>{
        e.preventDefault();
        let params={
            query:keySearch,
            page:page,
            limit:limit
        }
        dispatch(todoActions.getList(params));
    }
    useEffect(function(){
        let page = m.get('page');
        setPage(page)
        let params={
            query:keySearch,
            page:page,
            limit:limit
        }
        dispatch(todoActions.getList(params));
    },[m.get('page')]);
    const handeDeleteItem = async (id)=>{
        const rs = await todoActions.deleteData(id);
        if(rs.status_code==0){
            let params={
                query:keySearch,
                page:page,
                limit:limit
            }
            dispatch(todoActions.getList(params));
        }
    }
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
                                            <button type="submit" className="btn btn-info btn-block"> {stateTodo.loading==true?'... !':'Seach'} </button>
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
                                            <th scope="col">Datetime</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                   
                                    <tbody>
                                            <ItemList handeDeleteItem={handeDeleteItem} lists={stateTodo.data}/> 
                                            
                                    </tbody>
                                </table>
                        </div>
                        <div className="card-footer">
                            <Pagination 
                                totalPage={stateTodo.totalPage}
                                limit={limit}
                            />
                        </div>
            </div>
        </>
    )
}
export default TodoList;