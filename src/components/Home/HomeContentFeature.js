import { Fragment } from "react";
import './HomeContentFeature.css';
import HomeFeatureCard from "./HomeFeatureCard";
import ContentFeaturesData from "./ContentFeaturesData";

const HomeContentFeature = () => {
    const loadFeatures = ContentFeaturesData.map(function (items) {
        return <HomeFeatureCard photos={items.photo} title2={items.title} parag2={items.content} links2={items.linkContent} />
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