import React from "react";
import { Link} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {login} from '../../../redux/actions/authAction';

const schema = yup.object().shape({
    email: yup.string().required("Không được bỏ trống !"),
    password: yup.string().required("Không được bỏ trống !"),
  });
function Login(props){
    const dispatch = useDispatch();
    let history = useHistory();
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const handleLogin = (body)=>{
        const action  = login(body);
        // props.login(data);
        // history.push("/admin");
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
                                        <label>Email</label>
                                        <input {...register("email")} defaultValue="dinhvanlanh.it@gmail.com" placeholder="email ... " type="text" 
                                        className={`form-control ${errors.email?'is-invalid':''}`}/>
                                        <div className="invalid-feedback">{errors.email?.message}</div>
                                        
                                </div>
                                <div className="form-group">
                                        <label>Password</label>
                                        <input  {...register("password")} defaultValue="123456" placeholder="password ... " type="password"   
                                        className={`form-control ${errors.password?'is-invalid':''}`}/>
                                        <div className="invalid-feedback">{errors.password?.message}</div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-6">
                                        <Link to="/register"  className="btn btn-success btn-block pull-right">Register</Link>
                                    </div> 
                                    <div className="col-md-6">
                                        <button type="submit" className="btn btn-info btn-block pull-left">Login</button>
                                    </div>
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