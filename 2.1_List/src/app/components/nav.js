
import React from "react";
import  { Link }  from  "react-router-dom";

export const Nav = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                         <li>
                            <Link to="/app">TodoApp
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}