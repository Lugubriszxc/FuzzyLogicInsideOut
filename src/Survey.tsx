import React, { useState, useEffect } from 'react';
import { Container, FormGroup, Input, Button, Card, CardBody, CardFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'; // Importing Header component
import image1 from './assets/images/Fear-from-Inside-Out-Standard-render-nr2-inside-out-40129672-723-828.png';
import image3 from './assets/images/png-clipart-pixar-film-information-joy-inside-out-female-character-child-poster-removebg-preview.png';
import image4 from './assets/images/ba71e95b7e00cd567aebefacbe42ddd5-removebg-preview.png';
import image5 from './assets/images/png-transparent-inside-out-anger-anger-pixar-emotion-sadness-feeling-inside-out-miscellaneous-textile-fictional-character-removebg-preview.png';
import image6 from './assets/images/wew.png';
import angerImage from './assets/images/png-transparent-inside-out-anger-anger-pixar-emotion-sadness-feeling-inside-out-miscellaneous-textile-fictional-character-removebg-preview.png'; // Update with your image path
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert2

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

// Array of imported images
const imageUrls = [
    image1,
    image3,
    image4,
    image5,
    image6,
    // ... add more imported images here
];

// Function to shuffle array
const shuffleArray = (array: string[]): string[] => {
    return array
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
};

const Survey: React.FC = () => {
    const [questions, setQuestions] = useState<Question[]>(initialQuestions);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [backgroundColor, setBackgroundColor] = useState<string>(''); // State for background color
    const [shuffledImages, setShuffledImages] = useState<string[]>([]); // State for shuffled images
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        // Shuffle images on component mount
        setShuffledImages(shuffleArray(imageUrls));
    }, []);

    const handleAnswerChange = (answer: string) => {
        const newQuestions = [...questions];
        newQuestions[currentIndex].answer = answer;
        setQuestions(newQuestions);
    };

    const changeBackgroundColor = () => {
        const colors = ['#FAD693', '#82C293', '#4B93FF', '#E60000', '#655C9E']; // Example background colors
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBackgroundColor(randomColor);
    };

    const nextQuestion = () => {
        if (currentIndex === initialQuestions.length - 1) {
            const hasEmptyAnswer = questions.some((q) => q.answer.trim() === '');

            if (!hasEmptyAnswer) {
                setShouldRedirect(true);
            } else {
                Swal.fire({
                    title: 'Incomplete Form',
                    text: 'Please fill all the questions with answers before proceeding.',
              
                    confirmButtonText: 'OK',
                    imageUrl: angerImage,
                    imageWidth: 150,
                    imageHeight: 150,
                    imageAlt: 'Anger',
                    background: '#ffcccb', // Light red background
                    confirmButtonColor: '#FF0000' // Red confirm button
                });
            }
        } else {
            setCurrentIndex(currentIndex + 1);
            changeBackgroundColor();
        }
    };

    const prevQuestion = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            changeBackgroundColor(); // Change background color dynamically
        }
    };

    return (
        <div style={{ minHeight: '100vh' }}>
            <Header /> {/* Include the Header component */}
            <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
                <div style={{ maxWidth: '800px', width: '100%' }}>
                    <h5 className="mb-3 text-center" style={{ fontSize: '35px' }}>
                        {questions[currentIndex].question}
                    </h5>
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <div style={{ position: 'relative', flex: '0 0 200px', textAlign: 'center' }}>
                            <img
                                src={shuffledImages[currentIndex % shuffledImages.length]}
                                alt={`Question ${currentIndex + 1}`}
                                style={{ maxWidth: '100%', maxHeight: '300px', marginLeft: '-360px', position: 'absolute', bottom: -239 }}
                            />
                        </div>
                    </div>
                    <Card className="shadow-sm p-3 mb-5 bg-body rounded d-flex">
                        <CardBody className="d-flex justify-content-between">
                            <div style={{ flex: 1 }}>
                                <FormGroup>
                                    <Input
                                        type="textarea"
                                        value={questions[currentIndex].answer}
                                        onChange={(e) => handleAnswerChange(e.target.value)}
                                        className="form-control"
                                        rows={5}
                                    />
                                </FormGroup>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex justify-content-between">
                            <Button onClick={prevQuestion} disabled={currentIndex === 0} className="btn btn-secondary">Previous</Button>
                            <Button onClick={nextQuestion}>{currentIndex === questions.length - 1 ? "Confirm" : "Next"}</Button>
                            {shouldRedirect && <Navigate to="/SurveyFinished" state={{ questions: initialQuestions }} />}
                        </CardFooter>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default Survey;
