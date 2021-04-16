import { Link, useRouteMatch } from "react-router-dom";

export default function Sidebar() {
    const macth = useRouteMatch();
   
    return (
        <>
              <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <Link to={`${macth.url}/dashboard`} className="brand-link">
                        <img src="/themes/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                        <span className="brand-text font-weight-light">AdminLTE 3</span>
                    </Link>
                    <div className="sidebar">
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <li className="nav-item">
                                    <Link to={`${macth.url}/dashboard`} className="nav-link">
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p> Bàn làm việc</p>
                                    </Link>
                                </li>
                                <li className="nav-item menu-open active">
                                    <a  href="#" className="nav-link">
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p>Quản lý công việc
                                        <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to={`${macth.url}/todo/receive`} className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Công việc đã nhận</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={`${macth.url}/todo/send`} className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Công việc đã gửi</p>
                                            </Link>
                                        </li>
                                        
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
              </aside>
        </>
    )
}
