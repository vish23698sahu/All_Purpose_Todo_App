import { Fragment } from "react";
import './HomeFeatureCard.css';

const HomeFeatureCard = (props) => {
    return (
        <Fragment>
            <div className="container-card">
                <div className="secondItem" >
                    <div>{props.photos}</div>
                    {props.title2} {props.parag2}
                    <button className="feature__btn">{props.links2}</button>
                </div>
            </div>
        </Fragment>
    );
};

export default HomeFeatureCard;