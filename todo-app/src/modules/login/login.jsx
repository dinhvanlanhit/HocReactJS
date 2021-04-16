import { Link } from "react-router-dom";

function Login() {
    console.log(1);
    return(
        <>
        <div className="login-box">
            <div className="card card-outline card-primary">
                <div className="card-header text-center">
                    <a href="/" className="h1"><b>Admin</b>ToDo</a>
                </div>
                <div className="card-body">
                    <p className="login-box-msg">Vui lòng đăng nhập</p>
                    <form action="" method="post">
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                            <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-envelope" />
                            </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" />
                            <div className="input-group-append">
                            <div className="input-group-text">
                                <span className="fas fa-lock" />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                            <Link to="/cpane" className="btn btn-primary btn-block">Đăng nhập</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )    
}
export default Login;