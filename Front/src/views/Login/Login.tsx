import '../../styles/Bootstrap.css'
import '../../styles/slick.css'
import '../../styles/animate.css'
import '../../styles/woco-accordion.min.css'
import '../../styles/swiper.css'
import '../../styles/responsive.css'
import './Login.scss';

import Navbar from "../../components/Header/Navbar"
import Footer from "../../components/Footer/Footer"

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


import axios from "axios";


function Login() {
  const navigate = useNavigate();

  function AlertError(props) {
    const { showAlertError, text } = props;
    return (
      <div className={`alert alert-danger ${showAlertError ? "d-block" : "d-none"}`} role="alert">
        {text}
      </div>
    )
  }

  const [showAlertError, setShowAlertError] = useState(false);
  const handleShowAlertError = () => {
    setShowAlertError(true);
  };

  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const formComplet = user.email && user.password;

  function handleLogin(e) {
    e.preventDefault();

    axios.post(`http://localhost:8000/api/login`, { email: user.email.trim(), password: user.password.trim() })
      .then(function (response) {
        if (response.status === 200) {

          if (showAlertError === true) {
            setShowAlertError(false);
          }

          localStorage.setItem("token", response.data.token);
          navigate("/portail")
        }
      })
      .catch(function (error) {
        handleShowAlertError()
        console.log(error);
      });
  }


  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className='login_container'>
        <form onSubmit={handleLogin}>
          <h1 className="text-center">Connexion</h1>
          <AlertError showAlertError={showAlertError} text={"Identifiant ou mot de passe incorrect"} />

          <div className="">
            <input type="text" className="form-control" id="email" placeholder="Email"
              value={user.email}
              onChange={e => setUser({ ...user, email: e.target.value })} required />
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


          <button type="submit" className="btn btn-submit px-4 py-2" disabled={!formComplet}>Se connecter</button>

        </form>
      </div>

      <Footer />
    </>
  );
}

export default Login;