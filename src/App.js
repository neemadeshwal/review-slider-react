import "./styles.css";
import Content from "./Content";
import { useState } from "react";
import React from "react";
import ReviewData from "./data";

export default function App() {
  const [index, setIndex] = useState(checkIndex(0));

  function checkIndex(index) {
    if (index > ReviewData.length - 1) {
      return 0;
    }
    if (index < 0) {
      return ReviewData.length - 1;
    }
    return index;
  }

  const rightbuttonClick = () => {
    setIndex((prevVal) => {
      let newIndex = prevVal + 1;
      return checkIndex(newIndex);
    });
  };
  function leftbuttonClick() {
    setIndex((prevVal) => {
      let newIndex = prevVal - 1;
      return checkIndex(newIndex);
    });
  }
  function randomButtonClick() {
    let random = Math.floor(Math.random() * ReviewData.length);
    if (random === index) {
      return (random = index + 1);
    }
    setIndex(random);
  }
  console.log(index);

  return (
    <div className="item-container">
      <Content
        profile={ReviewData[index]}
        rightbuttonClick={rightbuttonClick}
        leftbuttonClick={leftbuttonClick}
        randomButtonClick={randomButtonClick}
      />
    </div>
  );
}

// const [clickedValue, setClickedValue] = useState(2);

// const random = Math.floor(Math.random() * ReviewData.length);

// function handleClick(event) {
//   const { name } = event.target.parentNode;
//   if (event.target.name === "surprise-btn") {
//     setClickedValue(random);
//   }
//   if (name === "next-btn") {
//     setClickedValue((prevValue) => {
//       if (prevValue === ReviewData.length - 1) {
//         return 0;
//       } else {
//         return prevValue + 1;
//       }
//     });
//   } else {
//     setClickedValue((prevValue) => {
//       if (prevValue === 0) {
//         return ReviewData.length - 1;
//       } else {
//         return prevValue - 1;
//       }
//     });
//   }
// }
// console.log(clickedValue);
// return (
//   <div className="item-container">
//     <Content
//       name={ReviewData[clickedValue].name}
//       img={ReviewData[clickedValue].img}
//       position={ReviewData[clickedValue].designation}
//       review={ReviewData[clickedValue].review}
//       handleClick={handleClick}
//     />
//   </div>
// );
