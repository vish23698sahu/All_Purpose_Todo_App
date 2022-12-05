import { Fragment } from "react";
import './Home.css'
import todoIcon from '../../media/todoIcon.png';
import Card from "./Card";
import CardTwo from "../Home/CardTwo";
import HomeContentFeature from "./HomeContentFeature";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Fragment>
            <div>
                <p className="tag-line">Manage your Work and Life<br /> At Once!</p>
                <p className="second-line" >Manage your Todos on your Finger Tips</p>
                <Link className="btn btn-primary my-2 text-size" to='/login'>Lets get Started</Link><br /><br /><br /><br />
                {/* <button></button> */}
                <img className="img-tran" src={todoIcon} width="900px" alt="Todo app preview" ></img><br /><br /><br /><br /><br /><br /><br />
                <h3 className="dividerH" >Achieve it all with just one assistant........<span className="brandd">#Do.It</span> </h3>
                <hr></hr>
                <Card />
                <CardTwo />
                <hr></hr>
                <HomeContentFeature /><br /><br /><br />
            </div>
        </Fragment >
    );
}

export default Home;