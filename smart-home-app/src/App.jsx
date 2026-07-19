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

  useEffect(() => {
    const interval = setInterval
    console.log('effect triggered when lights on is changed');

    return () => {
      console.log('component unmount')
    }
  }, [lightsOn]);

  useEffect(() => {

  })

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
console.log('Test')

setInterval(() => {
  setDirtProgress((prevState) => {
    return prevState +0.1
  })
}, 2000
)
const toggleLights = () => {
  setLightsOn(!LightsOn);
};

const toggleAc = () => {
  setAcOn(!acOn);
  useEffect(()=> {
    
  })

};



const startCleaning = () => {
  setDirtProgress(0);
}

function App() {
  const [ACOn, setACOn] = useState(false);

  const toggleActionHandler = (name) => {
    if (name === "Toggle AC") {
      setACOn(!ACOn)
    }
  };


  return (
    <div>
      <div className="ui-features">
        <Ac ACOn={ACOn} />
        <Room status={0.2}/>
      </div>

      <Features toggleAction={toggleActionHandler} />
    </div>
  );
}



export default App;
