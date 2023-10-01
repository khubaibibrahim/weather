import React from "react";
import logo from '../assets/img/logo-removebg-preview.png'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header className="parent-weather">
            <div className="container">
                <div className="row">
                    <div className="df">
                        <div className="col-6">
                            <div className="weathers-image">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="weather-links">
                                <li> <a href="">Forcast</a>
                                    <a href="">Timezone</a>
                                    <a href="">Future</a>
                                    <a href="">Astronomy</a>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header