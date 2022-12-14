import { Fragment } from "react";
import './TemplateCardTwo.css';

const TemplateCardTwo = (props) => {
    return (
        <Fragment>
            <div className="temp-card-2">
                <div className="cardItemOne" >
                    <img src={props.imgSrc} className="rounded-circle imgs" height="90px" alt="template" ></img>
                </div>
                <div className="cardItemTwo">
                    <h1>{props.heading}</h1>
                    <p className="temp-card-line" >{props.cont}</p>
                </div>
            </div>
        </Fragment>
    );
};

export default TemplateCardTwo;
