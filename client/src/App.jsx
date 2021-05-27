import React, {useState, useEffect} from "react";

function App() {
  const [carToggle, setCarToggle] = useState(false)


  return (
    <div className = "app">
    <button type = "button" className = {carToggle ? "fashionButton" : "carButton"}
    onClick = {() => setCarToggle(!carToggle)}>
      {carToggle ? "Show Fashion" : "Show Cards"}
    </button>
    
    </div>
  );
}

export default App;
