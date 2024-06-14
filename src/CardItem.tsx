// import React from "react";
// import "./assets/Card.css"; // Assuming you have a CSS file for styling
// import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";

// import Sadness from "./assets/sadness.svg";
// import Anger from "./assets/anger.svg";
// import Disgust from "./assets/disgust.svg";
// import Fear from "./assets/fear.svg";
// import Joy from "./assets/joy.svg";

// interface CardProps {
//   emotion: string;
//   numberText: string;

// }

// const Card: React.FC<CardProps> = ({ emotion, numberText}) => {

//   const getIcon = (iconName: string) => {
//     switch (iconName.toLowerCase()) {
//       case "joy":
//         return Joy;
//       case "sadness":
//         return Sadness;
//       case "fear":
//         return Fear;
//       case "anger":
//         return Anger;

//       default:
//         return faHeart; // Default FontAwesome icon
//     }
//   };

//   return (
//     <div className="card">
//       <div className="card-icon">
//         <Icon icon={getIcon(icon)} />
//       </div>
//       <div className="card-body">
//         <h2 className="card-title">{emotion}</h2>
//         <p className="card-description">{numberText}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;
