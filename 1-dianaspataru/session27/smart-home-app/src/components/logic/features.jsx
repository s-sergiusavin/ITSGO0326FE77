import { useState } from "react";
import Feature from "./feature";
import FeaturesForm from "./featuresForm";

function Features({toggleAction}) {
  const FEATURES = [
    {
      name: "Toggle lights",
      action: "Turn the lights on",
      state: false,
      id: 0,
    },
    {
      name: "Toggle AC",
      action: "Turn on the AC",
      state: false,
      id: 1,
    },
    {
      name: "Clean",
      action: "Turn on the vacumm",
      state: false,
      id: 2,
    },
    {
      name: "Coffe time",
      action: "Make a coffe",
      state: false,
      id: 3,
    },
  ];

  const [features, setFeatures] = useState(FEATURES)

function toggleActionHandler(name){
 toggleAction(name)
}

const updateFeaturesHandler = (feature)=>{
setFeatures(prevState =>{
  return[...prevState, feature]
})
}

  return (
    <div className="features-container">
      <div className="features">
        {features.map((feature) => {
        return <Feature name={feature.name} action={feature.action} key={feature.id} toggleAction={toggleActionHandler}/>;
      })}
      </div>
      <FeaturesForm updateFeatures = {updateFeaturesHandler}/>
    </div>
  );
}

export default Features;
