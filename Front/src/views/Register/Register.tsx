import '../../styles/Bootstrap.css'
import '../../styles/slick.css'
import '../../styles/animate.css'
import '../../styles/woco-accordion.min.css'
import '../../styles/swiper.css'
import '../../styles/responsive.css'
import './Register.scss';

import Navbar from "../../components/Header/Navbar"
import Footer from "../../components/Footer/Footer"

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


import axios from "axios";


function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: ""
  })
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const formComplet = user.email && user.password && user.username;

  function hanldeRegister(e) {
    e.preventDefault();

    axios.post(`http://localhost:8000/api/user`, { email: user.email.trim(), password: user.password.trim(), username: user.username.trim() })
      .then(function (response) {
        if (response.status === 200) {
          navigate("/login")
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className='login_container'>
        <form onSubmit={hanldeRegister}>
          <h1 className="text-center">Inscription</h1>  

          <div className="">
            <input type="text" className="form-control" id="email" placeholder="Email"
              value={user.email}
              onChange={e => setUser({ ...user, email: e.target.value })} required />
          </div>

          <div className="">
            <input type="text" className="form-control" id="email" placeholder="Nom de compte"
              value={user.username}
              onChange={e => setUser({ ...user, username: e.target.value })} required />
          </div>

          <div className="password_div">
            <div className="input-group mb-3">
              <input type={showPassword ? 'text' : 'password'} className="form-control" id="password" aria-describedby="icon-eye"
                placeholder="Mot de passe"
                value={user.password}
                onChange={e => setUser({ ...user, password: e.target.value })} required />
            </div>
            <span className="" id="icon-eye" onClick={handleClickShowPassword}>
              {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}</span>
          </div>


          <button type="submit" className="btn btn-submit px-4 py-2" disabled={!formComplet}>S'inscrire</button>

        </form>
      </div>

      <Footer />
    </>
  );
}

export default Register;