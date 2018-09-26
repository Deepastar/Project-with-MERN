import React from "react";

const ContactUs = () => (
<div className="form mt-5">
<h1>Contact Us</h1>

{/* <p>
Leave us a message:
</p> */}
<form>
<div class="form-group">
<label for="nameInput">Full Name</label>
<input type="name" class="form-control" id="nameForm" placeholder="Enter your Name"></input>
</div>

<div class="form-group">
<label for="emailInput">Email Address</label>
<input type="email" class="form-control" id="emailForm" placeholder="Enter your Email ID"></input>
<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>

<div className="form-group">
<label for="messageInput">Message:</label>
{/* <input type="message" class="form-control" id="emailForm" placeholder="Enter your Email ID"></input> */}
<div className="comment mt-3">
<textarea rows="4" cols="50" name="comment" form="usrform">
Enter text here...</textarea>
</div>
</div>


</form>


</div>
);
export default ContactUs;