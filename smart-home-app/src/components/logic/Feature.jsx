import "./Feature.scss";
import buttonIconOn from "../../assets/buttonIconOn.png";
import buttonIconOff from "../../assets/buttonIconOff.jpeg";
import acIconOn from "../../assets/acOn.webp";
import acIconOff from "../../assets/acOff.png";
import { useEffect, useState } from "react";

function Feature({ name, action, toggleAction, state }) {
  const [lightsIcon, setLightsIcon] = useState(null);
  const [acIcon, setAcIcon] = useState(null);

  useEffect(() => {
    if (name === "Toggle lights") {
      state ? setLightsIcon(buttonIconOn) : setLightsIcon(buttonIconOff);
    } else if (name === "Toggle AC") {
      state ? setAcIcon(acIconOn) : setAcIcon(acIconOff);
    }
  }, [state]);

  function featureButtonHandler() {
    toggleAction(name);
  }
  return (
    <div className="feature">
      {name === "Toggle lights" && (
        <img src={lightsIcon} alt="bulb" className="buttonImg" />
      )}
      {name === "Toggle AC" && (
        <img src={acIcon} alt="bulb" className="acButtonImg" />
      )}
      <h2>{name}</h2>
      <button onClick={featureButtonHandler}>{action}</button>
    </div>
  );
}

export default Feature;
