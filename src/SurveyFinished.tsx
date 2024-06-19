import imageNote from "./assets/images/noteCheckImg.svg";
import "./SurveyFinished.css";
import Header from "./Header.tsx";
import { Button, Col, Row } from "reactstrap";
import { useLocation, Navigate } from "react-router-dom";
import React, { useState } from "react";

interface Question {
  question: string;
  answer: string;
}

interface EmotionValue {
  emotion: string;
  value: number;
}

const SurveyFinished = () => {
  const [shouldRedirectToPage, setShouldRedirectToPage] = useState(false);
  const [emotionsValue, setEmotionsValue] = useState<EmotionValue[]>([]); // State to store emotions values

  const location = useLocation();
  let questions: Question[] = []; // Define the type for questions array

  if (location.state) {
    questions = location.state.questions as Question[]; // Cast to Question[] type
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
          body: JSON.stringify({ answers: questions }),
        }
      );
      if (response.ok) {
        const data: EmotionValue[] = await response.json(); // Extract data from response and cast to EmotionValue[]
        console.log(data);
        setEmotionsValue(data); // Update state with the fetched emotions values
        setShouldRedirectToPage(true);
        
      } else {
        console.error(`Error ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <>
      <div className="parentContainer">
        <Row className="wholeContainer">
          <Row>
            <Header />
          </Row>
          <Col md="6 w-100">
            <Col className="imageDiv">
              <img src={imageNote} alt="Note" />
            </Col>
            <Row className="fontSet hoorayText text-center">
              <p>Hooray!</p>
            </Row>
            <Row className="fontSet testCompleteText text-center">
              <p>You've completed the test!</p>
            </Row>
            <Col className="fontSet">
              <Button className="btnResult" onClick={handleSubmit}>
                See Result
              </Button>

              {shouldRedirectToPage && (
                <Navigate to="/PredictionPage" state={{ result: emotionsValue }} />
              )}
            </Col>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SurveyFinished;
