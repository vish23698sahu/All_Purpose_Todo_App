import { Fragment } from "react";
import templateOne from '../../media/temp-1.png';
import templateTwo from '../../media/temp-2.png';
import templateThree from '../../media/temp-3.png';
import templateFour from '../../media/temp-4.png';
import templateFive from '../../media/temp-5.png';
import templateSix from '../../media/temp-6.png';
import templateSeven from '../../media/temp-7.png';
import templateEight from '../../media/temp-8.png';
import templateNine from '../../media/temp-9.png';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Template.css';
import TemplateCard from "./TemplateCard";
import TemplateCardTwo from "./TemplateCardTwo";

const Template = () => {
    return (
        <Fragment>
            <Navbar />
            <h2 className="first-line" >Explore various Templates<br /> and Work with the one that suits you!</h2>
            <div className="container-ins-1" >
                <div className="items-align" >
                    <TemplateCard
                        imgSrc={templateOne}
                        heading="Personal Project"
                        cont="Start prioritizing your Personal Projects with this Template seemlessly"
                    />
                </div>
                <div className="items-align">
                    <TemplateCard
                        imgSrc={templateTwo}
                        heading="Creative Work"
                        cont=""
                    />
                </div>
                <div className="items-align" >
                    <TemplateCard
                        imgSrc={templateThree}
                        heading="Education"
                        cont=""
                    />
                </div>
            </div>

            <div className="temps-container">
                <div className="oneItem">
                    <h4 className="search-line" >Search Templates</h4>
                    <input />
                    <h4>Categories</h4>
                    <p>All Templates</p>

                    <p>Sales</p>
                    <p>Marketing</p>
                    <p>Designing</p>
                    <p>Development</p>
                    <p>Goals and Plans</p>
                    <p>Blogs and Post</p>
                    <p>Management</p>
                </div>
                <div className="twoItem" >
                    <h3>All Templates</h3>

                    <div className="temp-cont-inner">
                        <div className="items-align-one" >
                            <TemplateCardTwo
                                imgSrc={templateFour}
                                heading="Sales"
                                cont="Track all your pitch and Clients conveniently"
                            />
                        </div>
                        <div className="items-align-one" >
                            <TemplateCardTwo
                                imgSrc={templateFive}
                                heading="Marketing"
                                cont="Highlight your add campaigns and let your ideas flow"
                            />
                        </div>
                    </div>
                    <div className="temp-cont-inner">
                        <div className="items-align-one" >
                            <TemplateCardTwo
                                imgSrc={templateSix}
                                heading="Designing"
                                cont="Highlight your add campaigns and let your ideas flow"
                            />
                        </div>
                        <div className="items-align-one" >
                            <TemplateCardTwo
                                imgSrc={templateSeven}
                                heading="Development"
                                cont="Highlight your add campaigns and let your ideas flow"
                            />
                        </div>
                    </div>

                    <div className="temp-cont-inner">
                        <div className="items-align-one" >
                            <TemplateCardTwo
                                imgSrc={templateEight}
                                heading="Goals"
                                cont="Highlight your add campaigns and let your ideas flow"
                            />
                        </div>
                        <div className="items-align-last" >
                            <TemplateCardTwo
                                imgSrc={templateNine}
                                heading="Blog, Posts"
                                cont="Highlight your add campaigns and let your ideas flow"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </Fragment >
    );
};

export default Template;
