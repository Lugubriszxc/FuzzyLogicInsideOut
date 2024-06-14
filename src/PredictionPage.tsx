import "./assets/PredictionPage.css";
import "bootstrap/dist/css/bootstrap.css";
import Sadness from "./assets/sadness.svg";
import Anger from "./assets/anger.svg";
import Disgust from "./assets/disgust.svg";
import Fear from "./assets/fear.svg";
import Joy from "./assets/joy.svg";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "./assets/Card.css";

const emotions = {
  Sadness: Sadness,
  Joy: Joy,
  Fear: Fear,
  Disgust: Disgust,
  Anger: Anger,
};

const data = [
  { id: 1, title: "Joy", percentage: "33.3%", icon: Joy }, // Replace Anger with your actual icon import
  { id: 2, title: "Fear", percentage: "50%", icon: Fear }, // Replace Anger with your actual icon import
  { id: 3, title: "Anger", percentage: "25.5%", icon: Anger },
  { id: 5, title: "Sadness", percentage: "25.5%", icon: Disgust },
];

const PredictionPage = () => {
  const emotionText = "Joy"; // This would be dynamically set based on your logic
  const emotionImage = emotions[emotionText];

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
        <div className="text-wrapper-8">64.7%</div>
      </div>

      <div className="tsx-cards-column">
        {data.map((item) => (
          <div className="tsx-card" key={item.id}>
            <div className="image-container">
              <img src={item.icon} alt="TSX Icon" className="image" />
            </div>
            <div className="card-content">
             <div className="title">{item.title}</div>
             <div className="percentage">{item.percentage}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PredictionPage;
