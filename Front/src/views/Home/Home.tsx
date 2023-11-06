import '../../styles/Bootstrap.css'
import '../../styles/slick.css'
import '../../styles/animate.css'
import '../../styles/woco-accordion.min.css'
import '../../styles/swiper.css'
import '../../styles/responsive.css'
import '../../styles/easy-responsive-tabs.css'
import '../../styles/font-awesome.css'
import "../../styles/jquery.fancybox.css"
import './Home.scss';


import Navbar from "../../components/Header/Navbar"
import Footer from "../../components/Footer/Footer"

import Banner from "../../assets/banner-pic4.jpg"
import Banner_after from "../../assets/bnr-after.png"

import growicon from "../../assets/growicon.png"
import grow1 from "../../assets/grow1.png"
import grow4 from "../../assets/grow4.png"
import grow6 from "../../assets/grow6.png"
import grow5 from "../../assets/grow5.png"
import laptop from "../../assets/laptop.png"
import expericon from "../../assets/expericon.png"
import expericon1 from "../../assets/expericon1.png"
import expericon2 from "../../assets/expericon2.png"
import expericon3 from "../../assets/expericon3.png"
import strategy from "../../assets/strategy.png"
import strategy1 from "../../assets/strategy1.png"
import strategy2 from "../../assets/strategy2.png"
import strategy3 from "../../assets/strategy3.png"
import strategy4 from "../../assets/strategy4.png"
import strategy5 from "../../assets/strategy5.png"
import strategy6 from "../../assets/strategy6.png"
import strategy_line1 from "../../assets/strategy_line1.png"
import strategy_line2 from "../../assets/strategy_line2.png"
import strategy_line3 from "../../assets/strategy_line3.png"
import strategy_line4 from "../../assets/strategy_line4.png"
import strategy_line5 from "../../assets/strategy_line5.png"
import strategy_line6 from "../../assets/strategy_line6.png"
import man_laptop from "../../assets/man-laptop.png"
import star from "../../assets/star.png"
import circlesliderimg1 from "../../assets/circlesliderimg1.jpg"
import circlesliderimg2 from "../../assets/circlesliderimg2.jpg"
import circlesliderimg3 from "../../assets/circlesliderimg3.jpg"
import circlesliderimg4 from "../../assets/circlesliderimg4.jpg"
import circlesliderimg5 from "../../assets/circlesliderimg5.jpg"
import circlesliderimg6 from "../../assets/circlesliderimg6.jpg"
import circlesliderimg7 from "../../assets/circlesliderimg7.jpg"
import circlesliderimg8 from "../../assets/circlesliderimg8.jpg"
import circlesliderimg9 from "../../assets/circlesliderimg9.jpg"
import project_icon from "../../assets/project_icon.png"
import project3_3 from "../../assets/project3-3.png"
import project_none from "../../assets/project-none.jpeg"
import trust1 from "../../assets/trust1.png"
import trust2 from "../../assets/trust2.jpeg"
import trust3 from "../../assets/trust3.png"
import trust4 from "../../assets/trust4.png"
import trust5 from "../../assets/trust5.jpg"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Home() {

  return (
    <>
      <header>
        <Navbar />
      </header>

      <section className="banner">
        <a href="#grow" className="arrow-container">
          <div className="arrow-down" />
        </a>
        <div className="ban_img">
          <img src={Banner} alt="" />
        </div>
        <div className="banner_content">
          <div className="banner_heading">
            <h1>Relevons vos challenges.</h1>
          </div>
          <p>
            Bénéficiez de nos compétences et de notre réseaux d'experts. Essayez notre
            étude de besoins en ligne. Réponse en 24H.
          </p>
          <div className="banner_button">
            <a href="/freequote" className="redbtn">
              Devis gratuit
            </a>
          </div>
        </div>
        <div className="curve_img">
          <img
            style={{ width: "100% !important" }}
            src={Banner_after}
            alt=""
          />
        </div>
      </section>

      <section className="grow_business comn_margin" id="grow">
        <div className="container">
          <div className="grow_business_inner">
            <div className="pink_circle">
              <img src={growicon} alt="" />
            </div>
            <div className="comn_hdr green text-center">
              <span>NOS SERVICES</span>
              <h2>
                Un service adapté à vos
                <br />
                besoins
              </h2>
              <p>
                Une équipe à votre écoute, afin de vous offrir un service <br />
                adapté à vos problématiques métier.
              </p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="flip-box">
                  <div className="flip-box-inner">
                    <div className="flip-box-front text-center">
                      <div className="growicon">
                        <img src={grow1} alt="" />
                      </div>
                      <h3>Gouvernance &amp; Cybersécurité</h3>
                      <p>
                        A turnkey website or a tailor-made application, we support you
                        in each phase of the development.
                      </p>
                    </div>
                    <div className="flip-box-back text-center">
                      <div className="growicon">
                        <img src={grow1} alt="" />
                      </div>
                      <h3>Gouvernance &amp; Cybersécurité</h3>
                      <p>
                        A turnkey website or a tailor-made application, we support you
                        in each phase of the development.
                      </p>
                      <div className="redcircle">
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="flip-box">
                  <div className="flip-box-inner">
                    <div className="flip-box-front text-center">
                      <div className="growicon">
                        <img src={grow4} alt="" />
                      </div>
                      <h3>IOT &amp; Domotique</h3>
                      <p>
                        Take advantage of our expertise for better visibility thanks
                        to communication media meticulously.
                      </p>
                    </div>
                    <div className="flip-box-back text-center">
                      <div className="growicon">
                        <img src={grow4} alt="" />
                      </div>
                      <h3>IOT &amp; Domotique</h3>
                      <p>
                        Take advantage of our expertise for better visibility thanks
                        to communication media meticulously.
                      </p>
                      <div className="redcircle">
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="flip-box">
                  <div className="flip-box-inner">
                    <div className="flip-box-front text-center">
                      <div className="growicon">
                        <img src={grow6} alt="" />
                      </div>
                      <h3>Développement de solution et d’outils sur mesure</h3>
                      <p>
                        With our ERP, Managing your business becomes easy. Estimates,
                        Invoices, Accounting.
                      </p>
                    </div>
                    <div className="flip-box-back text-center">
                      <div className="growicon">
                        <img src={grow6} alt="" />
                      </div>
                      <h3>Développement de solution et d’outils sur mesure</h3>
                      <p>
                        With our ERP, Managing your business becomes easy. Estimates,
                        Invoices, Accounting.
                      </p>
                      <div className="redcircle">
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="flip-box">
                  <div className="flip-box-inner">
                    <div className="flip-box-front text-center">
                      <div className="growicon">
                        <img src={grow6} alt="" />
                      </div>
                      <h3>Support &amp; Maintenance</h3>
                      <p>
                        With extensive experience in IT security, our consultants are
                        involved in various missions in cybe.
                      </p>
                    </div>
                    <div className="flip-box-back text-center">
                      <div className="growicon">
                        <img src={grow5} alt="" />
                      </div>
                      <h3>Support &amp; Maintenance</h3>
                      <p>
                        With extensive experience in IT security, our consultants are
                        involved in various missions in cybe.
                      </p>
                      <div className="redcircle">
                        <i className="fa fa-angle-down" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="expert">
        <div className="container">
          <div className="laptop floating">
            <img src={laptop} alt="" />
          </div>
          <div className="expert_inner">
            <div className="row">
              <div className="col-lg-6 col-md-5">
                <div className="experleftcontent">
                  <div className="pink_circle black">
                    <img src={expericon} alt="" />
                  </div>
                  <div className="comn_hdr white">
                    <span>Notre expertise</span>
                    <h2>
                      Notre réseaux d'experts
                      <br />
                      est à votre service
                    </h2>
                    <p>Nos offres sont basées sur 3 points fondamentaux.</p>
                  </div>
                  <div className="contact">
                    <a href="/about" className="redbtn">
                      En savoir plus
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-7">
                <div className="expertrightcontent">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="boxleft">
                        <div className="leftfirstbox text-center">
                          <div className="expericon text-center swing">
                            <img src={expericon1} alt="" />
                          </div>
                          <p>La satisfaction de nos clients est notre priorité.</p>
                        </div>
                      </div>
                      <div className="boxleft">
                        <div className="leftfirstbox text-center">
                          <div className="expericon text-center swing">
                            <img src={expericon2} alt="" />
                          </div>
                          <p>
                            L'hyper-automatisation des process, permet une prise en
                            charge rapide de vos demandes.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="boxleft rightbox">
                        <div className="leftfirstbox text-center">
                          <div className="expericon text-center swing">
                            <img src={expericon3} alt="" />
                          </div>
                          <p>
                            La confidentialité est la clé voute de votre business.
                            C'est notre métier.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="strategy comn_margin">
        <div className="container">
          <div className="strategy_inner">
            <div className="pink_circle">
              <img src={strategy} alt="" />
            </div>
            <div className="comn_hdr green text-center">
              <span>Stratégie</span>
              <h2>Nos principes</h2>
            </div>
            <div className="strategy_content">
              <div className="strategy_main_img text-center">
                <div className="content_out">
                  <div className="strategy_line1">
                    <img src={strategy_line1} alt="" />
                  </div>
                  <div className="strategy_our1 text-right">
                    <div className="strategy_icon1">
                      <img src={strategy1} alt="" />
                    </div>
                    <div className="sta_head">
                      <h5>Organization</h5>
                      <p>
                        It is important to stay organized <br />
                        on our various projects.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_out">
                  <div className="strategy_line2">
                    <img src={strategy_line2} alt="" />
                  </div>
                  <div className="strategy_our2 text-right">
                    <div className="strategy_icon1">
                      <img src={strategy2} alt="" />
                    </div>
                    <div className="sta_head">
                      <h5>Creativity</h5>
                      <p>
                        Our team is a source of proposals <br />
                        to enrich your projects.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_out">
                  <div className="strategy_line3">
                    <img src={strategy_line3} alt="" />
                  </div>
                  <div className="strategy_our3 text-right">
                    <div className="strategy_icon1">
                      <img src={strategy3} alt="" />
                    </div>
                    <div className="sta_head">
                      <h5>Scalability</h5>
                      <p>
                        We keep an eye on the services <br />
                        delivered and suggest.
                      </p>
                    </div>
                  </div>
                </div>
                <img src={man_laptop} alt="" />
                <div className="content_out">
                  <div className="strategy_line4">
                    <img src={strategy_line4} alt="" />
                  </div>
                  <div className="strategy_our4 text-left">
                    <div className="strategy_icon1">
                      <img src={strategy4} alt="" />
                    </div>
                    <div className="sta_head">
                      <h5>Sustainability</h5>
                      <p>
                        Analytical expertise allows us to <br />
                        offer sustainable solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_out">
                  <div className="strategy_line5">
                    <img src={strategy_line5} alt="" />
                  </div>
                  <div className="strategy_our5 text-left">
                    <div className="strategy_icon1">
                      <img src={strategy5} alt="" />
                    </div>
                    <div className="sta_head">
                      <h5>Professionals</h5>
                      <p>
                        Our collaborators are at your <br />
                        disposal in a most professional.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content_out">
                  <div className="strategy_line6">
                    <img src={strategy_line6} alt="" />
                  </div>
                  <div className="strategy_our6 text-left">
                    <div className="strategy_icon1">
                      <img src={strategy6} alt="" />
                    </div>
                    <div className="sta_head">
                      <h5>Results</h5>
                      <p>
                        Our strategies are at your disposal <br />
                        to help you achieve your goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial-area">
        <div className="container">
          <div className="inner_testi">
            <div className="pink_circle">
              <img src={star} alt="" />
            </div>
            <div className="comn_hdr green text-center">
              <span>Testimonials</span>
              <h2>Que penses nos clients ?</h2>
            </div>
          </div>
          <div className="testi-wrap">
            <div
              className="client-single active position-1"
              data-position="position-1"
            >
              <div className="client-img">
                <img src={circlesliderimg1} alt="" />
              </div>
              <div className="client-comment">
                <h3>
                  "Young team experienced in computer engineering. I am fortunate to
                  be supported in the remediation of cybersecurity attacks from start
                  to finish."
                </h3>
              </div>
              <div className="client-info">
                <h3>Robert Jeams</h3>
              </div>
            </div>
            <div
              className="client-single inactive position-2"
              data-position="position-2"
            >
              <div className="client-img">
                <img src={circlesliderimg2} alt="" />
              </div>
              <div className="client-comment">
                <h3>
                  "Young team experienced in computer engineering. I am fortunate to
                  be supported in the remediation of cybersecurity attacks from start
                  to finish."
                </h3>
              </div>
              <div className="client-info">
                <h3>Robert Jeams</h3>
              </div>
            </div>
            <div
              className="client-single inactive position-3"
              data-position="position-3"
            >
              <div className="client-img">
                <img src={circlesliderimg3} alt="" />
              </div>
              <div className="client-comment">
                <h3>
                  "Young team experienced in computer engineering. I am fortunate to
                  be supported in the remediation of cybersecurity attacks from start
                  to finish."
                </h3>
              </div>
              <div className="client-info">
                <h3>Robert Jeams</h3>
              </div>
            </div>
            <div
              className="client-single inactive position-4"
              data-position="position-4"
            >
              <div className="client-img">
                <img src={circlesliderimg4} alt="" />
              </div>
              <div className="client-comment">
                <h3>
                  "Young team experienced in computer engineering. I am fortunate to
                  be supported in the remediation of cybersecurity attacks from start
                  to finish."
                </h3>
              </div>
              <div className="client-info">
                <h3>Robert Jeams</h3>
              </div>
            </div>
            <div
              className="client-single inactive position-5"
              data-position="position-5"
            >
              <div className="client-img">
                <img src={circlesliderimg5} alt="" />
              </div>
              <div className="client-comment">
                <h3>
                  "Young team experienced in computer engineering. I am fortunate to
                  be supported in the remediation of cybersecurity attacks from start
                  to finish."
                </h3>
              </div>
              <div className="client-info">
                <h3>Robert Jeams</h3>
              </div>
            </div>
            <div
              className="client-single inactive position-6"
              data-position="position-6"
            >
              <div className="client-img">
                <img src={circlesliderimg6} alt="" />
              </div>
              <div className="client-comment">
                <h3>
                  "Young team experienced in computer engineering. I am fortunate to
                  be supported in the remediation of cybersecurity attacks from start
                  to finish."
                </h3>
              </div>
              <div className="client-info">
                <h3>Robert Jeams</h3>
              </div>
            </div>
            <div
              className="client-single inactive position-7"
              data-position="position-7"
            >
              <div className="client-img">
                <img src={circlesliderimg7} alt="" />
              </div>
              <div className="client-comment">
                <h3>
                  "Young team experienced in computer engineering. I am fortunate to
                  be supported in the remediation of cybersecurity attacks from start
                  to finish."
                </h3>
              </div>
              <div className="client-info">
                <h3>Robert Jeams</h3>
              </div>
            </div>
            <div
              className="client-single inactive position-8"
              data-position="position-8"
            >
              <div className="client-img">
                <img src={circlesliderimg8} alt="" />
              </div>
              <div className="client-comment">
                <h3>
                  "Young team experienced in computer engineering. I am fortunate to
                  be supported in the remediation of cybersecurity attacks from start
                  to finish."
                </h3>
              </div>
              <div className="client-info">
                <h3>Robert Jeams</h3>
              </div>
            </div>
            <div
              className="client-single inactive position-9"
              data-position="position-9"
            >
              <div className="client-img">
                <img src={circlesliderimg9} alt="" />
              </div>
              <div className="client-comment">
                <h3>
                  "Young team experienced in computer engineering. I am fortunate to
                  be supported in the remediation of cybersecurity attacks from start
                  to finish."
                </h3>
              </div>
              <div className="client-info">
                <h3>Robert Jeams</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="latest_project">
        <div className="latest_project_inner">
          <div className="pink_circle">
            <img src={project_icon} alt="" />
          </div>
          <div className="comn_hdr green text-center">
            <span>R&amp;D</span>
            <h2>Nos Projets</h2>
          </div>
          <div className="mngnt_slider_otr">
            <div className="mngmnt_slider swiper-container">
              <div className="swiper-wrapper">
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
                  <SwiperSlide><a href="/contact"><img src={project_none} alt="" /></a></SwiperSlide>
                  <SwiperSlide><a href="/contact"><img src={project3_3} alt="" /></a></SwiperSlide>
                  <SwiperSlide className="last_phone"><a href="/contact"><img src={project_none} alt="" /></a></SwiperSlide>
                </Swiper>
              </div>
            </div>
            {/* Add Arrows */}

            <div className="see_pro">
              <a href="javascript:void(0);" className="redbtn">
                Voir plus de projets
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="trust_us comn_margin">
        <div className="container">
          <div className="trust_inner">
            <h6>Ils nous font confiance</h6>
            <div className="trust_logo">
              <div className="prtnr_sldr_otr swiper-container">
                <div className="swiper-wrapper">
                  <Swiper
                    modules={[Navigation, Scrollbar, Pagination, Autoplay]}
                    grabCursor={true}
                    spaceBetween={0}
                    slidesPerView={3}
                    centeredSlides={true}
                    autoplay={{
                      delay: 1000,
                      disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                  >
                    <SwiperSlide><a href="/contact"><img src={trust1} alt="" /></a></SwiperSlide>
                    <SwiperSlide><a href="/contact"><img src={trust2} alt="" /></a></SwiperSlide>
                    <SwiperSlide><a href="/contact"><img src={trust3} alt="" /></a></SwiperSlide>
                    <SwiperSlide><a href="/contact"><img src={trust4} alt="" /></a></SwiperSlide>
                    <SwiperSlide><a href="/contact"><img src={trust5} alt="" /></a></SwiperSlide>
                  </Swiper>
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

export default Home;