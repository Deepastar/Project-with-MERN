import React from "react";
import { Link } from "react-router-dom";



const Navboot = () => (
    <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-warning">
            <ul className="navbar-nav">
                <li className="nav-item active ml-4 mr-4">
                    {/* <a className="nav-link" href="/aboutus">
                            About Us <span className="sr-only">(current)</span>
                        </a> */}

                    <Link to="/aboutus" className={window.location.pathname === "/aboutus" ? "nav-link active": "nav-link"}>
                    AboutUs
                    </Link>
                    </li>

            <li className="nav-item ml-4 mr-4">
                <Link to="/service" className={window.location.pathname === "/service" ? "nav-link active": "nav-link"}>
                    Service
                </Link>
            </li>

            <li className="nav-link ml-4 mr-4">
            <Link to="/apt" className={window.location.pathname === "/apt" ? "nav-link active": "nav-link"}>
                    Online Appoitment
                </Link>
            </li>

            <li className="nav-link ml-4 mr-4">
            <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active": "nav-link"}>
                    Contact Us
                </Link>
            </li>
                </ul>
        </nav>
        </div >
);

export default Navboot;
