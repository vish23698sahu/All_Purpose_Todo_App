import { Fragment, useState } from "react";
import './Home.css'
import todoIcon from '../media/todoIcon.png';
import Card from "./Card";
import CardTwo from "./CardTwo";
import HomeContentFeature from "./HomeContentFeature";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Features from "./Features";
import Template from "./Template";

const Home = (props) => {
    const [showFeaturesPage, setShowFeaturesPage] = useState(false);
    const [showHomePage, setShowHomePage] = useState(true);
    const [showTemplate, setShowTemplate] = useState(false);

    const onFeatureClickHandler = () => {
        console.log('Features clicked!');
        setShowFeaturesPage(true);
        setShowHomePage(false);
        setShowTemplate(false);
    };

    const onHomeClickHandler = () => {
        console.log('Home clicked!');
        setShowFeaturesPage(false);
        setShowHomePage(true);
    }

    const onTemplateClickHandler = () => {
        console.log('Template clicked!');
        setShowTemplate(true);
        setShowHomePage(false);
        setShowFeaturesPage(false);
    }

    return (
        <Fragment>
            <Navbar
                onClickFeatures={onFeatureClickHandler}
                onClickHome={onHomeClickHandler}
                onClickTemplate={onTemplateClickHandler}
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

            {showFeaturesPage && <Features onClickHome={onHomeClickHandler} />}
            {showTemplate && <Template />}

            <hr></hr>
            <Footer onFeatureClick={onFeatureClickHandler} onHomeClick={onHomeClickHandler} />
        </Fragment >
    );
}

export default Home;