import "./Navbar.scss"
import Logo from "../../assets/logo.png"
export default function Navbar() {
    return (
        <>
            <div className="container">
                <div className="navarea">
                    <div className="log_outer">
                        <div className="top_logo">
                            <a href="index.html">
                                <img src={Logo} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="navright">
                        <div className="navrightin">
                            <nav className="navbar navbar-expand-lg">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav custom_nav">
                                        <li>
                                            <a href="#">Services</a>
                                        </li>
                                        <li>
                                            <a href="a-propos.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="devis-gratuit.html">Free Quote</a>
                                        </li>
                                        <li>
                                            <a href="offers-demploi.html">Jobs</a>
                                        </li>
                                        <li>
                                            <a href="assistance.html">Assistance</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="login_contact">
                            <div className="contact">
                                <a href="contact.html" className="redbtn">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}