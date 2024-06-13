import React, { useState } from 'react';
import { Container, FormGroup, Label, Input, Button, Card, CardBody, CardHeader } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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

    const handleAnswerChange = (answer: string) => {
        const newQuestions = [...questions];
        newQuestions[currentIndex].answer = answer;
        setQuestions(newQuestions);
    };

    const nextQuestion = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevQuestion = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <Container fluid className="vh-100">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-md-8">
                    <Card className="text-center">
                        <CardHeader className="bg-primary text-white">
                            <h5>{questions[currentIndex].question}</h5>
                        </CardHeader>
                        <CardBody>
                            <FormGroup>
                                <Input
                                    type="textarea"
                                    value={questions[currentIndex].answer}
                                    onChange={(e) => handleAnswerChange(e.target.value)}
                                />
                            </FormGroup>
                            <Button onClick={prevQuestion} disabled={currentIndex === 0} className="btn btn-secondary me-2">Previous</Button>
                            <Button onClick={nextQuestion} disabled={currentIndex === questions.length - 1} className="btn btn-success">Next</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </Container>
    );
};

export default Survey;
