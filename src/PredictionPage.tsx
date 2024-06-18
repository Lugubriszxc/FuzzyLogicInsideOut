import "./assets/PredictionPage.css";
import "bootstrap/dist/css/bootstrap.css";
import Sadness from "./assets/sadness.svg";
import Anger from "./assets/anger.svg";
import Disgust from "./assets/disgust.svg";
import Fear from "./assets/fear.svg";
import Joy from "./assets/joy.svg";

import AngerFB from "./assets/images/angerfb.png";
import JoyFB from "./assets/images/joyfb.png";
import DisgustFB from "./assets/images/disgustfb.png";
import FearFB from "./assets/images/fearfb.png";
import SadFB from "./assets/images/sadfb.png";


import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "./assets/Card.css";
import { icon } from "@fortawesome/fontawesome-svg-core";

import { useLocation } from "react-router-dom";
import React, { useState ,useEffect} from "react";


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
  { id: 1, title: "Disgust", percentage: 88.3, },
  { id: 2, title: "Fear", percentage: 55,},
  { id: 3, title: "Anger", percentage: 25.5,},
  { id: 4, title: "Sadness", percentage: 25.5,},
  { id: 5, title: "Joy", percentage: 60.3,},
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


const highestValue = Math.max(...emotionsValue.map(emotion => Object.values(emotion)[0]));
const highestValueObject = emotionsValue.find(emotion => Object.values(emotion)[0] === highestValue);
console.log(highestValueObject)

  const rawData = emotionsValue.filter(
    (item) => item !== highestValueObject
  );

  const filteredData: EmotionValue[] = rawData.map((item) => {
    const emotion = Object.keys(item)[0] as keyof typeof item;
    const value = item[emotion];
    return { emotion, value: Number(value) }; // Ensure value is a number
  });



  const emotionText = highestValueObject ? Object.keys(highestValueObject)[0] : '';
  const emotionValue = highestValueObject ? Object.values(highestValueObject)[0] : 0;

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
          You're Sadness. Thoughtful and empathetic, you understand the deeper
          emotions that others might overlook. Your ability to connect on an
          emotional level is a true strength.
        </div>
       
        <div className="text-wrapper-8">
          {emotionValue}%
        </div>
      </div>

      <div className="tsx-cards-column">
        {filteredData.map((item: EmotionValue) => {

          let color , emotionImages;

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
