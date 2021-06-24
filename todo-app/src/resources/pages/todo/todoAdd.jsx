import { useState } from "react";
function TodoAdd(){
    const [nameTodo,setNameTodo] = useState("");
    const [statusTodo,setStatusTodo] = useState(0);
    const onSaveTodo =(e)=>{
        e.preventDefault();
    }
    return(
        <>
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Add Todo</h3>
                </div>
                <div className="card-body">
                        <form onSubmit={onSaveTodo}>
                            <div className="row">
                                    <div className="col-md-8">
                                        <div className="form-group">
                                            <input placeholder="Todo name ... " className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="form-group">
                                            <select  className="form-control"> 
                                                <option value="0">OK</option>
                                                <option value="1">NO OK</option>
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
export default TodoAdd;