import "./Dashboard.scss"
import DashboardSeoIcone from "../../assets/DashboardSeoIcone.png"
export default function Dashboard() {
    return (
        <>
        <div className="dashboard_container">
            <div className="list_container">
                <ul className="SEO">
                    <img className="icone_list_title" src={DashboardSeoIcone} alt="" />
                    <h2>SEO</h2>
                    <li>Vérification de santé</li>
                    <li>Verification de structure</li>
                </ul>
                <ul className="Cybersécurité">
                    <img className="icone_list_title" src={DashboardSeoIcone} alt="" />
                    <h2>Cybersécurité</h2>
                    <li>Web</li>
                    <li>Vulnérabilité</li>
                </ul>
                <ul className="Sécurité">
                    <img className="icone_list_title" src={DashboardSeoIcone} alt="" />
                    <h2>Sécurité <br></br>opérationnelle </h2>
                    <li>Alerts</li>
                    <li>Rules</li>
                </ul>
            </div>
        </div>
        </>
    );
}