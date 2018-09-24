import React from "react";
// import NavApi from "./util/NavApi";
import Navboot from "./components/NavBar/Navboot";
import AboutUs from "./components/Pages/AboutUs";
import ServicePage from "./components/Pages/ServicePage";
import Contact from "./components/Pages/Contact";
import Appointment from "./components/Pages/Appointment"
import Auth from "./components/Pages/Auth"
import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => (
    <div className="container-fluid">
        <Router>
            <div>
                <Navboot />
                <Route exact path="/aboutus" component={AboutUs} />
                <Route exact path="/servicePage" component={ServicePage} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/appt" component={Appointment} />
                <Route exact path="/auth" component={Auth} />
            </div>
        </Router>
    

    <div class="jumbotron jumbotron-fluid mt-5 text-center bg-info text-warning">
        <div class="container">
            <h1 class="display-4">Car Wash Service</h1>
        </div>
    </div>
    </div>
);

export default App;
