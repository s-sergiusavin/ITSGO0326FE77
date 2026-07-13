import { useState } from "react";
import "./App.scss";
import Features from "./components/logic/Features";
import Lights from "./components/ui/Lights";
import Room from "./components/ui/Room";

function App() {
  const [lightsOn, setLightsOn] = useState(false);

  const toggleActionHandler = (name) => {
    if (name === "Toggle lights") {
      setLightsOn(!lightsOn)
    }
  };

  // Destructuring explained

  // function returnPuppy() {
  //   const puppy = {
  //     name: 'Rex'
  //   }

  //   const changePuppyName = () => {
  //     puppy.name = 'Azorel';
  //   }

  //   return [puppy, changePuppyName];
  // }

  // const [myPuppy, myFunction] = returnPuppy();


  return (
    <div>
      <div className="ui-features">
        <Lights lightsOn={lightsOn} />
        <Room status={0.1}/>
      </div>

      <Features toggleAction={toggleActionHandler} />
    </div>
  );
}

export default App;
