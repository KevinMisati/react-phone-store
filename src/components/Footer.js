import React from 'react'
import classes from "./Footer.module.css"
import { YouTubeIcon, FaceBookIcon, TwitterIcon,InstagramIcon } from './Icons'
const Footer = () => {
    return (
        <div className={classes["footer-container"]}>
            <div className={classes.footer}>
                <div className={classes.form}>
                <h5>Hear it first</h5>
                
                    <form action="">
                        <input placeholder="Sign Up for Emails" type="email" />
                        <button>{">"}</button>
                    </form>
                </div>

                <div className={classes["info-container"]}>
                    <article>
                            <div >
                                <h4 >Support</h4>
                            </div>
                            <div>
                                <ul >
                                    <li>
                                        <a href="/" >Help Center</a>
                                    </li>
                                    <li>
                                        <a href="/" >Warranty</a>
                                    </li>
                                    <li>
                                        <a href="/" >Contact Us</a>
                                    </li>
                                    <li><a href="/">Product Help</a>
                                    </li>
                                    <li>
                                        <a href="/" >Order Status</a>
                                    </li>
                                    <li>
                                        <a href="/">Recycling</a>
                                    </li>
                                    <li>
                                        <a href="/" >Pay Later with Klarna</a>
                                    </li>
                                </ul>
                            </div>
                    </article>

                    <article >
                            <div >
                                <h4 >Offers</h4>
                            </div>
                            <div >
                                <ul className={classes["footer-info-list"]}>
                                    <li>
                                        <a href="/" >Discount Programs</a>
                                    </li>
                                    <li>
                                        <a href="/" >Compare</a>
                                    </li>
                                    <li>
                                        <a href="/" >Custom Product</a>
                                    </li>
                                    <li>
                                        <a href="/" >Bulk Orders</a>
                                    </li>
                                    <li>
                                        <a href="/" >Press Releases</a>
                                    </li>
                                    <li>
                                        <a href="/">Sound Advice</a>
                                    </li>
                                </ul>
                            </div>
                    </article>

                    <article>
                            <div >
                                <h4 >About Us</h4>
                            </div>

                            <div >
                                <ul className={classes["footer-info-list"]}>
                                    <li>
                                        <a href="/" >About</a>
                                    </li>
                                    <li>
                                        <a href="/" >Born in PC</a>
                                    </li>
                                    <li>
                                        <a href="/" >Protect Our Winters</a>
                                    </li>
                                    <li>
                                        <a href="/" >Careers</a>
                                    </li>
                                </ul>
                            </div>
                    </article>
                </div>

{/* social media */}
                <div className={classes["social-media"]}>
                    <h5>Follow us</h5>
                    <ul>
                    <li><InstagramIcon /></li>
                    <li><YouTubeIcon /></li>
                    <li><FaceBookIcon /></li>
                    <li><TwitterIcon /></li>
                    </ul>

                </div>

                    
            
            
            </div>
                
                
            </div>
            
        
    )
}

export default Footer
