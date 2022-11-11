import { Fragment } from "react";
import './HomeContentFeature.css';
import connnectTeam from '../../media/connectTeam.png';
import customize from '../../media/customize.png';
import Family from '../../media/Family.png';
import productivity from '../../media/productivity.png';
import template from '../../media/tempate.png';
import FeatureCard from "../Feature/FeatureCard";

const HomeContentFeature = () => {
    const contentFeatures = [
        {
            photo: <img className="img-tran" width="150px" height="150px" src={connnectTeam} alt="team" ></img>,
            title: <p className="textTitle">Work with your Team.</p>,
            content: <p>Connect with your work Team. Monitor Team progress closely.</p>,
            linkContent: <p><a>Connect now!</a></p>
        },
        {
            photo: <img className="img-tran" width="150px" height="150px" src={customize} alt="custmize" ></img>,
            title: <p className="textTitle">Customize your Todo App.</p>,
            content: <p>Add relevant filters per your requirement.</p>,
            linkContent: <p><a>Customize now!</a></p>
        },
        {
            photo: <img className="img-tran" width="150px" height="150px" src={Family} alt="family" ></img>,
            title: <p className="textTitle">Don't miss out on Family.</p>,
            content: <p>Complete your Work efficiently and take out Family Time. Share your Calendar.</p>,
            linkContent: <p><a>Keep your Family in Loop!</a></p>
        },
        {
            photo: <img className="img-tran" width="150px" height="150px" src={productivity} alt="productivity" ></img>,
            title: <p className="textTitle">Increase your Productivity.</p>,
            content: <p>Focus on more important Tasks thereby increasing your productivity.</p>,
            linkContent: <p><a>Control your Priority!</a></p>
        },
        {
            photo: <img className="img-tran" width="150px" height="150px" src={template} alt="templates" ></img>,
            title: <p className="textTitle">Crazy Templates.</p>,
            content: <p>Go Crazy with the amount of Customization on top of Templates.</p>,
            linkContent: <p><a>Check out Templates!</a></p>
        }

    ];

    const loadFeatures = contentFeatures.map(function (items) {
        return <FeatureCard photos={items.photo} title2={items.title} parag2={items.content} links2={items.linkContent} />
    });

    return (
        <Fragment>
            <div>
                <p className="content-s">
                    Stay on top of your tasks and chores.<br /> Manage deadlines proactively.
                </p>
                <p className="align-this">
                    Millions of people struggle between managing their Work, Life, Passion, Families, Kids, and the list goes on.<br />
                    Stop the husstle now :)
                </p>
                <div>{loadFeatures}</div>
            </div>
        </Fragment>
    );
};

export default HomeContentFeature;