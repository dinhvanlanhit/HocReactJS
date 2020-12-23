import {React,useState,useEffect} from 'react'
import PropTypes from 'prop-types';

UserForm.propTypes ={
    onSubmit:PropTypes.func
}
UserForm.defaultProps ={
    onSubmit:null
}
function UserForm(props) {
    const {onSubmit,data}=props;
    const [mail, setMail] = useState('');
    function handelMailChange(e){
        setMail(e.target.value);
    }
    function handelSubmit(e){
        e.preventDefault();
        if(!onSubmit){return;}
        const formValues={
            mail:mail
        }
        onSubmit(formValues);
        setMail('');
    }
    function showData(data){
        if(data){
            setMail(data.mail)
        }
    }
    useEffect(function(){
        showData(data)
    } , [data]);
    return (
        <>
        <br/>
        <div className="card">
            <div className="card-header">Thêm Tài Khoản</div>
            <div className="card-boody">
              <div className="col-md-12">
                  <form onSubmit={handelSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <div className="input-group">
                                    <input className="form-control" 
                                    type="text"
                                    onChange={handelMailChange} 
                                    value={mail}
                                  
                                    />
                                    <button type="submit" className="btn btn-success">Lưu</button>
                            </div>
                        
                            
                        </div>
                </form>
              </div>
                  
            </div>
        </div>
      </>
    );
}

export default UserForm;