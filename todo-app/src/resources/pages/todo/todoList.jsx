function TodoList(){
    return(
        <>
            <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">To do list</h3>
                        </div>
                        <div className="card-body">
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
                            <tr>
                                <th scope="row">1</th>
                                <td>Code function login</td>
                                <td>Done</td>
                                <td>
                                    <div className="btn-group">
                                        <button className="btn btn-info btn-xs">Edit</button>
                                        <button className="btn btn-danger btn-xs">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                                
                        </div>
            </div>
        </>
    )
}
export default TodoList;