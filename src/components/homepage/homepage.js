import { useState, useEffect } from "react";
import Loading from "../loading/loading";
import Header from "./header/header";
import "./homepage.css";
import Body from "./body/body";

const Home = ({ content }) => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(() => {setLoading(false)}, 2020);
    });

    if (loading) {
        return <Loading />;
    }
    else {
        return (
            <div className="home">
                <Header name={content.name} email={content.email} github={content.github} linkedin={content.linkedin} profile_icon={content.profile_icon} />
                <Body/>
            </div>
        );
    }

};

export default Home;