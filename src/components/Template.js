import { Fragment } from "react";
import templateOne from '../media/temp-1.png';
import templateTwo from '../media/temp-2.png';
import templateThree from '../media/temp-3.png';
import './Template.css';

import TemplateCard from "./TemplateCard";

const Template = () => {
    return (
        <Fragment>
            <div>
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
                        <h4>Search Templates</h4>
                        <input />
                        <h4>Categories</h4>
                        <p>All Templates</p>

                        <p>Sales and Marketting</p>
                        <p>Designing</p>
                        <p>Development</p>
                        <p>Goals and Plans</p>
                        <p>Blogs and Post</p>
                    </div>
                    <div className="twoItem" >
                        <h3>All Templates</h3>
                    </div>
                </div>

            </div>
        </Fragment >
    );
};

export default Template;
