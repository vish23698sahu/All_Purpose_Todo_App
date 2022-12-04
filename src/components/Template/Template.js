import { Fragment } from "react";
import templateFour from '../../media/temp-4.png';
import templateFive from '../../media/temp-5.png';
import templateSix from '../../media/temp-6.png';
import templateSeven from '../../media/temp-7.png';
import templateEight from '../../media/temp-8.png';
import templateNine from '../../media/temp-9.png';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import TemplateCard from "./TemplateCard";
import TemplateCardTwo from "./TemplateCardTwo";
import TemplateData from "./TemplateData";
import './Template.css';
import TempCarousel from "./TempCarousel/TempCarousel";

const Template = () => {
    return (
        <Fragment>
            <Navbar />
            <div>
                <h2 className="first-line" >Explore various Templates<br /> and Work with the one that suits you!</h2><br />

                <div className="carousel-mobile">
                    <TempCarousel />
                </div>

                <div className="container-ins-1" >
                    {
                        TemplateData.map((value, index) => {
                            return (
                                <div className="items-align" >
                                    <TemplateCard key={index} imgSrc={value.imgSrc} heading={value.heading} cont={value.cont} />
                                </div>
                            )
                        })
                    }
                </div>

                <div className="temps-container">
                    <div className="oneItem">
                        <h4 className="search-line" >Search Templates</h4>
                        <input />
                        <h4>Categories</h4>
                        <p>All Templates</p>

                        <p className="temp__link">Sales</p>
                        <p className="temp__link">Marketing</p>
                        <p className="temp__link">Designing</p>
                        <p className="temp__link">Development</p>
                        <p className="temp__link">Goals and Plans</p>
                        <p className="temp__link">Blogs and Post</p>
                        <p className="temp__link">Management</p>
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
            </div>
            <Footer />
        </Fragment >
    );
};

export default Template;
