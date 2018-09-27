import React from "react";
import "./CSS/Aboutus.css";



const AboutUs = () => (
    <div className="container-fluid">
        <div className="row" id="rId">

            <div className="col-md-6">
                <div className="card">
                    <div className="card-body text-center">
                        <h2>About Us</h2>
                        <p>
                            (Name) is a startup web based technology application to deliver car wash services directly to customer’s location.
                            Customers can make appointment with us and get services through Online Appointment
                        </p>
                    </div>
                </div>

                <div className="card mt-4 mb-4 p-2" id="mission">

                    <div className="card-body text-center ">
                        <h2>Our Mission</h2>
                        <p>
                            To save our customers as much time as possible by providing the most convenient car wash services available.
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-6">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="2000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="./Images/Img1.png" alt="First slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="./Images/Img2.png" alt="Second slide"></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="./Images/Img3.png" alt="Third slide"></img>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100" src="./Images/Img4.png" alt="Third slide"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="quote mt-5">
                <i className="fas fa-quote-left fa-xs" id="quote"></i>
                <h3>
                    We believe in excellent customer service, outstanding quality and well-crafted software for good user interface
                </h3>
                <i className="fas fa-quote-right fa-xs" id="quote"></i>
            </div>
           
           
           
            <div className="card mt-5">
                <h1>Our Values</h1>
                <div className="row mt-3 mb-3 text-center">
                    <div className="col">
                        <h5>Quality first</h5>
                        <i className="fas fa-award fa-3x" id="icon"></i>
                    </div>
                    <div className="col">
                        <h5>Honesty</h5>
                        <i className="fa fa-balance-scale fa-3x" id="icon"></i>
                    </div>
                    <div className="col">
                        <h5>Fair price</h5>
                        <i className="fa fa-tag mt-1 fa-3x" id="icon"></i>
                    </div>
                    <div className="col">
                        <h5>Customer Satisfaction</h5>
                        <i className="fa fa fa-star fa-3x" id="icon"></i>

                    </div>

                    <div className="col text-center">
                        <h5>Reliability</h5>
                        <i className="fas fa-handshake fa-3x" id="icon"></i>
                    </div>
                </div>
            </div>
           
        
    </div>
);
export default AboutUs;