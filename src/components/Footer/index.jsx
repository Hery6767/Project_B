import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div>
        <div className='footer'><hr />
            <div className='footerTitle'>
            <h1>Sign Up for Cake Bake Shop News, Events & Offers.</h1>
            <p>Enter your email for Cake Bake Shop updates.</p>
            <div className='input'><input type='text' placeholder='Enter your email'/>
            </div>
            <div className='imgIconMedia'>
            <img src='../../src/image/fb.png'/>
            <img src='../../src/image/ins.png'/>
            <img src='../../src/image/pin.png'/>
            <img src='../../src/image/twitter.png'/>
            </div>
            </div>
            <div className='footerList'>
                <div className='footerItems'>
                <ul>Restaurants & Bakeries</ul>
                    
                        <li className='uppercase'>Indian</li>
                        <li>Broad Ripple Village</li>
                        <li>Carmel City Center</li>
                       <li className='uppercase'>Walt Disney World Resort</li>
                        <li>Disney is BoardWalk Restaurant at Wall Disney World ReSort- Coming Soon</li>
                        <li>Disney is BoardWalk Bakery at Wall Disney World ReSort- Coming Soon</li>
                 </div>   
                
                <div className='footerItems'>
                <ul>shop online</ul>
                    
                        <li>Privacy Policy</li>
                        <li>Refund Policy</li>
                        <li>Shipping Policy</li>
                    </div>
                <div className='footerItems'>
                <ul>more information</ul>
                        <li>Press & Press & Awards</li>
                        <li>Contact Us</li>
                        <li>Careers</li>
                        <li className='uppercase'>Faq</li>
                    </div>
                </div>
            <div className='end'><h5>Ⓒ 2023 The Cake Bake ShopⓇ Inc.</h5></div>
        </div>
        </div>
    )
    }
export default Footer