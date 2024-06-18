import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import './Homepage.css';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleTakeTest = () => {
        // Navigate with slide-out effect
        navigate('/survey', { state: { slideDirection: 'left' } });
    };

    return (
        <div className="page-container">
            <div className="home">
                <Row className="div">
                    <Col md="6">
                        <Header />
                    </Col>
                    <Col md="6" className="blue-container">
                        <p className="text-wrapper-5">Which Inside Out Character Are You?</p>
                        <p className="text-wrapper-6">Take the prediction test to find out!</p>
                        <Button className='btn-take' onClick={handleTakeTest}>Take the test</Button>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default HomePage;
