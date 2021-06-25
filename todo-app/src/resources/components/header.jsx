import {Link,useHistory} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header(){
    const history = useHistory();
    const handleLogout=(e)=>{
        history.push("/login")
    }
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">TODO-APP</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                    <Link className="nav-link" to="/">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/todo/list"> Todo</Link>
                </li>
                </ul>
                <form className="form-inline">
                    <button onClick={e=>handleLogout(e)} className="btn btn-outline-danger my-2 my-sm-0" type="button">Logout</button>
                </form>
            </div>
            </nav>
        </>
    )
}
export default Header;