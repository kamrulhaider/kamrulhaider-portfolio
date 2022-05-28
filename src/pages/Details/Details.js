import React from 'react';
import { useParams } from 'react-router';
import './Details.css';

const Details = () => {
    // data 
    const totalData = [
        {
            "key": 101,
            "name": "Aurna Watch",
            "details": "It is a niche website project of the watch. Here registered users can order watches and manage their orders.",
            "details2": "Established Admin and User-based separate dashboard. An admin can manage all the user's orders also can add or remove a product.",
            "details3": "Use of Firebase email-password login system. A new visitor needs to register to place an order.",
            "details4": "ReactJs, React-bootstrap, Firebase, React Router.",
            "img": "https://i.ibb.co/TtmJ956/Aurna-Watch-1-1.png",
            "client": "https://github.com/kamrulhaider/aurna-watch-client-side",
            "server": "https://github.com/kamrulhaider/aurna-watch-server-side",
            "live": "https://aurna-watch.web.app/"
        },
        {
            "key": 102,
            "name": "Chiropractic Care",
            "details": "It is a Healthcare Service website where users can see the details of a service as well as book them.",
            "details2": "Implementation of reacts private routing system. A user who is not logged in cannot book any service.",
            "details3": "Use of Firebase email-password login system as well as google login in a single click.",
            "details4": "ReactJs, React-bootstrap, Firebase, React Router.",
            "img": "https://i.ibb.co/RNkZNm0/Chiropractic-Care-1.png",
            "client": "https://github.com/kamrulhaider/chiropractic-care",
            "live": "https://kamrul-s-chiropractic-care.web.app/"
        },
        {
            "key": 103,
            "name": "Atlantic Cliffs",
            "details": "It is a delivery service website programmed with order add and remove functionality.",
            "details2": "Established Google authentication system with Firebase. Signed user will see their name on the header.",
            "details3": "Established private routing using react routerv5. Without login the accessing area of a visitor is limited.",
            "details4": "ReactJs, React Router, Firebase, Heroku, MongoDB.",
            "img": "https://i.ibb.co/9tT3dvg/atlantic-cliff.png",
            "client": "https://github.com/kamrulhaider/atlantic-cliffs",
            "server": "https://github.com/kamrulhaider/atlantic-cliffs-server",
            "live": "https://altantic-cliffs.web.app/"
        },
        {
            "key": 104,
            "name": "Pacific Cliff",
            "details": "It is a delivery service website programmed with only html and css.",
            "details2": "It is design of a complete website with the implementation of admin panel.",
            "details3": "Different user can see the different admin panel based on their role on the site.",
            "details4": "HTML5, CSS3, Bootstrap, JavaScript",
            "img": "https://i.ibb.co/XySFvDw/Pacific-Cliff-1.jpg",
            "client": "https://github.com/kamrulhaider/delivery-website",
            "live": "https://kamrulhaider.github.io/delivery-website/"
        },
        {
            "key": 105,
            "name": "Donate to UN Agencies",
            "details": "UN Donate is a donation based website. Here you can add the agencies to the list for donation.",
            "details2": "It is design of add to cart website with the implementation of react router",
            "details3": "Here your donation that was made will show in the side bar.",
            "details4": "HTML5, CSS3, Bootstrap, JavaScript",
            "img": "https://i.ibb.co/GPLRjZw/screencapture-un-donate-kh-netlify-app-2022-02-07-00-02-42-1.png",
            "client": "https://github.com/kamrulhaider/un-agencies",
            "live": "https://un-donate-kh.netlify.app/"
        },
        {
            "key": 106,
            "name": "University of any age",
            "details": "University of any age is a concept website where anyone can admit and learn. Age is not a factor.",
            "details2": "It is design of a complete website with the implementation of reactJS",
            "details3": "Here I have used react router for navigation.",
            "details4": "HTML5, CSS3, Bootstrap, JavaScript",
            "img": "https://i.ibb.co/QfDWCLh/screencapture-university-of-anyage-netlify-app-2022-02-07-00-04-32-1.png",
            "client": "https://github.com/kamrulhaider/university-of-any-age",
            "live": "https://university-of-anyage.netlify.app/"
        }
    ];

    const { projectId } = useParams();
    const singleItem = totalData.find(element => element.key === parseInt(projectId));

    const bgImg = {
        backgroundImage: `url('${singleItem.img}')`,
        height: '500px',
    }
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="screenshot" style={bgImg}></div>
                    <div className="mbl-img-div">
                        <img src={singleItem.img} alt="" className="img-fluid mbl-img rounded-3" />
                    </div>
                </div>
                <div className="col-md-6">
                    <h1 className="fw-bold my-3 title-color">{singleItem.name}</h1>
                    <hr />
                    <h5 className="fw-bold subTitle-color">Project Details</h5>
                    <p className="fs-5 subTitle-color"><i className="fas fa-chevron-circle-right"></i> {singleItem.details}</p>
                    <p className="fs-5 subTitle-color"><i className="fas fa-chevron-circle-right"></i> {singleItem.details2}</p>
                    <p className="fs-5 subTitle-color"><i className="fas fa-chevron-circle-right"></i> {singleItem.details3}</p>
                    <p className="fs-5 subTitle-color"><span className="fw-bold">Technology:</span> {singleItem.details4}</p>
                    {singleItem.server ? <div>
                        <a href={singleItem.client} className="btn myMenu2" rel="noreferrer" target='_blank'>Client Side</a>
                        <a href={singleItem.server} className="btn myMenu2 mx-2" rel="noreferrer" target='_blank'>Server Side</a>
                        <a href={singleItem.live} className="btn myMenu2" rel="noreferrer" target='_blank'>Live Site</a>
                    </div>
                        :
                        <div>
                            <a href={singleItem.client} className="btn myMenu2" rel="noreferrer" target='_blank'>Client Side</a>
                            <a href={singleItem.live} className="btn myMenu2 ms-2" rel="noreferrer" target='_blank'>Live Site</a>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Details;