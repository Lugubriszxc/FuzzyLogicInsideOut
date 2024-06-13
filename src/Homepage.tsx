import { Button, Col, Row } from 'reactstrap';
import './Homepage.css';
import Header from './Header';

const HomePage = () => {
    return (<>
        <div className="home">
            <Row className="div">
                <Col md="6">
                    <Header />
                </Col>
                <Col md="6" className="blue-container">
                    <p className="text-wrapper-5">Which Inside Out Character Are You?</p>
                    <p className="text-wrapper-6">Take the prediction test to find out!</p>
                    <Button className='btn-take'>Take the test</Button>
                </Col>
            </Row>
        </div>
    </>);
}

export default HomePage;