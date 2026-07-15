import { useEffect, useState } from "react";
import Feature from "./Feature";

function Features({ toggleAction, newFeature }) {
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
      action: "Turn on the vacuum",
      state: false,
      id: 2,
    },
    {
      name: "Coffee time",
      action: "Make a coffee",
      state: false,
      id: 3,
    },
  ];

  const [features, setFeatures] = useState(FEATURES);

  useEffect(() => {
    if (newFeature.name !== "") {
      setFeatures((prevState) => [newFeature, ...prevState]);
    }
  }, [newFeature]);

  const toggleLights = () => {
    setFeatures((prevState) => {
      const updatedFeatures = prevState.map((feature) => {
        if (feature.name === "Toggle lights") {
          feature.state = !feature.state;
          feature.action = `Turn the lights ${feature.state ? "off" : "on"}`;
        }
        return feature;
      });

      return updatedFeatures;
    });
  };

  const toggleAc = () => {
    setFeatures((prevState) => {
      const updatedFeatures = prevState.map((feature) => {
        if (feature.name === "Toggle AC") {
          feature.state = !feature.state;
          feature.action = `Turn ${feature.state ? "off" : "on"} the AC `;
        }
        return feature;
      });

      return updatedFeatures;
    });
  };

  const startCleaning = () => {
    setFeatures((prevState) => {
      const updatedFeatures = prevState.map((feature) => {
        if (feature.name === "Clean") {
          feature.state = !feature.state;
          feature.action = `Cleaning.. `;
        }
        return feature;
      });

      return updatedFeatures;
    });

    setTimeout(() => {
      setFeatures((prevState) => {
        const updatedFeatures = prevState.map((feature) => {
          if (feature.name === "Clean") {
            feature.state = !feature.state;
            feature.action = `Turn on the vacuum`;
          }
          return feature;
        });

        return updatedFeatures;
      });
    }, 2000);
  };

  function toggleActionHandler(name) {
    toggleAction(name);

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
  }

  return (
    <div className="features-container">
      <div className="features">
        {features.map((feature) => {
          return (
            <Feature
              name={feature.name}
              action={feature.action}
              key={feature.id}
              state={feature.state}
              toggleAction={toggleActionHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Features;
