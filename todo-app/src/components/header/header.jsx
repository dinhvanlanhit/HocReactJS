import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {CloseOpenSidebar} from '../../redux/actions/mainAction';
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {width,height};
}
export default function Header() {
    const [statusButton,setStatusButton]= useState(true);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const mainStore =  useSelector(state => state.mainReducer);
    const dispatch = useDispatch();
    const handleClickCloseOpenSidebar=(e)=>{
      if(windowDimensions.width<=768){
          if(mainStore.status){
            dispatch(CloseOpenSidebar({
              statusSidebarOpenClose:"sidebar-collapse",
              statusSibladeMoblie:"sidebar-closed ",
              status:false
            }))
          }else{
            dispatch(CloseOpenSidebar({
              statusSidebarOpenClose:"sidebar-open",
              statusSibladeMoblie:"",
              status:true
            }))
          }
      }else{
        if(mainStore.status){
          dispatch(CloseOpenSidebar({
            statusSidebarOpenClose:"sidebar-collapse",
            statusSibladeMoblie:"",
            status:false
          }))
        }else{
          dispatch(CloseOpenSidebar({
            statusSidebarOpenClose:"",
            statusSibladeMoblie:"",
            status:true
          }))
        }
        
      }
      console.log(mainStore);
    }
 


    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
        if(getWindowDimensions().width<=768){
          dispatch(CloseOpenSidebar({
            statusSidebarOpenClose:"sidebar-collapse",
            statusSibladeMoblie:"sidebar-closed",
            status:false
          }))
        }else{
          dispatch(CloseOpenSidebar({
            statusSidebarOpenClose:"",
            statusSibladeMoblie:"",
            status:true
          }))
        }
      }
      if(windowDimensions.width<=768){
        dispatch(CloseOpenSidebar({
          statusSidebarOpenClose:"sidebar-collapse",
          statusSibladeMoblie:"sidebar-closed",
          status:false
        }))
      }else{
        dispatch(CloseOpenSidebar({
          statusSidebarOpenClose:"",
          statusSibladeMoblie:"",
          status:true
        }))
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
      <>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" onClick={(e)=>handleClickCloseOpenSidebar(e)}  to="#" role="button"><i className="fas fa-bars" /></Link>
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
       <div id="sidebar-overlay" onClick={(e)=>handleClickCloseOpenSidebar(e)}></div>
       </>
    )
}
