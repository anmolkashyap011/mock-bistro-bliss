import Link from "next/link";
import "./footer.style.scss";

export default function Footer() {
    return (
        <footer id="footer-container">
            <div id="footer">
                <div className="content">
                    <div className="brand-info">
                        <Link href="/" id="footer-logo">
                            <img src="symbols/japanese-food.svg" alt="Bistro Bliss" />
                            <span>Bistro Bliss</span>
                        </Link>

                        <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>

                        <div className="social-links">
                            <Link href="#">
                                <img src="icons/logo-fb-simple 2.svg" alt="facebook" />
                            </Link>
                            <Link href="#">
                                <img src="icons/logo-twitter 2.svg" alt="twitter" />
                            </Link>
                            <Link href="#">
                                <img src="icons/logo-instagram 1.svg" alt="instagram" />
                            </Link>
                            <Link href="#">
                                <img src="icons/logo-github 1.svg" alt="github" />
                            </Link>
                        </div>
                    </div>
                    <div className="links">
                        <div>
                            <p>Pages</p>
                            <ul>
                                <li><Link href="#">Home</Link></li>
                                <li><Link href="#">About</Link></li>
                                <li><Link href="#">Menu</Link></li>
                                <li><Link href="#">Pricing</Link></li>
                                <li><Link href="#">Blog</Link></li>
                                <li><Link href="#">Contacts</Link></li>
                                <li><Link href="#">Delivery</Link></li>
                            </ul>
                        </div>
                        <div>
                            <p>Utility Pages</p>
                            <ul>
                                <li><Link href="#">Start Here</Link></li>
                                <li><Link href="#">Styleguides</Link></li>
                                <li><Link href="#">Password Protected</Link></li>
                                <li><Link href="#">404 Not Found</Link></li>
                                <li><Link href="#">Licence</Link></li>
                                <li><Link href="#">Catelog</Link></li>
                                <li><Link href="#">View More</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="socials">
                        <p>Follow Us on Instagram</p>
                        <div>
                            <img src="imgs/pexels-steve-3789885 1.jpg" alt="" />
                            <img src="imgs/eiliv-aceron-d5PbKQJ0Lu8-unsplash 1.jpg" alt="" />
                            <img src="imgs/pexels-ella-olsson-1640772 1.jpg" alt="" />
                            <img src="imgs/pexels-ash-376464 1.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="copyrights">
                    <p>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}