import connnectTeam from '../../media/connectTeam.png';
import customize from '../../media/customize.png';
import Family from '../../media/Family.png';
import productivity from '../../media/productivity.png';
import template from '../../media/tempate.png';

const ContentFeaturesData = [
    {
        photo: <img className="img-tran" width="150px" src={connnectTeam} alt="team" ></img>,
        title: <p className="textTitle">Work with your Team.</p>,
        content: <p className="home__p" >Connect with your work Team. Monitor Team progress closely.</p>,
        linkContent: <p><button className="feature__btn footer_btn_color">Connect now!</button></p>
    },
    {
        photo: <img className="img-tran" width="150px" src={customize} alt="custmize" ></img>,
        title: <p className="textTitle">Customize your Todo App.</p>,
        content: <p className="home__p">Add relevant filters per your requirement.</p>,
        linkContent: <p><button className="feature__btn footer_btn_color">Customize now!</button></p>
    },
    {
        photo: <img className="img-tran" width="150px" src={Family} alt="family" ></img>,
        title: <p className="textTitle">Don't miss out on Family.</p>,
        content: <p className="home__p">Complete your Work efficiently and take out Family Time. Share your Calendar.</p>,
        linkContent: <p><button className="feature__btn footer_btn_color">Keep your Family in Loop!</button></p>
    },
    {
        photo: <img className="img-tran" width="150px" src={productivity} alt="productivity" ></img>,
        title: <p className="textTitle">Increase your Productivity.</p>,
        content: <p className="home__p">Focus on more important Tasks thereby increasing your productivity.</p>,
        linkContent: <p><button className="feature__btn footer_btn_color">Control your Priority!</button></p>
    },
    {
        photo: <img className="img-tran" width="150px" src={template} alt="templates" ></img>,
        title: <p className="textTitle">Crazy Templates.</p>,
        content: <p className="home__p">Go Crazy with the amount of Customization on top of Templates.</p>,
        linkContent: <p><button className="feature__btn footer_btn_color">Check out Templates!</button></p>
    }
];

export default ContentFeaturesData;
