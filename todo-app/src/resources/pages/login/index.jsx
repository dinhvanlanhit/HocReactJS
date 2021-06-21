import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useHistory } from "react-router-dom";
const schema = yup.object().shape({
    username: yup.string().required("Không được bỏ trống !"),
    password: yup.string().required("Không được bỏ trống !"),
  });
function Login(){
    let history = useHistory();
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const handleLogin = (data)=>{
        console.log(data);
        history.push("/admin");
    }
    return(
        <div className="container">
            <br></br>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Đăng nhập</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleLogin)}>
                                <div className="form-group">
                                    <h1 className="text-center"><b>TODO APP</b></h1>
                                </div>
                                <div className="form-group">
                                        <label>Username</label>
                                        <input {...register("username")} defaultValue="admin" placeholder="username ... " type="text" 
                                        className={`form-control ${errors.username?'is-invalid':''}`}/>
                                        <div className="invalid-feedback">{errors.username?.message}</div>
                                        
                                </div>
                                <div className="form-group">
                                        <label>Password</label>
                                        <input  {...register("password")} defaultValue="123456" placeholder="password ... " type="password"   
                                        className={`form-control ${errors.password?'is-invalid':''}`}/>
                                        <div className="invalid-feedback">{errors.password?.message}</div>
                                </div>
                                <div className="form-group">
                                        <button type="submit" className="btn btn-danger">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Login;