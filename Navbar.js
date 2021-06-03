import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar=()=>{
    return (
        <>
    <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">

           
<div className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">

          <NavLink exact className="navbar-brand" to="/">
                   UAinnovaters
          </NavLink>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" >
                    <span className="navbar-toggler-icon"></span>
          </button>

         <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                         
                            <li className="nav-item">
                                 <NavLink exact activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                 <NavLink exact activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
                            </li>

                            <li className="nav-item">
                                 <NavLink exact activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                            </li>

                            <li className="nav-item">
                                 <NavLink exact activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            
                    </ul>
                            
          </div>
</div>
     </div>
</div>
</div>
</div> 




        </>
    );
}

export default Navbar;