import { useState } from "react";
import Ac from "../ui/Ac";
import Lights from "../ui/Lights";
import Room from "../ui/Room";
import Features from "./Features";
import useInterval from "../../hooks/use-interval";

const SmartHome = ({ newFeature }) => {
  const [lightsOn, setLightsOn] = useState(false);
  const [acOn, setAcOn] = useState(false);
  const [roomActions, resetRoomActions] = useInterval(4000, 0);
  const [childRoomActions, resetChildRoomActions] = useInterval(2000, 0.3);

  const toggleLights = () => {
    setLightsOn(!lightsOn);
  };

  const toggleAc = () => {
    setAcOn(!acOn);
  };

  const startCleaning = () => {
    resetRoomActions();
    resetChildRoomActions();
  };

  const toggleActionHandler = (name) => {
    switch (name) {
      case "Toggle lights":
        toggleLights();
        break;
      case "Toggle AC":
        toggleAc();
        break;
      case "Clean":
        startCleaning();
        break;
    }
  };
  return (
    <>
      <div className="ui-features">
        <Lights lightsOn={lightsOn} />
        <Ac acOn={acOn} />
        <Room status={roomActions.dirtProgress} />
        <Room status={childRoomActions.dirtProgress} />
      </div>

      <Features toggleAction={toggleActionHandler} newFeature={newFeature} />
    </>
  );
};

export default SmartHome;
