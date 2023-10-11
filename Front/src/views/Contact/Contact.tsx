import '../../styles/Bootstrap.css'
import '../../styles/slick.css'
import '../../styles/animate.css'
import '../../styles/woco-accordion.min.css'
import '../../styles/swiper.css'
import '../../styles/responsive.css'
import '../../styles/easy-responsive-tabs.css'
import '../../styles/font-awesome.css'
import "../../styles/jquery.fancybox.css"
import './Contact.scss';


import Navbar from "../../components/Header/Navbar"
import Footer from "../../components/Footer/Footer"

import offers_banner from "../../assets/offers_banner.jpg"


function Contact() {

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
                        <h1>Contact</h1>
                    </div>
                    <div className="breadcrumb__outr">
                        <div className="brd-font">
                            <ul className="breadcrumb secondary-color">
                                <li className="breadcrumb-item">
                                    <a className="white-text" href="#">
                                        HOME{" "}
                                    </a>
                                </li>
                                <li className="breadcrumb-item active"> CONTACT </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/*    end banner  */}
            <section className="contact_sec cmn_frr">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 wow fadeInRight">
                            <div className="con_rgt">
                                <div className="inner_cmn_hdr">
                                    <h4>NOS COORDONNÉES</h4>
                                    <h3>Contactez-nous</h3>
                                    <p>
                                        Prenez contact avec nous pour discuter de vos besoins.
                                        Appelez-nous, envoyez-nous un courriel ou remplissez le
                                        formulaire de contact et nous reviendrons vers vous.
                                    </p>
                                </div>
                                <div>
                                    <div className="l-panel">
                                        <div className="d-flex align-items-center">
                                            <div className="cnt-icn">
                                                <i className="fa fa-home" aria-hidden="true" />
                                            </div>
                                            <div className="cnt_addrs">
                                                <h3>Où sommes-nous ? </h3>
                                                <ul>
                                                    <li>11 Rue Gaston Boyer, 51100 Reims</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-panel">
                                        <div className="d-flex align-items-center">
                                            <div className="cnt-icn">
                                                <i className="fa fa-phone" aria-hidden="true" />
                                            </div>
                                            <div className="cnt_addrs">
                                                <h3>Pour nous appeler </h3>
                                                <ul>
                                                    <li>
                                                        {" "}
                                                        <a href="tel:03 10 00 27 156">03 10 00 27 15</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="l-panel">
                                        <div className="d-flex align-items-center">
                                            <div className="cnt-icn">
                                                <i className="fa fa-envelope-o" aria-hidden="true" />
                                            </div>
                                            <div className="cnt_addrs">
                                                <h3>Notre adresse e-mail:</h3>
                                                <ul>
                                                    <li>
                                                        <a href="mailto:contact@anagramds.com">
                                                            contact@anagramds.com
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 wow fadeInLeft">
                            <div className="inner_cmn_hdr blk">
                                <h4>Contact Us</h4>
                                <h3>Envoyez-nous un message</h3>
                                <p>
                                    Remplissez les champs suivants pour nous envoyer un message. Votre
                                    adresse e-mail ne sera pas publiée. Notez que les éléments
                                    obligatoires sont marqués par “*”
                                </p>
                            </div>
                            <div className="outr__frm">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 cus_fld">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Prénom NOM *"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 cus_fld">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    type="email"
                                                    placeholder="Adresse e-mail *"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 cus_fld">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    placeholder="Motif de contact"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Votre message *"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="submtt">
                                        <input
                                            type="submit"
                                            defaultValue="Envoyer mon message"
                                            className="btn btn-primary cmn-btn"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="map-outr">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.7819829980394!2d4.017890215892192!3d49.26157808018631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e97506bcdd3fcd%3A0x32f2c6a49a42165!2s11%20Rue%20Gaston%20Boyer%2C%2051100%20Reims%2C%20France!5e0!3m2!1sen!2sin!4v1653583103365!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
            <Footer />

        </>
    );
}

export default Contact;