import React, { useState } from 'react';
import { Container, FormGroup, Label, Input, Button, Card, CardBody, CardFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'; // Importing Header component

// Define the type for a question
interface Question {
    question: string;
    answer: string;
}

// Initial questions
const initialQuestions: Question[] = [
    { question: 'How are you feeling today?', answer: '' },
    { question: 'What is something that made you happy recently?', answer: '' },
    { question: 'Can you tell me about a time when you felt sad or upset?', answer: '' },
    { question: 'What is something that worries you or causes you stress?', answer: '' },
    { question: 'How do you usually react when you’re angry?', answer: '' },
    { question: 'What is something that you’re looking forward to?', answer: '' },
    { question: 'Can you describe a situation where you felt very proud of yourself?', answer: '' },
    { question: 'What is something that you’re grateful for?', answer: '' },
    { question: 'How do you cope when you’re feeling down?', answer: '' },
    { question: 'What is something that excites you?', answer: '' },
    // ... add more questions here
];

const Survey: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>(initialQuestions);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [backgroundColor, setBackgroundColor] = useState<string>(''); // State for background color

    const handleAnswerChange = (answer: string) => {
        const newQuestions = [...questions];
        newQuestions[currentIndex].answer = answer;
        setQuestions(newQuestions);
    };

    const changeBackgroundColor = () => {
        const colors = ['#f0f0f0', '#e6f7ff', '#fff2e6', '#f5f5f5']; // Example background colors
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBackgroundColor(randomColor);
    };

    const nextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            changeBackgroundColor(); // Change background color dynamically
        }
    };

    const prevQuestion = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            changeBackgroundColor(); // Change background color dynamically
        }
    };

    return (
        <div style={{ backgroundColor, minHeight: '100vh' }}> {/* Apply dynamic background color */}
            <Header /> {/* Include the Header component */}
            <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
                <div style={{ maxWidth: '800px', width: '100%' }}>
                    <h5 className="mb-3 text-center">{questions[currentIndex].question}</h5> {/* Question title outside of Card */}
                    <Card className="shadow-sm p-3 mb-5 bg-body rounded">
                        <CardBody>
                            <FormGroup>
                                <Input
                                    type="textarea"
                                    value={questions[currentIndex].answer}
                                    onChange={(e) => handleAnswerChange(e.target.value)}
                                    className="form-control"
                                    rows={5}
                                />
                            </FormGroup>
                        </CardBody>
                        <CardFooter className="d-flex justify-content-between">
                            <Button onClick={prevQuestion} disabled={currentIndex === 0} className="btn btn-secondary">Previous</Button>
                            <Button onClick={nextQuestion} disabled={currentIndex === questions.length - 1} className="btn btn-success">Next</Button>
                        </CardFooter>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default Survey;
