import '../../styles/Bootstrap.css'
import '../../styles/slick.css'
import '../../styles/animate.css'
import '../../styles/woco-accordion.min.css'
import '../../styles/swiper.css'
import '../../styles/responsive.css'
import '../../styles/easy-responsive-tabs.css'
import '../../styles/font-awesome.css'
import "../../styles/jquery.fancybox.css"
import './Blog.scss';


import Navbar from "../../components/Header/Navbar"
import Footer from "../../components/Footer/Footer"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Blog() {
    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);

    //paggination
    const TotalArticle = 16;
    const [TotalPage, setTotalPage] = useState(Number);
    const [CurrentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const isAuth: Boolean = !!localStorage.getItem("token");
        if (!isAuth) {
            navigate("/login")
        }
        
        axios.get("http://localhost:8000/api/blog").then(function (response) {
            if (response.status === 200) {
                setArticles(response.data);
            }
        }).catch(function (error) {
            console.log(error);
        });
    }, []);
    console.log(articles);

    return (
        <>
            <header>
                <Navbar />
            </header>

            <div className='blog_container'>

            </div>
            <Footer />

        </>
    );
}

export default Blog;