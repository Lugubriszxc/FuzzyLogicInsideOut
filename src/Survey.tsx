import React, { useState } from 'react';
import { Container, FormGroup, Label, Input, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Survey.css';

// Define the type for a question
interface Question {
    question: string
    answer: string
};

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
    const [currentIndex, setCurrentIndex] = useState(0); // Add state for the current index

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
        <div>
            <Container className='containerSurvey'>
                <FormGroup className="mb-3">
                    <Label>{questions[currentIndex].question}</Label>
                    <Input
                        type="textarea"
                        value={questions[currentIndex].answer}
                        onChange={(e) => handleAnswerChange(e.target.value)}
                    />
                </FormGroup>
                {questions.map((q, index) => (
                    <div key={index}>
                        <Label>Answer question #{index + 1}: {q.answer}</Label>
                        <br />
                    </div>
                ))}

                <Button onClick={prevQuestion} disabled={currentIndex === 0}>Previous</Button>
                <Button onClick={nextQuestion} disabled={currentIndex === questions.length - 1}>Next</Button>
            </Container>
        </div>
    );
};

export default Survey;
