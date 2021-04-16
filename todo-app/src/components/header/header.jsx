import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
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
