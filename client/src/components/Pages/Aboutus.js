import React from "react";
import "../Pages/CSS/Aboutus.css";

const AboutUs = () => (
    <div className="container">
        <div className="row">
            <div className="card col-lg-6">
                <div className="card-body text-center">
                    <h1>About Us</h1>
                    <p>
                        (Name) is a startup web based technology application to deliver car wash services directly to customer’s location.
                      Customers can make appointment with us and get services through Online Appointment
                    </p>
                </div>
            </div>
            <div className="card col-lg-6">
                <div className="card-body text-center">
                    <h1>Our Mission</h1>
                    <p>
                        To save our customers as much time as possible by providing the most convenient car wash services available.
                    </p>
                </div>
            </div>
        </div>
        <div className="quote mt-5">
            <h4>
                “We believe in excellent customer service, outstanding quality and well-crafted software for good user interface”
            </h4>
        </div>
        <div className="card mt-5"> 
            <h1>Our Values</h1>

            <div class="row mt-3">
                <div class="col-sm-3">
                    <h5>Quality first</h5>
                </div>
                <div class="col-sm-3">
                    <h5>Honesty</h5>
                </div>
                <div class="col-sm-3">
                    <h5>Fair price</h5>
                </div>
                <div class="col-sm-3">
                    <h5>Customer Satisfaction</h5>
                </div>
            </div>
        </div>
    </div>
);
export default AboutUs;