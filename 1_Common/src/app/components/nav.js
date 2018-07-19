
import React from "react";
import  { Link }  from  "react-router-dom";

export const Nav = () => {
    return (
        
        <div>
        <nav className="navbar navbar-default">
                <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link exact="true" to="/">Home </Link>
                        </li>
                        <li>
                            <Link to="/about">About  </Link>
                        </li>
                        <li>
                            <Link to="/LifeCycle">Comp LC   </Link>
                        </li>
                        <li>
                            <Link to="/EventHandle">Event Demo   </Link>
                        </li>
                       
                        <li>
                            <Link to="/RefElement">Ref Element   </Link>
                        </li>
                        <li>
                            <Link to="/PropTypeEx">Prop Type    </Link>
                        </li>
                       
                        <li>
                            <Link to="/FormHandle">From Demo
                            </Link>
                        </li>
                     
                        <li>
                            <Link to="/State">State Demo
                            </Link>
                        </li>
                        <li>
                            <Link to="/List">List
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
         
    )
}