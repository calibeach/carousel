import React, {useState} from "react";
import Carousel from "./Carousel";

function App() {
  const [carToggle, setCarToggle] = useState(false)


  return (
    <div className = "app">
    <button type = "button" className = {carToggle ? "fashionButton" : "carButton"}
    onClick = {() => setCarToggle(!carToggle)}>
      {carToggle ? "Show Fashion" : "Show Cars"}
    </button>
      {carToggle ? (
        <Carousel
        toggle = {carToggle}
        url = "https://frontend-assessment-service.vcomm.io/cars"
        />
      ) : (
        <Carousel
        tottle = {carToggle}
        url = "https://frontend-assessment-service.vcomm.io/"
        />
      )}
    </div>
  );
}

export default App;
