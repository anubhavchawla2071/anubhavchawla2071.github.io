import "./name_logo.css";
// TODO: make name wavy
const NameLogo = ({name})=>{
    const firstName = name.split(" ")[0];
    return <div className="logo">{firstName}
    <div className="ellipse"></div>
    </div>;
};

export default NameLogo;