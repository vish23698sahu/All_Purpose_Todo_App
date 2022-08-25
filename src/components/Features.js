import { Fragment } from "react";
import featureOne from '../media/feature-1.png';
import featureTwo from '../media/feature-productivity-2.png';
import featureThree from '../media/feature-document-3.png';
import featureFour from '../media/feature-4.png';
import './Features.css';

const Features = () => {
    return (
        <Fragment>
            <div className="feature-container" >
                <p className="tag-lines">From Saturated to All Sorted!</p>
                <p className="second-line">Explore</p>
                <img src={featureOne} className="img-tran" width="750px" height="450px" ></img>

                <div className="container-new" >
                    <div className="items-1" >
                        <p className="one" >Productivity<br /><span className="item1-line">Analyze your Productivity daily,<br /> weekly and monthly.</span></p>
                        <img src={featureTwo} className="img-tran" width="350px" height="450px" ></img>
                    </div>
                    <div className="items-2" >
                        <p className="one" >Collate your Team Documents<br />
                            <span className="item1-line" >Have a specified place<br /> for all your Team documents.</span>
                        </p>
                        <img src={featureThree} className="img-tran" width="600px" height="400px" ></img>
                    </div>
                    <div className="items-3" >
                        <p className="one" >Delegate your Tasks with<br /> Team or co-workers<br />
                            <span className="item1-line" >Take out more time<br /> for work that really needs your time.</span>
                        </p>
                        <img src={featureFour} className="img-tran" width="600px" height="400px"></img>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Features;