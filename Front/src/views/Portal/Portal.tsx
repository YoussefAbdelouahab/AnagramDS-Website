import '../../styles/Bootstrap.css'
import '../../styles/slick.css'
import '../../styles/animate.css'
import '../../styles/woco-accordion.min.css'
import '../../styles/swiper.css'
import '../../styles/responsive.css'
import './Portal.scss';


import PortalNavbar from "../../components/Header/PortalNavabar"
import Footer from "../../components/Footer/Footer"
import Dashboard from '../../components/Dashboard/Dashboard'
import RedCard from "../../assets/RedCard.png";
import YellowCard from "../../assets/YellowCard.png"
import BlueCard from "../../assets/BlueCard.png"

import { useNavigate, Link } from "react-router-dom";
import { useEffect } from 'react'

function Portal() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth: Boolean = !!localStorage.getItem("token");
    if (!isAuth) {
      navigate("/login")
    }
  }, []);
  return (
    <div className='portail_page'>
      <header>
        <PortalNavbar />
      </header>

      <section className='portal_section'>
        <Dashboard />
        <div className='portal_section_right'>
          <div className='portal_card'>
            <div className='card RedCard'>
              <img src={RedCard} alt="" />
              <h2>3/10</h2>
              <h3>SEO Score</h3>
            </div>
            <div className='card YellowCard'>
              <img src={YellowCard} alt="" />
              <h2>8/10</h2>
              <h3>Osint Score</h3>
            </div>
            <div className='card BlueCard'>
              <img src={BlueCard} alt="" />
              <h2>4/10</h2>
              <h3>Audit Score</h3>
            </div>
          </div>
          <div className='portal_graph'>

          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default Portal;