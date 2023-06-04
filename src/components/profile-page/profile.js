import { Link } from "react-router-dom";
import "./profile.css";

const Profile = ({ name, icon }) => {
  return (
    <>
      <div className="profilePage">
        <h1 style={{ fontSize: "3rem", transform: "translateY(-10vh)" }}>
          Who are you watching?
        </h1>
        <Link to="/browse" style={{ textDecoration: "none" }}>
          <div className="profile">
            <div
              className="profile-icon"
              style={{ backgroundImage: `url(${icon})` }}
            />
            <div className="profile-text">{name}</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Profile;
