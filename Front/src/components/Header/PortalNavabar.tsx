import "./PortalNavbar.scss"
import Logo from "../../assets/logo.png"
import SearchButton from "../../assets/SearchButton.png"
import AvatarNav from "../../assets/AvatarNav.png"
export default function PortalNavabar() {
    return (
        <>
          <div className="PortalNavbar">
            <div className="portal_nav_left">
                <img src={Logo} alt="" />
                <div className="search_button">
                    <img src={SearchButton} alt="" />
                    <p>Rechercher</p>
                </div>
            </div>
            <div className="portal_nav_right">
                <img src={AvatarNav} alt="" />
            </div>
          </div>
        </>
    );
}