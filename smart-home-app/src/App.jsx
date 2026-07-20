import { useState } from "react";
import "./App.scss";
import FeaturesForm from "./components/logic/FeaturesForm";
import { nanoid } from "nanoid";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import SmartHome from "./components/logic/SmartHome";
import Welcome from "./components/logic/Welcome";
import NotFound from "./components/logic/NotFound";

import HomeIcon from '@mui/icons-material/Home';
import DevicesIcon from '@mui/icons-material/Devices';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';

function App() {
  const [feature, setFeature] = useState({
    name: "",
    action: "",
    state: false,
    id: nanoid(),
  });

  const updateFeaturesHandler = (feature) => {
    setFeature(feature);
  };

  return (
    <div>
      <header>
        <ul>
          <li>
            <HomeIcon/>
            <Link to={"/welcome"}>Welcome</Link>
          </li>
          <li>
            <DevicesIcon/>
            <NavLink to="/smart-home">Smart home</NavLink>
          </li>
          <li>
            <AddToQueueIcon/>
            <NavLink to={"/features-form"}>Features Form</NavLink>
          </li>
        </ul>
      </header>

      {/* <div className="lights yellow">App</div> */}

      <Routes>
        <Route path="/" element={<SmartHome newFeature={feature} />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/smart-home" element={<SmartHome newFeature={feature}/>}></Route>
        <Route path="/features-form" element={<FeaturesForm updateFeatures={updateFeaturesHandler}/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
