import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import "./App.scss";
import Features from "./components/logic/features";
import Lights from "./components/ui/lights";
import Room from "./components/ui/room";
import Airco from "./components/ui/airCo";
import FeaturesForm from "./components/logic/featuresForm";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import SmartHome from "./components/logic/smartHome";
import Welcome from "./components/logic/welcome";
import NotFound from "./components/logic/notFound";
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import DevicesIcon from '@mui/icons-material/Devices';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';

function App() {
 
 const [feature,setFeature]=useState({
  name:'',
  action:'',
  state:false,
  id: nanoid()

 })

  

  const updateFeaturesHandler = (feature) => {
    setFeature(feature);
  };

  //destructuring explained

  // function returnPuppy() {
  //   const puppy = {
  //     name: "rex",
  //   };

  //   const changePuppyName = () => {
  //     puppy.name = "azorel";
  //   };

  //   return [puppy, changePuppyName];
  // }

  // const [myPuppy, myFunction] = returnPuppy();

  return (
    <div>
      <header>
        <ul>
          <li>
            <HomeFilledIcon/>
            <Link to={'/welcome'}>Welcome</Link>
          </li>
          <li>
            <DevicesIcon/>
            <NavLink to={'/smart-home'}>Smart Home</NavLink>
          </li>
          <li>
            <AddToQueueIcon/>
            <NavLink to={'/features-form'}>Form</NavLink>
          </li>
        </ul>
      </header>
      
      {/* <div className="lights yellow">App</div> */}
      

      <Routes>
        <Route path="/" element={<SmartHome newFeature={feature}/>}></Route>
        <Route path="/welcome" element={<Welcome/>}></Route>
        <Route path="/smart-home" element={<SmartHome newFeature={feature}/>}></Route>
        <Route path="/features-form" element={<FeaturesForm updateFeatures={updateFeaturesHandler} />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>


    </div>
  );
}

export default App;
