import { useState } from "react";
import "./App.scss";
import Features from "./components/logic/Features";
import Lights from "./components/ui/Lights";
import Room from "./components/ui/Room";
import AC from "./components/ui/AC";

function App() {
  const [lightsOn, setLightsOn] = useState(false);
  const [acOn, setAcOn] = useState(false);
  const [status, setStatus] = useState(1);


  const toggleActionHandler = (name) => {
    if (name === "Toggle lights") {
      setLightsOn(!lightsOn)
    }
    if (name === "Toggle AC") {
      setAcOn(!acOn)
    }

    if (name === 'Clean') {
      setTimeout(() => setStatus(0.8), 200)
      setTimeout(() => setStatus(0.6), 400)
      setTimeout(() => setStatus(0.2), 600)
      setTimeout(() => setStatus(0), 800)
      
      setTimeout(() => setStatus(0.2), 3000)
      setTimeout(() => setStatus(0.4), 3200)
      setTimeout(() => setStatus(0.6), 3400)
      setTimeout(() => setStatus(0.8), 3600)
      setTimeout(() => setStatus(1), 3800)
    }
  };

  return (
    <div>
      <div className="ui-features">
        <Lights lightsOn={lightsOn} />
        <AC acOn={acOn} />
        <Room status={status}/>
      </div>

      <Features toggleAction={toggleActionHandler} />
    </div>

    
  );
}

export default App;