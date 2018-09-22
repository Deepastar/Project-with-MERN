import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import {BrowserRouter as Router, Route} from 'react-router';
import Aboutus from "./components/Pages/aboutus";


const App=()=>(
    <div>App
        <Link to="\aboutus">About uS</Link>
    </div>
)
const Aboutus=()=>(
    <div>About Us
        <Link to="\aboutus">About Us</Link>
    </div>
)

ReactDOM.render(
    <BrowserRouter>
    <div>
        <div>
            Route path="/aboutus" component={Aboutus}>
        </div>
    </div>
    </BrowserRouter>, document.getElementById("root"));
registerServiceWorker();
