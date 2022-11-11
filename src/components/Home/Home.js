import { Fragment, useState } from "react";
import './Home.css'
import todoIcon from '../../media/todoIcon.png';
import Card from "./Card";
import CardTwo from "../Home/CardTwo";
import HomeContentFeature from "./HomeContentFeature";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Features from "../Feature/Features";
import Template from "../Template/Template";

const Home = (props) => {
    const [showFeaturesPage, setShowFeaturesPage] = useState(false);
    const [showHomePage, setShowHomePage] = useState(true);
    const [showTemplate, setShowTemplate] = useState(false);

    const onFeatureClickHandler = () => {
        console.log('Features clicked!');
        setShowHomePage(false);
        setShowFeaturesPage(true);
        setShowTemplate(false);
    };

    const onHomeClickHandler = () => {
        console.log('Home clicked!');
        console.log('Home:', showHomePage, ' Temp:', showTemplate, ' Feature:', showFeaturesPage);
        if (showFeaturesPage === true) {
            setShowFeaturesPage(false);
        }
        if (showTemplate === true) {
            setShowTemplate(false);
        }
        setShowHomePage(true);
        showTemplate(false);
        setShowFeaturesPage(false);
    }

    const onTemplateClickHandler = () => {
        console.log('Template clicked!');
        setShowHomePage(false);
        setShowFeaturesPage(false);
        setShowTemplate(true);
    }

    return (
        <Fragment>
            <Navbar
                onClickFeatures={onFeatureClickHandler}
                onClickHome={onHomeClickHandler}
                onClickTemplate={onTemplateClickHandler}
                onLogin={props.onLoginClick}
            />
            {showHomePage &&
                <div>
                    <p className="tag-line">Manage your Work and Life<br /> At Once!</p>
                    <p className="second-line" >Manage your Todos on your Finger Tips</p>
                    <button className="btn btn-primary my-2 text-size" type="submit">Lets&nbsp;get&nbsp;Started</button><br /><br /><br /><br />
                    <img className="img-tran" src={todoIcon} width="900px" height="500px" alt="Todo app preview" ></img><br /><br /><br /><br /><br /><br /><br />
                    <h3 className="dividerH" >Achieve it all with just one assistant........<span className="brandd">#Do.It</span> </h3>
                    <hr></hr>
                    <Card />
                    <CardTwo />
                    <hr></hr>
                    <HomeContentFeature /><br /><br /><br />
                </div>}

            {showFeaturesPage && <Features />}
            {showTemplate && <Template />}

            <hr></hr>
            <Footer onFeatureClick={onFeatureClickHandler} onHomeClick={onHomeClickHandler} />
        </Fragment >
    );
}

export default Home;