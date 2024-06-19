import "./assets/PredictionPage.css";
// import "bootstrap/dist/css/bootstrap.css";
import Sadness from "./assets/sadness.svg";
import Anger from "./assets/anger.svg";
import Disgust from "./assets/disgust.svg";
import Fear from "./assets/fear.svg";
import Joy from "./assets/joy.svg";

import AngerFB from "./assets/images/png-transparent-inside-out-anger-anger-pixar-emotion-sadness-feeling-inside-out-miscellaneous-textile-fictional-character-removebg-preview.png";
import JoyFB from "./assets/images/png-clipart-pixar-film-information-joy-inside-out-female-character-child-poster-removebg-preview.png";
import DisgustFB from "./assets/images/ba71e95b7e00cd567aebefacbe42ddd5-removebg-preview.png";
import FearFB from "./assets/images/Fear-from-Inside-Out-Standard-render-nr2-inside-out-40129672-723-828.png";
import SadFB from "./assets/images/wew.png";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "./assets/Card.css";
import { icon } from "@fortawesome/fontawesome-svg-core";

import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

interface Emotions {
  Sadness: any;
  Joy: any;
  Fear: any;
  Disgust: any;
  Anger: any;
  [key: string]: any; // This is the index signature
}

interface EmotionValue {
  emotion: string;
  value: number;
}

const emotions: Emotions = {
  Sadness: SadFB,
  Joy: Joy,
  Fear: Fear,
  Disgust: Disgust,
  Anger: Anger,
};

const emotionFullBody: Emotions = {
  Sadness: SadFB,
  Joy: JoyFB,
  Fear: FearFB,
  Disgust: DisgustFB,
  Anger: AngerFB,
};

const data = [
  { id: 1, title: "Disgust", percentage: 88.3 },
  { id: 2, title: "Fear", percentage: 55 },
  { id: 3, title: "Anger", percentage: 25.5 },
  { id: 4, title: "Sadness", percentage: 25.5 },
  { id: 5, title: "Joy", percentage: 60.3 },
];

const PredictionPage = () => {
  const location = useLocation();
  const [emotionsValue, setEmotionsValue] = useState<EmotionValue[]>([]);

  useEffect(() => {
    if (location.state) {
      const results = location.state.result;
      setEmotionsValue(results);
    }
  }, [location.state]);

  const highestValue = Math.max(
    ...emotionsValue.map((emotion) => Object.values(emotion)[0])
  );
  const highestValueObject = emotionsValue.find(
    (emotion) => Object.values(emotion)[0] === highestValue
  );

  const rawData = emotionsValue.filter((item) => item !== highestValueObject);

  const filteredData: EmotionValue[] = rawData.map((item) => {
    const emotion = Object.keys(item)[0] as keyof typeof item;
    const value = item[emotion];
    return { emotion, value: Number(value) }; // Ensure value is a number
  });

  const emotionText = highestValueObject
    ? Object.keys(highestValueObject)[0]
    : "";
  const emotionValue = highestValueObject
    ? Object.values(highestValueObject)[0]
    : 0;

  const emotionImage = emotionFullBody[emotionText];

  return (
    <div className="Prediction">
      <div className="overlap-2">
        <div className="text-wrapper-3">Emotion Prediction Test</div>
        <div className="text-wrapper-4">Inside Out</div>
      </div>
      <div className="overlap-3">
        <div className="text-wrapper-5">Prediction Results</div>
      </div>

      <div className="overlap-4">
        {emotionImage && (
          <img
            src={emotionImage}
            alt={`${emotionText} logo`}
            className="mt-4 emotionLogo"
            style={{ height: "200px", width: "190px" }}
          />
        )}

        <div className="text-wrapper-6 ">{emotionText}</div>

        <div className="text-wrapper-7 ">
          {emotionText === "Joy" ? (
            <>
              ENFP (Extraverted, Intuitive, Feeling, Perceiving) ESFP
              (Extraverted, Sensing, Feeling, Perceiving) These types are often
              characterized by their enthusiasm, positivity, and tendency to
              seek out new experiences, which aligns with the emotion of Joy.
            </>
          ) : emotionText === "Sadness" ? (
            <>
              INFP (Introverted, Intuitive, Feeling, Perceiving) <br />
              INFJ (Introverted, Intuitive, Feeling, Judging) <br /> <br />
              These types are known for their deep emotional capacity,
              introspection, and empathy, making them more closely associated
              with the emotion of Sadness.
            </>
          ) : emotionText === "Anger" ? (
            <>
              ENTJ (Extraverted, Intuitive, Thinking, Judging) <br />
              ESTJ (Extraverted, Sensing, Thinking, Judging) <br /> <br />
              These types can be assertive, decisive, and sometimes
              confrontational, characteristics that align with the emotion of
              Anger.
            </>
          ) : emotionText === "Fear" ? (
            <>
              ISFJ (Introverted, Sensing, Feeling, Judging) <br />
              ISTJ (Introverted, Sensing, Thinking, Judging) <br /> <br />
              These types are often cautious, detail-oriented, and
              security-seeking, which can be related to the emotion of Fear.
            </>
          ) : (
            <>
              INTJ (Introverted, Intuitive, Thinking, Judging) <br />
              ISTP (Introverted, Sensing, Thinking, Perceiving) <br /> <br />
              These types can be analytical and have a keen sense of what is
              logically consistent or inconsistent, often leading to a sense of
              Disgust when things do not align with their standards or
              expectations.
            </>
          )}
        </div>

        <div className="text-wrapper-8">{emotionValue}%</div>
      </div>

      <div className="tsx-cards-column">
        {filteredData.map((item: EmotionValue) => {
          let color, emotionImages;

          switch (item.emotion) {
            case "Joy":
              color = "#E8DC69";
              emotionImages = emotions["Joy"];
              break;
            case "Fear":
              color = "#C08CE8";
              emotionImages = emotions["Fear"];
              break;
            case "Sadness":
              color = "#0095cc";
              emotionImages = emotions["Sadness"];
              break;
            case "Anger":
              color = "#E39DA5";
              emotionImages = emotions["Anger"];
              break;
            case "Disgust":
              color = "#7BE599";
              emotionImages = emotions["Disgust"];
              break;
            default:
              color = "white";
          }

          return (
            <div
              className="tsx-card"
              key={item.emotion}
              style={{ backgroundColor: color }}
            >
              <div className="image-container">
                <img src={emotionImages} alt="TSX Icon" className="image" />
              </div>
              <div className="card-content">
                <div className="title">{item.emotion}</div>
                <div className="percentage">{item.value}%</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PredictionPage;
