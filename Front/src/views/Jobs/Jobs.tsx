import '../../styles/Bootstrap.css'
import '../../styles/slick.css'
import '../../styles/animate.css'
import '../../styles/woco-accordion.min.css'
import '../../styles/swiper.css'
import '../../styles/responsive.css'
import './Jobs.scss';


import Navbar from "../../components/Header/Navbar"
import Footer from "../../components/Footer/Footer"

import offers_banner from "../../assets/offers_banner.jpg"

function Jobs() {

    return (
        <>
            <header>
                <Navbar />
            </header>
            <section className="banner inr-bnr">
                <div className="ban_img">
                    <img src={offers_banner} alt="" />
                </div>
                <div className="banner_content">
                    <div className="banner_heading">
                        <h1>Offres D’emploi</h1>
                    </div>
                    <div className="breadcrumb__outr">
                        <div className="brd-font">
                            <ul className="breadcrumb secondary-color">
                                <li className="breadcrumb-item">
                                    <a className="white-text" href="/">
                                        Accueil{" "}
                                    </a>
                                </li>
                                <li className="breadcrumb-item active"> OFFRES D’EMPLOI </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/*    end banner  */}
            <section className="offers_demploi_sec">
                <div className="container">
                    <div className="comn_hdr green text-center">
                        <h2>Offres D’emploi</h2>
                    </div>
                    <div className="outr__offers_dem">
                        <div className="offer_search_outr">
                            <div className="search_input">
                                <input
                                    type="search"
                                    className="form-control"
                                    placeholder="Mots-clés"
                                    defaultValue=""
                                />
                                <input type="send" defaultValue="" />
                            </div>
                            <div className="select_bx_outr">
                                <label>Trié par :</label>
                                <select>
                                    <option>le plus récent</option>
                                    <option>le plus récent</option>
                                    <option>le plus récent</option>
                                </select>
                            </div>
                        </div>
                        <div className="offes__bx_outr">
                            <div className="offers__bx_inner">
                                <h3>Chargé (e) commercial (e) | Anagram DS</h3>
                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                        EUROPE
                                    </li>
                                    <li>
                                        <i className="fa fa-user" aria-hidden="true" />
                                        Position - sales manager
                                    </li>
                                    <li>
                                        <i className="fa fa-calendar" aria-hidden="true" />
                                        Posted : 05/10/2022
                                    </li>
                                </ul>
                                <p>
                                    Anagram DS, spécialisée dans l’informatique et la communication,
                                    accompagne les entreprises sur l’ensemble de leur système
                                    d’information. Nous recherchons un (e) chargé (e) commercial (e)
                                    pour …
                                </p>
                            </div>
                            <div className="offers__btn">
                                <a href="" className="redbtn cmn_red_btn">
                                    Apply Now
                                </a>
                                <a href="offers-details.html" className="redbtn cmn_grey_btn">
                                    View Job
                                </a>
                            </div>
                        </div>
                        <div className="offes__bx_outr">
                            <div className="offers__bx_inner">
                                <h3>Chargé (e) commercial (e) | Anagram DS</h3>
                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                        EUROPE
                                    </li>
                                    <li>
                                        <i className="fa fa-user" aria-hidden="true" />
                                        Position - sales manager
                                    </li>
                                    <li>
                                        <i className="fa fa-calendar" aria-hidden="true" />
                                        Posted : 05/10/2022
                                    </li>
                                </ul>
                                <p>
                                    Anagram DS, spécialisée dans l’informatique et la communication,
                                    accompagne les entreprises sur l’ensemble de leur système
                                    d’information. Nous recherchons un (e) chargé (e) commercial (e)
                                    pour …
                                </p>
                            </div>
                            <div className="offers__btn">
                                <a href="" className="redbtn cmn_red_btn">
                                    Apply Now
                                </a>
                                <a href="offers-details.html" className="redbtn cmn_grey_btn">
                                    View Job
                                </a>
                            </div>
                        </div>
                        <div className="offes__bx_outr">
                            <div className="offers__bx_inner">
                                <h3>Chargé (e) commercial (e) | Anagram DS</h3>
                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                        EUROPE
                                    </li>
                                    <li>
                                        <i className="fa fa-user" aria-hidden="true" />
                                        Position - sales manager
                                    </li>
                                    <li>
                                        <i className="fa fa-calendar" aria-hidden="true" />
                                        Posted : 05/10/2022
                                    </li>
                                </ul>
                                <p>
                                    Anagram DS, spécialisée dans l’informatique et la communication,
                                    accompagne les entreprises sur l’ensemble de leur système
                                    d’information. Nous recherchons un (e) chargé (e) commercial (e)
                                    pour …
                                </p>
                            </div>
                            <div className="offers__btn">
                                <a href="" className="redbtn cmn_red_btn">
                                    Apply Now
                                </a>
                                <a href="offers-details.html" className="redbtn cmn_grey_btn">
                                    View Job
                                </a>
                            </div>
                        </div>
                        <div className="offes__bx_outr">
                            <div className="offers__bx_inner">
                                <h3>Chargé (e) commercial (e) | Anagram DS</h3>
                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                        EUROPE
                                    </li>
                                    <li>
                                        <i className="fa fa-user" aria-hidden="true" />
                                        Position - sales manager
                                    </li>
                                    <li>
                                        <i className="fa fa-calendar" aria-hidden="true" />
                                        Posted : 05/10/2022
                                    </li>
                                </ul>
                                <p>
                                    Anagram DS, spécialisée dans l’informatique et la communication,
                                    accompagne les entreprises sur l’ensemble de leur système
                                    d’information. Nous recherchons un (e) chargé (e) commercial (e)
                                    pour …
                                </p>
                            </div>
                            <div className="offers__btn">
                                <a href="" className="redbtn cmn_red_btn">
                                    Apply Now
                                </a>
                                <a href="offers-details.html" className="redbtn cmn_grey_btn">
                                    View Job
                                </a>
                            </div>
                        </div>
                        <div className="offes__bx_outr">
                            <div className="offers__bx_inner">
                                <h3>Chargé (e) commercial (e) | Anagram DS</h3>
                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                        EUROPE
                                    </li>
                                    <li>
                                        <i className="fa fa-user" aria-hidden="true" />
                                        Position - sales manager
                                    </li>
                                    <li>
                                        <i className="fa fa-calendar" aria-hidden="true" />
                                        Posted : 05/10/2022
                                    </li>
                                </ul>
                                <p>
                                    Anagram DS, spécialisée dans l’informatique et la communication,
                                    accompagne les entreprises sur l’ensemble de leur système
                                    d’information. Nous recherchons un (e) chargé (e) commercial (e)
                                    pour …
                                </p>
                            </div>
                            <div className="offers__btn">
                                <a href="" className="redbtn cmn_red_btn">
                                    Apply Now
                                </a>
                                <a href="offers-details.html" className="redbtn cmn_grey_btn">
                                    View Job
                                </a>
                            </div>
                        </div>
                        <div className="offes__bx_outr">
                            <div className="offers__bx_inner">
                                <h3>Chargé (e) commercial (e) | Anagram DS</h3>
                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                        EUROPE
                                    </li>
                                    <li>
                                        <i className="fa fa-user" aria-hidden="true" />
                                        Position - sales manager
                                    </li>
                                    <li>
                                        <i className="fa fa-calendar" aria-hidden="true" />
                                        Posted : 05/10/2022
                                    </li>
                                </ul>
                                <p>
                                    Anagram DS, spécialisée dans l’informatique et la communication,
                                    accompagne les entreprises sur l’ensemble de leur système
                                    d’information. Nous recherchons un (e) chargé (e) commercial (e)
                                    pour …
                                </p>
                            </div>
                            <div className="offers__btn">
                                <a href="" className="redbtn cmn_red_btn">
                                    Apply Now
                                </a>
                                <a href="offers-details.html" className="redbtn cmn_grey_btn">
                                    View Job
                                </a>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <a href="" className="redbtn blk-btn job_btn">
                                Découvrez plus de projets
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />

        </>
    );
}

export default Jobs;