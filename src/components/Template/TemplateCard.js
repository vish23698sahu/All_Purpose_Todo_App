import { Fragment } from "react";
import './TemplateCard.css';

const TemplateCard = (props) => {
    return (
        <Fragment>
            <div className="temp-card-1">
                <div>
                    <img src={props.imgSrc} width='100px' height='100px' className="rounded-circle imgs" ></img><br /><br />
                </div>
                <div>
                    <h1>{props.heading}</h1><br />
                    <p className="temp-card-line" >{props.cont}</p>
                </div>
            </div>
        </Fragment>
    );
};

export default TemplateCard;