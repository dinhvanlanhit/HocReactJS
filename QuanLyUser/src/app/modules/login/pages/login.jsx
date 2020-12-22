import React from 'react';

function Login(props) {
    return (
        <div className="container">
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-md-3">

                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Đăng Nhập</div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Username</label>
                                <input placeholder="Username" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input placeholder="Password" className="form-control"/>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-info">Đăng nhập</button>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
}
export default Login;