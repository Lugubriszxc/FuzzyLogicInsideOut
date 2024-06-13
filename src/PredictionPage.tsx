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
            <div className="tsx-card">
                <div className="circle-icon">
                    <img src={Anger} alt="TSX Icon" />
                </div>
                <div className="card-content">
                    <div className="title-percentage-row">
                        <p className="title">Joy</p>
                        <p className="percentage">33.3%</p>
                    </div>
                </div>
            </div>

            <div className="tsx-card">
                <div className="circle-icon">
                    <img src={Anger} alt="TSX Icon" />
                </div>
                <div className="card-content">
                    <div className="title-percentage-row">
                        <p className="title">Joy</p>
                        <p className="percentage">33.3%</p>
                    </div>
                </div>
            </div>

            <div className="tsx-card">
                <div className="circle-icon">
                    <img src={Anger} alt="TSX Icon" />
                </div>
                <div className="card-content">
                    <div className="title-percentage-row">
                        <p className="title">Joy</p>
                        <p className="percentage">33.3%</p>
                    </div>
                </div>
            </div>


            <div className="tsx-card">
                <div className="circle-icon">
                    <img src={Anger} alt="TSX Icon" />
                </div>
                <div className="card-content">
                    <div className="title-percentage-row">
                        <p className="title">Joy</p>
                        <p className="percentage">33.3%</p>
                    </div>
                </div>
            </div>
        </div>
    


      
    </div>
  );
};

export default PredictionPage;
