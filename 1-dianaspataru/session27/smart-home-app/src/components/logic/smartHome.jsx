import { useEffect, useState } from "react";
import Airco from "../ui/airCo";
import Lights from "../ui/lights";
import Room from "../ui/room";
import Features from "./features";
import { useRef } from "react";

const SmartHome = ({newFeature}) => {
  const [lightsOn, setLightsOn] = useState(false);
  const [acOn, setAcOn] = useState(false);
  const [dirtProgress, setDirtProgress] = useState({
    status: 0,
    cleaned: 0,
  });

  const dirtInterval = useRef();

  useEffect(() => {
    dirtInterval.current = setInterval(() => {
      setDirtProgress((prevState) => {
        
        if (prevState.status > 1) {
          clearInterval(dirtInterval.current);
        }
        return {
          ...prevState,
          status: prevState.status + 0.1,
        };
      });
    }, 2000);

    return () => {
      clearInterval(dirtInterval.current);
    };
  }, [dirtProgress.cleaned]);

  const toggleLights = () => {
    setLightsOn(!lightsOn);
  };

  const toggleAc = () => {
    setAcOn(!acOn);
  };

  const startCleaning = () => {
    //clearInterval(dirtInterval.current);
    setDirtProgress((prevState) => {
      return {
        ...prevState,
        status: 0,
        cleaned: prevState.cleaned + 1,
      };
    });
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
    <div>
      <div className="ui-features">
        <Lights lightsOn={lightsOn} />
        <Airco acOn={acOn} />
        <Room status={dirtProgress.status} />
      </div>
      <Features toggleAction={toggleActionHandler} newFeature={newFeature} />
    </div>
  );
};

export default SmartHome;
