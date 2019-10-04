import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './components/login/Login';
import mobile from './pages/mobile.jsx';

import Verify from './components/login/Verify';


import {
    NavLink,
    HashRouter
} from "react-router-dom";

class App extends Component {
	render() {
        return (
            <Router>
                <div className="App">
                    <HashRouter>
                        <div>
                            <h3>
                        <ul className="header" >
                                    <li><NavLink exact to="/">Main</NavLink></li>
                                    <li><NavLink to="/Login">Login</NavLink></li>

                                   


                                </ul>
                            </h3>
                            <div className="content">
                                <Route exact path="/" component={Home} />
                                <Route path="/Login" component={Login} />
                                <Route path="/Verify" component={Verify} />

                                


                            </div>


                        </div>


                    </HashRouter>

                </div>
                </Router>
		);
	}
}

export default App;
