import { Fragment } from "react";
import featureOne from '../../media/feature-1.png';
import FeatureData from "./FeatureData";
import FeatureCard from "./FeatureCard";
import './Features.css';

const Features = () => {
    return (
        <Fragment>
            <div className="feature-container" >
                <p className="tag-lines">From Saturated to All Sorted!</p>
                <p className="second-line">Explore</p>
                <img src={featureOne} className="img-tran" width="750px" height="450px" alt="feature" ></img>

                <div className="container-new" >
                    {
                        FeatureData.map((val, index) => {
                            return <FeatureCard key={index} title={val.title} text={val.text} image={val.img} />
                        })
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default Features;