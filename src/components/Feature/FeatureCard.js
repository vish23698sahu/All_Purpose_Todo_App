import { Fragment } from "react";
import './FeatureCard.css';

const FeatureCard = (props) => {
    return (
        <Fragment>
            <div className="container-card">
                <div className="secondItem" >
                    <div>{props.photos}</div>
                    {props.title2} {props.parag2}
                    <a className="">{props.links2}</a>
                </div>
            </div>
        </Fragment>
    );
};

export default FeatureCard;