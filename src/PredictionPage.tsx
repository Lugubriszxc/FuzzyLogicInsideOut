import "./assets/PredictionPage.css";
import "bootstrap/dist/css/bootstrap.css";
import Sadness from "./assets/sadness.svg";
import Anger from "./assets/anger.svg";
import Disgust from "./assets/disgust.svg";
import Fear from "./assets/fear.svg";
import Joy from "./assets/joy.svg";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "./assets/Card.css";
import { icon } from "@fortawesome/fontawesome-svg-core";

interface Emotions {
  Sadness: any;
  Joy: any;
  Fear: any;
  Disgust: any;
  Anger: any;
  [key: string]: any; // This is the index signature
}

const emotions: Emotions = {
  Sadness: Sadness,
  Joy: Joy,
  Fear: Fear,
  Disgust: Disgust,
  Anger: Anger,
};

const emotionFullBody: Emotions = {
  Sadness: Sadness,
  Joy: Joy,
  Fear: Fear,
  Disgust: Disgust,
  Anger: Anger,
};

const data = [
  { id: 1, title: "Disgust", percentage: 45.3, },
  { id: 2, title: "Fear", percentage: 55,},
  { id: 3, title: "Anger", percentage: 25.5,},
  { id: 4, title: "Sadness", percentage: 25.5,},
  { id: 5, title: "Joy", percentage: 60.3,},
];

const PredictionPage = () => {
  const highestPercentageItem = data.reduce((prev, current) =>
    prev.percentage > current.percentage ? prev : current
  );

  const filteredData = data.filter(
    (item) => item.percentage !== highestPercentageItem.percentage
  );

  const emotionText = highestPercentageItem.title;

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

        <div className="text-wrapper-6 ">{highestPercentageItem.title}</div>
        <div className="text-wrapper-7 ">
          You're Sadness. Thoughtful and empathetic, you understand the deeper
          emotions that others might overlook. Your ability to connect on an
          emotional level is a true strength.
        </div>
        <div className="text-wrapper-8">
          {highestPercentageItem.percentage}%
        </div>
      </div>

      <div className="tsx-cards-column">
        {filteredData.map((item) => {
          let color , emotionImages;

          switch (item.title) {
            case "Joy":
              color = "#E8DC69";
              emotionImages = emotions["Joy"];
              break;
            case "Fear":
              color = "#C08CE8";
              emotionImages = emotions["Fear"];
              break;
            case "Sadness":
              color = "white";
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
              color = "white"; // default color if none of the conditions match
          }



          return (
            <div
              className="tsx-card"
              key={item.id}
              style={{ backgroundColor: color }}
            >
              <div className="image-container">
                <img src={emotionImages} alt="TSX Icon" className="image" />
              </div>
              <div className="card-content">
                <div className="title">{item.title}</div>
                <div className="percentage">{item.percentage}%</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PredictionPage;
