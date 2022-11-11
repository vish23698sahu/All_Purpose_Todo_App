import { Fragment } from "react";
import './Card.css';
import calendarIcon from '../../media/todo-calendar.png';

const Card = () => {
    return (
        <Fragment>
            <div className="container" >
                <div className="item-1" >
                    <p className="para-1">Add your tasks on Calendar.<br /> Categorise your tasks.<br /> Add reminders and more.</p>
                    <p>Make your calendar convenient.<br /> Add birthdays and recurring reminders for your Todos.</p>
                </div>
                <div className="item-2" >
                    <img className="img-tran" src={calendarIcon} width="600px" height="400px" alt="calendar" ></img>
                </div>
            </div>
        </Fragment>
    );
};

export default Card;