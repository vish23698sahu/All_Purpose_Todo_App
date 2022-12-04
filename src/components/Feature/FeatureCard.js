import React, { Fragment } from 'react';
import './FeatureCard.css';

const FeatureCard = (props) => {
    return (
        <Fragment>
            <br />
            <div className="items" >
                <div className='text-feature'><p className="title-one" >{props.title}<br /><span className="text-line">{props.text}</span></p></div>
                <img src={props.image} className="img-tran img-feature" width="350px" alt="feature" ></img>
            </div>
            <br />
        </Fragment>
    )
}

export default FeatureCard