import {useSelector,useDispatch} from 'react-redux'
import ItemList from './components/item-todo';

function TodoList(){
    const stateTodo = useSelector(state => state.todoReducer);
    console.log(stateTodo);
    const dispatch = useDispatch();
    return(
        <>
            <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">To do list</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                    <div className="col-md-8">
                                        <div className="form-group">
                                            <input placeholder="Search ... " className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <button type="button" className="btn btn-info btn-block"> Search</button>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <button type="button" className="btn btn-success btn-block"> Add</button>
                                        </div>
                                    </div>

                            </div>
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
                                <ItemList lists={stateTodo.lists}/> 
                        </tbody>
                        </table>
                                
                        </div>
            </div>
        </>
    )
}
export default TodoList;