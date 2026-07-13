import { useEffect, useRef, useState } from "react";
import "./App.scss";
import Features from "./components/logic/Features";
import Lights from "./components/ui/Lights";
import Room from "./components/ui/Room";
import Ac from "./components/ui/Ac";

function App() {
  const [lightsOn, setLightsOn] = useState(false);
  const [acOn, setAcOn] = useState(false);
  const [dirtProgress, setDirtProgress] = useState({
    status: 0,
    cleaned: 0,
  });

  /** Use effect model */
  // useEffect( () => {
  //   console.log('Effect triggered');
  // }, []);

  // useEffect(() => {
  //   console.log("Effect triggered when lightsOn is changed")

  //   return () => {
  //     console.log('Component unmount')
  //   }
  // }, [lightsOn]);

  const dirtInterval = useRef();

  useEffect(() => {
    dirtInterval.current = setInterval(() => {
      setDirtProgress((prevState) => {
        console.log(prevState);
        console.log("Interval: ", dirtInterval);
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
    }
  }, [dirtProgress.cleaned]);

  const toggleLights = () => {
    setLightsOn(!lightsOn);
  };

  const toggleAc = () => {
    setAcOn(!acOn);
  };

  const startCleaning = () => {
    // clearInterval(dirtInterval.current);
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
        <Ac acOn={acOn} />
        <Room status={dirtProgress.status} />
      </div>

      <Features toggleAction={toggleActionHandler} />
    </div>
  );
}

export default App;
