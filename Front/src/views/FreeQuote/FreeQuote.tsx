import '../../styles/Bootstrap.css'
import '../../styles/slick.css'
import '../../styles/animate.css'
import '../../styles/woco-accordion.min.css'
import '../../styles/swiper.css'
import '../../styles/responsive.css'
import '../../styles/easy-responsive-tabs.css'
import '../../styles/font-awesome.css'
import "../../styles/jquery.fancybox.css"
import './FreeQuote.scss';


import Navbar from "../../components/Header/Navbar"
import Footer from "../../components/Footer/Footer"

import offers_banner from "../../assets/offers_banner.jpg"
import trailed_quare from "../../assets/trailed_square1.png"
import trailed_quare2 from "../../assets/trailed_square2.png"
import trust1 from "../../assets/trust1.png"
import trust2 from "../../assets/trust2.jpeg"
import trust3 from "../../assets/trust3.png"
import trust4 from "../../assets/trust4.png"
import trust5 from "../../assets/trust5.jpg"
import trust6 from "../../assets/trust6.jpg"
function FreeQuote() {

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
                        <h1>devis gratuit</h1>
                    </div>
                    <div className="breadcrumb__outr">
                        <div className="brd-font">
                            <ul className="breadcrumb secondary-color">
                                <li className="breadcrumb-item">
                                    <a className="white-text" href="#">
                                        HOME{" "}
                                    </a>
                                </li>
                                <li className="breadcrumb-item active"> Devis </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/*    end banner  */}
            <section className="contact_sec cmn_frr cmn-padd">
                <div className="free_container_background">
                    <img
                        className="trailed_square1"
                        src={trailed_quare}
                        alt=""
                    />
                    <img
                        className="trailed_square2"
                        src={trailed_quare2}
                        alt=""
                    />
                    <div className="free_container">
                        <h2>Effectuez votre demande de devis</h2>
                        <form className="free_container_form" action="">
                            <input type="text" placeholder="Nom" />
                            <input type="text" placeholder="Email" />
                            <input type="text" placeholder="Entreprise" />
                            <input type="text" placeholder="Téléphone" />
                            <textarea
                                placeholder="Décrivez votre message..."
                                id=""
                                cols={30}
                                rows={10}
                                defaultValue={""}
                            />
                            <div className="form_button_container">
                                <button type="submit" className="free_form_button">
                                    Demander un devis
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className="trust_us comn_margin">
                <div className="container">
                    <div className="trust_inner">
                        <h6>They trust us</h6>
                        <div className="trust_logo">
                            <div className="prtnr_sldr_otr swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="prod_otr_bk ">
                                            <div className="prd_img">
                                                {" "}
                                                <img src={trust1} alt="" />{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="prod_otr_bk ">
                                            <div className="prd_img">
                                                {" "}
                                                <img src={trust2} alt="" />{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="prod_otr_bk ">
                                            <div className="prd_img">
                                                {" "}
                                                <img src={trust3} alt="" />{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="prod_otr_bk ">
                                            <div className="prd_img">
                                                {" "}
                                                <img src={trust4} alt="" />{" "}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="prod_otr_bk ">
                                            <div className="prd_img">
                                                {" "}
                                                <img src={trust5} alt="" />{" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />

        </>
    );
}

export default FreeQuote;