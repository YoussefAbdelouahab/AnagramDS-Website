import "./Footer.scss"
import Logo from "../../assets/logo.png"


export default function Footer() {
    return (
        <>
            <footer>
                <div className="inner_footer">
                    <div className="container">
                        <div className="footer_top">
                            <div className="comn_hdr white text-center">
                                <h2>Let's develop your project together</h2>
                            </div>
                            <div className="contact text-center">
                                <a href="" className="redbtn">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                        <div className="footer_middle">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="fmiddle_left">
                                        <div className="footer_logo">
                                            <a href="index.html">
                                                <img src={Logo} alt="" />
                                            </a>
                                        </div>
                                        <p>
                                            Anagram DS is a young company created in 2019. Specialized in IT
                                            in general, Anagram DS has developed skills in the field.
                                        </p>
                                        <ul className="social_links">
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <i className="fa fa-facebook" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <i className="fa fa-twitter" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <i className="fa fa-instagram" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <i className="fa fa-youtube-play" aria-hidden="true" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="fmiddle_middle">
                                        <h3>Navigation</h3>
                                        <ul className="navigation">
                                            <li>
                                                <a href="a-propos.html">About Us</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);">The society</a>
                                            </li>
                                            <li>
                                                <a href="contact.html">Contact us</a>
                                            </li>
                                            <li>
                                                <a href="#">Services</a>
                                            </li>
                                            <li>
                                                <a href="offers-demploi.html">Jobs</a>
                                            </li>
                                            <li>
                                                <a href="assistance.html">Assistance</a>
                                            </li>
                                            <li>
                                                <a href="">Legal Notice</a>
                                            </li>
                                            <li>
                                                <a href="devis-gratuit.html">Free quote</a>
                                            </li>
                                            <li>
                                                <a href="faq.html">FAQs</a>
                                            </li>
                                            <li>
                                                <a href="projects.html">Our Projects</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="fmiddle_right">
                                        <h3>Get In Touch!</h3>
                                        <ul className="get_in_touch">
                                            <li>
                                                <a href="javascript:void(0);">
                                                    <i className="fa fa-map-marker" aria-hidden="true" />
                                                    <span>34 Avenue des Champs-Elysées 75008, Paris</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="tel:+33310002715">
                                                    <i className="fa fa-phone" aria-hidden="true" />
                                                    <span>+33 6 64 08 07 51</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="mailto:contact@anagramds.com">
                                                    <i className="fa fa-envelope-o" aria-hidden="true" />
                                                    <span>contact@anagramds.com</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer_bottom">
                            <div className="copyright">
                                © 2022 <a href="">Anagram DS.</a> All Rights Reserved.{" "}
                                <a href="https://mfoumgroup.com" target="_blank">
                                    Power by Mfoum group SARL
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}