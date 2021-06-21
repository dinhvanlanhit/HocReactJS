function Dashboard(){
    return(
        <>
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Bàn làm việc</h3>
            </div>
            <div className="card-body">
                   <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body bg-success">
                                        <h3>Đã hoàn thành 100</h3>
                                </div>
                            </div>
                       </div>  
                       <div className="col-md-6">
                            <div className="card">
                                <div className="card-body bg-danger">
                                        <h3>Chưa hoàn thành 10</h3>
                                </div>
                            </div>
                       </div>  
                    </div>         
            </div>
        </div>
        </>
        
    )
}
export default Dashboard;