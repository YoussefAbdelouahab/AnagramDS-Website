import '../../styles/Bootstrap.css'
import '../../styles/slick.css'
import '../../styles/animate.css'
import '../../styles/woco-accordion.min.css'
import '../../styles/swiper.css'
import '../../styles/responsive.css'
import '../../styles/easy-responsive-tabs.css'
import '../../styles/font-awesome.css'
import "../../styles/jquery.fancybox.css"
import './Help.scss';


import Navbar from "../../components/Header/Navbar"
import Footer from "../../components/Footer/Footer"

import project_detail_banner from "../../assets/project_details_banner.jpg"
import assitance1 from "../../assets/assistance1.jpg"
import assitance2 from "../../assets/assistance2.jpg"
import assitance3 from "../../assets/assistance3.jpg"
import assitance4 from "../../assets/assistance4.jpg"
function Help() {

    return (
        <>
            <header>
                <Navbar />
            </header>
            <>
                <section className="banner inner_banner">
                    <div className="ban_img">
                        <img src={project_detail_banner} alt="" />
                    </div>
                    <div className="banner_content">
                        <div className="banner_heading">
                            <h1>Assistance</h1>
                        </div>
                        <ul className="breadcrum">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>ASSISTANCE</li>
                        </ul>
                    </div>
                </section>
                <section className="assistance_one">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="besoin wow fadeInLeft">
                                    <div className="comn_hdr green marginforty">
                                        <span>BESOIN D'AIDE ?</span>
                                        <h2>L'assistance Anagram DS à votre écoute ...</h2>
                                    </div>
                                    <div className="beso_para">
                                        <p>
                                            Suivez un ticket d’intervention informatique chez Anagram DS
                                        </p>
                                        <p>Suivez le parcours d’un ticket en 3 étapes :</p>
                                        <p>
                                            Un problème informatique peut arriver à n’importe quel moment de
                                            la journée, ce qui n’est pas toujours agréable lorsque ça arrive
                                            alors plusieurs tâches sont en attente.
                                        </p>
                                        <p>
                                            Heureusement, vous avez le bon réflexe et vous contactez
                                            rapidement la hotline d’Anagram DS, votre prestataire de
                                            services informatiques. Après un passage par l’accueil
                                            téléphonique, vous êtes redirigé vers votre cellule technique de
                                            référence. « Julien, Anagram DS, bonjour ! Comment puis-je vous
                                            aider ?
                                        </p>
                                        <p>
                                            Bienvenue sur la hotline d’Anagram DS, le parcours de votre
                                            demande d’assistance va commencer !
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 wow fadeInRight">
                                <div className="beso_img">
                                    <div className="besoimg_in">
                                        <img src={assitance1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="etape">
                    <div className="etapeoutr">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6 wow fadeInLeft">
                                    <div className="comn_hdr2">
                                        <h3>Etape 1 : la réception de votre demande</h3>
                                    </div>
                                    <div className="beso_para">
                                        <p>
                                            Pour contacter le support technique d’Anagram DS, vous disposez
                                            de 2 possibilités :
                                        </p>
                                        <p>En créant un ticket directement en cliquant ICI</p>
                                        <p>Par téléphone en joignant ce numéro : 07 54 29 90 09</p>
                                        <p>
                                            Le support est joignable du lundi au vendredi entre 8 heures et
                                            19 heures.
                                        </p>
                                        <p>
                                            Chez nous, chaque client est unique et possède sa propre
                                            authentification. Cette dernière vous permettra d’être redirigé
                                            vers votre équipe technique de référence.
                                        </p>
                                        <p>
                                            Lorsque vous arrivez chez Anagram DS, vous êtes directement
                                            associé à une cellule dédiée. Ce cloisonnement est là pour vous
                                            garantir les meilleures prestations possibles : nous connaissons
                                            votre entreprise, vos besoins et les échanges sont simplifiés.
                                        </p>
                                        <p>Phase de prise de contact : check !</p>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInRight">
                                    <div className="etape_out">
                                        <div className="etape_in">
                                            <img src={assitance2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="etapeoutr">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6 wow fadeInLeft">
                                    <div className="comn_hdr2">
                                        <h3>Etape 2 : la création d’un ticket</h3>
                                    </div>
                                    <div className="beso_para">
                                        <p>
                                            Après avoir détaillé le problème technique en cours auprès de
                                            votre référent technique, nous ouvrons ce que l’on appelle chez
                                            nous, un ticket.
                                        </p>
                                        <p>
                                            Vous pouvez également créer un ticket directement en ligne et en
                                            toute autonomie, en cliquant ICI
                                        </p>
                                        <p>
                                            Ce ticket, c’est la feuille de route de votre incident, tout y
                                            est récapitulé afin de garantir un suivi optimal lors du
                                            processus de résolution. Chaque ticket est complété avec un nom
                                            et une description.
                                        </p>
                                        <p>
                                            Une fois ouvert, vous recevez un mail de confirmation de la
                                            prise en charge de votre demande
                                        </p>
                                        <p>
                                            A chaque avancée dans la résolution du problème, vous êtes
                                            informés des opérations effectuées et de ce qui va se passer
                                            ensuite.
                                        </p>
                                        <p>
                                            Vous offrir un tel suivi est pour nous primordial : plus nous
                                            vous faisons gagner en visibilité sur ce que l’on fait et ce qui
                                            se passe dans votre informatique, plus vous gagnerez en
                                            sérénité. Une plateforme vous est particulièrement dédiée pour
                                            suivre l’avancement de vos tickets :
                                        </p>
                                        <p>
                                            Une fois la solution trouvée, votre ticket est clôturé par le
                                            technicien référent. Si toutefois le problème n’est pas résolu,
                                            le ticket est attribué à un autre référent. Chez Anagram DS,
                                            nous faisons aussi le pari de la complémentarité des compétences
                                            dans nos équipes !
                                        </p>
                                        <p>Création et suivi du ticket : check !</p>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInRight">
                                    <div className="etape_out">
                                        <div className="etape_in">
                                            <img src={assitance4} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="etapeoutr">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-6 wow fadeInLeft">
                                    <div className="comn_hdr2">
                                        <h3>Etape 3 : la clôture du ticket</h3>
                                    </div>
                                    <div className="beso_para">
                                        <p>
                                            Bonne nouvelle ! La solution a été trouvée, le problème est
                                            résolu et toute votre informatique est de nouveau 100%
                                            opérationnelle.
                                        </p>
                                        <p>
                                            Un ticket n’est clôturé qu’une fois le problème totalement
                                            résolu. Une fois cette clôture validée, le ticket est archivé.
                                            Tant que celui-ci n’est pas supprimé, nos équipes se mobilisent
                                            pour rester vigilantes quant au problème rencontré. Cela nous
                                            permet d’être les plus réactifs possibles si une demande
                                            inhérente au problème initial devait subvenir.
                                        </p>
                                        <p>Clôture du ticket : check !</p>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInRight">
                                    <div className="etape_out">
                                        <div className="etape_in">
                                            <img src={assitance3} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="contact etape">
                            <a href="" className="redbtn">
                                CRÉER UN TICKET
                            </a>
                            <a href="" className="redbtn">
                                SUIVRE UN TICKET
                            </a>
                        </div>
                    </div>
                </section>
            </>

            <Footer />

        </>
    );
}

export default Help;