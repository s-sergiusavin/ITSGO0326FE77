import "./Feature.scss";
import buttonIconOn from "../../assets/buttonIconOn.png";
import buttonIconOff from "../../assets/buttonIconOff.jpeg";
import acIconOn from "../../assets/acOn.webp";
import acIconOff from "../../assets/acOff.png";
import defaultImage from "../../assets/default_feature_button.avif";
import { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

function Feature({ name, action, toggleAction, state }) {
  const [lightsIcon, setLightsIcon] = useState(null);
  const [acIcon, setAcIcon] = useState(null);

  useEffect(() => {
    if (name === "Toggle lights") {
      state ? setLightsIcon(buttonIconOn) : setLightsIcon(buttonIconOff);
    } else if (name === "Toggle AC") {
      state ? setAcIcon(acIconOn) : setAcIcon(acIconOff);
    } else {
      setAcIcon(defaultImage);
    }
  }, [state]);

  function featureButtonHandler() {
    toggleAction(name);
  }
  return (
    <div className="feature">
      <Card sx={{ maxWidth: 250 }} onClick={featureButtonHandler}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={name === "Toggle lights" ? lightsIcon : acIcon}
            alt="feature button"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {action}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Feature;