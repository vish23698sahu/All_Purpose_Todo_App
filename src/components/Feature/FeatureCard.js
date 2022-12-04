import React, { Fragment } from 'react';
import './FeatureCard.css';

const FeatureCard = (props) => {
    return (
        <Fragment>
            <div className="items" >
                <p className="title-one" >{props.title}<br /><span className="text-line">{props.text}</span></p>
                <img src={props.image} className="img-tran" width="350px" alt="feature" ></img>
            </div>
        </Fragment>
    )
}

export default FeatureCard