import React from 'react';
import { Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Project.css'

const Project = (props) => {
    const { img, name, details, key } = props.project;
    return (
        <Col>
            {!props.project ? <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
                :
                <div className="image">
                    <img className="image__img" src={img} alt="website" />
                    <div className="image__overlay image__overlay--primary">
                        <h3 className="title-color fw-bold">{name}</h3>
                        <p className="subTitle-color">
                            {details}
                        </p>
                        <Link className='btn myMenu3 ms-0' to={`/details/${key}`}>Details</Link >
                    </div>
                </div>}
        </Col >
    );
};

export default Project;