import React from 'react';
import { Outlet } from "react-router-dom";

export default function Header() {
        return (
          <header className='main-header'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <a className="navbar-brand text-danger text-bold" href="/">ETIKET</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon text-danger text-bold"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <form className="d-flex px-5">
                      {/* <input className="form-control" type="search" placeholder="Search" aria-label="Search"/> */}
                      {/* <button className="btn btn-outline-danger" type="submit">Search</button>  */}
                  </form>
                  <ul className="navbar-nav d-flex ms-auto mb-2 mb-lg-0">
                  <li className="nav-item ">
                    <a className="nav-link" href="https://pabilify-fe-github-io.vercel.app/?fbclid=IwAR3AvJfT-Tn5816TBk9C8YGq_gdWFkDkFTE9-JPkdEqXg3UdTLSB593M7GY" target="_blank">pabilify.com</a>
                  </li>
                    <li className="nav-item ">
                      <a className="nav-link" href="/Login">LOGIN</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/Register">REGISTER</a>
                    </li>
                    <li className="nav-item dropdown px-5"> {/* Account */}
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Account
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/Reservation">View Reservation</a></li>
                        <li><a className="dropdown-item" href="/ManageAccount">Manage Account</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Logout</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          <Outlet />
          </header>
        )
    }
