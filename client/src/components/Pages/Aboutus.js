import React from "react";
import "../Pages/CSS/Aboutus.css";


const AboutUs = () => (
    <div className="container-fluid">
        <div className="row">

            <div className="card col-md-6">

                <div className="card-body text-center">
                    <h2>About Us</h2>
                    <p>
                        (Name) is a startup web based technology application to deliver car wash services directly to customer’s location.
                      Customers can make appointment with us and get services through Online Appointment
                    </p>
                </div>
            </div>


            <div className="card col-md-6" id="mission">

                <div className="card-body text-center ">
                    <h2>Our Mission</h2>
                    <p>
                        To save our customers as much time as possible by providing the most convenient car wash services available.
                    </p>
                </div>

            </div>

        </div>

        <div className="quote mt-5">
            <i class="fas fa-quote-left fa-xs" id="quote"></i>
            <h3>
                We believe in excellent customer service, outstanding quality and well-crafted software for good user interface
            </h3>
            <i class="fas fa-quote-right fa-xs" id="quote"></i>
        </div>
        <div className="card mt-5">
            <h1>Our Values</h1>

            <div class="row mt-3 mb-3 text-center">
                <div class="col-sm-3">
                    <h5>Quality first</h5>
                    <i class="fas fa-award fa-3x" id="icon"></i>
                </div>
                <div class="col-sm-3">
                    <h5>Honesty</h5>
                    <i class="fa fa-balance-scale fa-3x" id="icon"></i>
                </div>
                <div class="col-sm-3">
                    <h5>Fair price</h5>
                    <i class="fa fa-tags fa-3x" id="icon"></i>
                </div>
                <div class="col-sm-3">
                    <h5>Customer Satisfaction</h5>
                    <i class="fa fa fa-star fa-3x" id="icon"></i>

                </div>

                {/* <div class="col-sm-3 text-center">
                    <h5>Reliability</h5>
                     <i class="fas fa-handshake fa-3x"></i>
                </div> */}
            </div>
        </div>
    </div>
);
export default AboutUs;