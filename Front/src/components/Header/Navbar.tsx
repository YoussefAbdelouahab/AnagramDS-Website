import "./Navbar.scss"
import '../../styles/Bootstrap.css'
import '../../styles/slick.css'
import '../../styles/animate.css'
import '../../styles/woco-accordion.min.css'
import '../../styles/swiper.css'
import '../../styles/responsive.css'
import '../../styles/easy-responsive-tabs.css'
import '../../styles/font-awesome.css'
import "../../styles/jquery.fancybox.css"
import Logo from "../../assets/logo.png"
export default function Navbar() {
    return (
        <>
            <div className="container">
                <div className="navarea">
                    <div className="log_outer">
                        <div className="top_logo">
                            <a href="/">
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
                                            <a href="/about">À propos</a>
                                        </li>
                                        <li>
                                            <a href="/freequote">Devis gratuit</a>
                                        </li>
                                        <li>
                                            <a href="/jobs">Jobs</a>
                                        </li>
                                        <li>
                                            <a href="/help">Assistance</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="login_contact">
                            <div className="contact">
                                <a href="/contact" className="redbtn">
                                Contactez-nous
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}