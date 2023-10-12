import '../../styles/Bootstrap.css'
import '../../styles/slick.css'
import '../../styles/animate.css'
import '../../styles/woco-accordion.min.css'
import '../../styles/swiper.css'
import '../../styles/responsive.css'
import '../../styles/easy-responsive-tabs.css'
import '../../styles/font-awesome.css'
import "../../styles/jquery.fancybox.css"
import './About.scss';


import Navbar from "../../components/Header/Navbar"
import Footer from "../../components/Footer/Footer"

import pj_bnr from "../../assets/pj-bnr.jpg"
import myv_pc from "../../assets/myv-pc.png"
import m1 from "../../assets/m1.png"
import m2 from "../../assets/m2.png"
import m3 from "../../assets/m3.png"
import crnr from "../../assets/crnr.png"
import cl1 from "../../assets/cl-1.png"


import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

function About() {

    useEffect(() => {
        var items = document.querySelectorAll("li");

        function isItemInView(item) {
            var rect = item.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function callbackFunc() {
            for (var i = 0; i < items.length; i++) {
                if (isItemInView(items[i])) {
                    items[i].classList.add("show");
                }
            }
        }

        // listen for events
        window.addEventListener("load", callbackFunc);
        window.addEventListener("resize", callbackFunc);
        window.addEventListener("scroll", callbackFunc);
    }, []);

    return (
        <>
            <header>
                <Navbar />
            </header>

            <section className="banner inr-bnr">
                <div className="ban_img">
                    <img src={pj_bnr} alt="" />
                </div>
                <div className="banner_content">
                    <div className="banner_heading">
                        <h1>A Propos De Nous</h1>
                    </div>
                    <div className="breadcrumb__outr">
                        <div className="brd-font">
                            <ul className="breadcrumb secondary-color">
                                <li className="breadcrumb-item">
                                    <a className="white-text" href="#">
                                        HOME{" "}
                                    </a>
                                </li>
                                <li className="breadcrumb-item active"> A PROPOS DE NOUS </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/*    end banner  */}
            <section className=" frstabt ">
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-md-6 text-left wow fadeInLeft"
                            data-wow-delay="0.4s"
                        >
                            <div className="myv-img-otr ml-0">
                                <div className="myv-img">
                                    <img src={myv_pc} alt="" />
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-6 col-lg-6 wow fadeInRight"
                            data-wow-delay="0.4s"
                        >
                            <div className="comn_hdr green mb-5 text-left">
                                <span className="mb-2">QUI SOMMES-NOUS ?</span>
                                <h2>Anagram DS : la qualité d'un service</h2>
                                <p>
                                    Depuis notre création en 2021, nous sommes devenus un acteur
                                    incontournable dans le domaine de la cybersécurité et du cloud.
                                    Notre entreprise rassemble une équipe d'experts chevronnés,
                                    cumulant plus de 10 ans d'expérience dans le domaine de
                                    l'informatique.
                                </p>
                                <p>
                                    Chez Anagram DS, notre mission est de protéger les entreprises
                                    contre les menaces numériques et de les aider à tirer pleinement
                                    parti des avantages du cloud. Avec une connaissance approfondie
                                    des dernières tendances et des technologies émergentes, nous
                                    sommes en mesure de fournir des solutions de cybersécurité
                                    innovantes et des services de cloud fiables à nos clients.{" "}
                                </p>
                                <p>
                                    Notre approche personnalisée nous permet de comprendre les besoins
                                    spécifiques de chaque entreprise et de concevoir des solutions sur
                                    mesure pour renforcer leur infrastructure et prévenir les risques
                                    de sécurité. Nous sommes fiers de notre réputation en tant que
                                    partenaire de confiance, offrant un service client de premier
                                    ordre et des résultats tangibles. En choisissant Anagram DS, vous
                                    vous assurez une expertise de pointe et une tranquillité d'esprit
                                    en matière de cybersécurité et de cloud.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="grow_business toujersc no-namesec">
                <div className="container">
                    <div className="grow_business_inner">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front text-center">
                                            <div className="growicon">
                                                <img src={m1} alt="" />
                                            </div>
                                            <h3>Objectif</h3>
                                            <p>
                                                Notre but est de vous proposer les meilleurs services pour
                                                digitaliser votre entreprise efficacement.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front text-center">
                                            <div className="growicon">
                                                <img src={m2} alt="" />
                                            </div>
                                            <h3>Notre vision</h3>
                                            <p>
                                                Pour nous chaque projet est une nouvelle opportunité de nous
                                                surpasser. Nous gardons toujours à l'esprit que chaque
                                                client est unique et mérite une solution adaptée.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="flip-box">
                                    <div className="flip-box-inner">
                                        <div className="flip-box-front text-center">
                                            <div className="growicon">
                                                <img src={m3} alt="" />
                                            </div>
                                            <h3>Nos valeurs</h3>
                                            <p>
                                                Il est important pour nous de rester au plus proche de nos
                                                clients et tenir nos engagements en toutes circonstances.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ins-sec">
                <div className="ins-in">
                    <div className="container">
                        <div className="ins-otr">
                            <div className="comn_hdr green mb-5 text-center">
                                <span className="mb-2">2021 à Aujourd'hui</span>
                                <h2>
                                    Explorez nos différentes étapes
                                    <br />
                                    Depuis le commencement
                                </h2>
                            </div>
                            <div className="fr-timeline">
                                <div className="contact text-center">
                                    <a href="" className="redbtn">
                                        Comment tout à commencer
                                    </a>
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                            <div className="time-in">
                                                <div className="fr-timeline-pic-in">
                                                    <div className="fr-timeline-aftr">
                                                        <div className="fr-timeline-pic">
                                                            <time>Avril 2021</time>
                                                        </div>
                                                        <div className="fr-timeline-crner">
                                                            <img src={crnr} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="fr-timeline-txt">
                                                    <h3>CREATION</h3>
                                                    <p>
                                                        Anagram DS a vu le jour dans le but d'apporter des
                                                        solutions innovantes aux entreprises.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="time-in">
                                                <div className="fr-timeline-pic-in">
                                                    <div className="fr-timeline-aftr">
                                                        <div className="fr-timeline-pic">
                                                            <time>Septembre 2021</time>
                                                        </div>
                                                        <div className="fr-timeline-crner">
                                                            <img src={crnr} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="fr-timeline-txt">
                                                    <h3>CYBERSOC</h3>
                                                    <p>
                                                        Lancement du sercvice CYBERSOC: ce service a été lancé
                                                        pour répondre aux besoins de sécurité des entreprises
                                                        pour le compte de grands clients.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="time-in">
                                                <div className="fr-timeline-pic-in">
                                                    <div className="fr-timeline-aftr">
                                                        <div className="fr-timeline-pic">
                                                            <time> Novembre 2021</time>
                                                        </div>
                                                        <div className="fr-timeline-crner">
                                                            <img src={crnr} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="fr-timeline-txt">
                                                    <h3>nouveaux clients</h3>
                                                    <p>
                                                        Anagram DS devient partenaire avec de grands acteurs du
                                                        CAC40 et de grandes Administrations.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="time-in">
                                                <div className="fr-timeline-pic-in">
                                                    <div className="fr-timeline-aftr">
                                                        <div className="fr-timeline-pic">
                                                            <time> Septembre 2022</time>
                                                        </div>
                                                        <div className="fr-timeline-crner">
                                                            <img src={crnr} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="fr-timeline-txt">
                                                    <h3>SUPPORT &amp; AUTOMATION</h3>
                                                    <p>
                                                        Lancement du service SUPPORT &amp; AUTOMATION : Ce
                                                        service a été lancé pour assurer des interventions
                                                        d'ugences et des développements sur mesure.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="time-in">
                                                <div className="fr-timeline-pic-in">
                                                    <div className="fr-timeline-aftr">
                                                        <div className="fr-timeline-pic">
                                                            <time>Mars 2022</time>
                                                        </div>
                                                        <div className="fr-timeline-crner">
                                                            <img src={crnr} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="fr-timeline-txt">
                                                    <h3>R&amp;D Osint</h3>
                                                    <p>Recherche et développement en cours....</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" eqp-se">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="comn_hdr green text-center">
                                <span className="mb-2">OUR SPECIALISTS</span>
                                <h2>Our Executive Team Member</h2>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some form, by
                                    injected humour, or randomised words.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="eqip_cbd_otr">
                        <div className="eqip_sldr_otr">
                            <Swiper
                                modules={[Navigation, Scrollbar, Pagination]}
                                grabCursor={true}
                                spaceBetween={0}
                                slidesPerView={3}
                                centeredSlides={true}
                                initialSlide={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide>
                                    <div className="eqip_otr_bk ">
                                        <div className="eqip_img">
                                            {" "}
                                            <img src={cl1} alt="" />{" "}
                                        </div>
                                        <div className="eqip_txt">
                                            <h3>John Doe</h3>
                                            <p>VP. Solution Architecture</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="eqip_otr_bk ">
                                        <div className="eqip_img">
                                            {" "}
                                            <img src={cl1} alt="" />{" "}
                                        </div>
                                        <div className="eqip_txt">
                                            <h3>John Doe</h3>
                                            <p>VP. Solution Architecture</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="eqip_otr_bk ">
                                        <div className="eqip_img">
                                            {" "}
                                            <img src={cl1} alt="" />{" "}
                                        </div>
                                        <div className="eqip_txt">
                                            <h3>John Doe</h3>
                                            <p>VP. Solution Architecture</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="eqip_otr_bk ">
                                        <div className="eqip_img">
                                            {" "}
                                            <img src={cl1} alt="" />{" "}
                                        </div>
                                        <div className="eqip_txt">
                                            <h3>John Doe</h3>
                                            <p>VP. Solution Architecture</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="eqip_otr_bk ">
                                        <div className="eqip_img">
                                            {" "}
                                            <img src={cl1} alt="" />{" "}
                                        </div>
                                        <div className="eqip_txt">
                                            <h3>John Doe</h3>
                                            <p>VP. Solution Architecture</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                               
                            </Swiper>
                            
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    );
}

export default About;