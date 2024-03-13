import React from "react";
import './CheckOut.css';
export default function CheckOut(){
    return (
        <div className='checkout'>
            <div className="checkout-container">
                <h1>Checkout</h1>
                <div className="checkout-fields">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Email Address' />
                    <input type="text" placeholder='mobile' />
                   <textarea className="checkarea" placeholder="Type Your Address Here"></textarea>
                    <input type="text" placeholder='pincode' />
                </div>
                <button>Continue</button>
            </div>

        </div>
    )
}