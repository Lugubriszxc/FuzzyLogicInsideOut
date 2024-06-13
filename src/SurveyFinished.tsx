import imageNote from './assets/images/noteCheckImg.svg'
import './SurveyFinished.css'
import Header from './Header.tsx'
import { Button, Col, Row } from 'reactstrap';

const SurveyFinished = () => {
    return (
        <>

            <div className='parentContainer'>
                <Row className='wholeContainer'>
                    <Col md="6">
                        <Header />
                    </Col>
                    <Col md="6">
                        <Col className='imageDiv'>
                            <img src={imageNote} alt="Note" />
                        </Col>
                        <Col className='fontSet hoorayText'>
                            Hooray!
                        </Col>
                        <Col className='fontSet testCompleteText'>
                            You've completed the test!
                        </Col>
                        <Col className='fontSet'>
                            <Button className='btnResult'>
                                See Result
                            </Button>
                        </Col>
                    </Col>
                </Row>
            </div>


        </>
    );
}

export default SurveyFinished;
