import { Link } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi"
import { VscGithubAlt } from "react-icons/vsc"
import { SiLinkedin } from "react-icons/si"
import NameLogo from "./name_logo/name_logo";
import "./header.css";
const Header = ({name, email, github, linkedin, profile_icon})=>{
    return (
        <div className="header">
            <div className="header-items">
                <NameLogo name={name} className="header-options" />
                {!email || email.length === 0 ? <></> : <div className="header-options"><a href={`mailto:${email}`} style={{color: "#ffffff"}}><TfiEmail /></a></div>}
                {!github || github.length === 0 ? <></> : <div className="header-options"><a href={github} style={{color: "#ffffff"}}><VscGithubAlt /></a></div>}
                {!linkedin || linkedin.length === 0 ? <></> : <div className="header-options"><a href={linkedin} style={{color: "#ffffff"}}><SiLinkedin /></a></div>}
            </div>
            <Link title="Back to profiles" to="/" className="header-items header-profile-icon" style={{background: `url(${profile_icon})`, backgroundSize: "contain"}} />
        </div>
    );
};

export default Header;