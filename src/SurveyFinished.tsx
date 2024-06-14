import imageNote from './assets/images/noteCheckImg.svg'
import './SurveyFinished.css'
import Header from './Header.tsx'
import { Button, Col, Row } from 'reactstrap';
import { useLocation } from 'react-router-dom';

interface Question {
    question: string
    answer: string
};


const SurveyFinished = () => {
    // Define the type for a question
    const location = useLocation();
    let questions = [];

    if (location.state) {
        questions = location.state.questions;
        console.log(questions);
    }

    const handleSubmit = async () => {
        try {
            const response = await fetch(
                `http://localhost:5000/api/insideout/predictemotion`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ "answers": questions }),
                }
            );
            if (response.ok) {
                const data = await response.json(); // Extract data from response
                console.log(data);
            } else {
                console.error(`Error ${response.status}`);
            }
        } catch (error) {
            console.error("Error submitting form data:", error);
        }
    };
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
                            <Button className='btnResult' onClick={handleSubmit}>
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


