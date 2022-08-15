import { Fragment } from "react";
import categoriseIcon from '../media/todo-category.png';
import './CardTwo.css';

const CardTwo = () => {
    return (
        <Fragment>
            <div className="container" >
                <div className="item-two" >
                    <img className="img-tran" src={categoriseIcon} width="600px" height="400px" ></img>
                </div>
                <div className="item-one" >
                    <p className="para-1">Draw clear line between your Personal and Professional Life.<br />Filter your Todos and keep it up tight.</p>
                    <p>Make your calendar precise and complete<br />Helps you focus on most important things and get them done on time.</p>
                </div>
            </div>
        </Fragment>
    );
};

export default CardTwo;