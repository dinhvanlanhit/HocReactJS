import React from 'react'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {CloseOpenSidebar} from '../../redux/actions/mainAction'
export default function Header() {
    const mainStore =  useSelector(state => state.mainReducer);
    const dispatch = useDispatch();
    const handleClickCloseOpenSidebar=(statusSidebarOpenClose)=>{
      dispatch(CloseOpenSidebar(statusSidebarOpenClose))
      console.log(mainStore);
    }
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" onClick={()=>handleClickCloseOpenSidebar(mainStore.statusSidebarOpenClose)}  to="" role="button"><i className="fas fa-bars" /></Link>
          </li>

        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" data-widget="control-sidebar" data-slide="true" to="/auth" role="button">
              <i className="fas fa-th-large" />
            </Link>
          </li>
        </ul>
      </nav>
      
    )
}
