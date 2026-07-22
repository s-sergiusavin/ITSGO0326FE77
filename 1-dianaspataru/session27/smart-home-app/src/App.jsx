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
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import DevicesIcon from "@mui/icons-material/Devices";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import useFetch from "./hooks/use-fetch";
import useAxios from "./hooks/use-axios";

function App() {
  const [feature, setFeature] = useState({
    name: "",
    action: "",
    state: false,
    id: nanoid(),
  });

  const usersUrl = "https://reqres.in/api/users?page=2";
  const users = useFetch(usersUrl);

  const {data, loading, error} = useAxios(usersUrl)

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
  const testLocalStorage = 'Acest text o sa fie in local storage'
  const testSessionStorage= 'acest text va apararea in session storage'
  const objectLocalStorage = {
    testLocalStorage:'test in local storage din obj'
  }

  const setStorage = () =>{
    localStorage.setItem('localStorageTest', testLocalStorage)
    sessionStorage.setItem('sessionStorageTest', testSessionStorage)

  }

  const removeStorage = () =>{
    //sterge doar pentru cheia respectiva
    localStorage.removeItem('localStorageTest')
    sessionStorage.removeItem('sessionStorageTest')
    // sterge tot 
    localStorage.clear()
    sessionStorage.clear()
  }

  return (
    <>
      <header>
        <ul>
          <li>
            <HomeFilledIcon />
            <Link to={"/welcome"}>Welcome</Link>
          </li>
          <li>
            <DevicesIcon />
            <NavLink to={"/smart-home"}>Smart Home</NavLink>
          </li>
          <li>
            <AddToQueueIcon />
            <NavLink to={"/features-form"}>Form</NavLink>
          </li>
        </ul>
      </header>

      {/* <div className="lights yellow">App</div> */}

      <Routes>
        <Route path="/" element={<SmartHome newFeature={feature} />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route
          path="/smart-home"
          element={<SmartHome newFeature={feature} />}
        ></Route>
        <Route
          path="/features-form"
          element={<FeaturesForm updateFeatures={updateFeaturesHandler} />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <button onClick = {setStorage}>Set Storage</button>
      <button onClick = {removeStorage}>Remove Storage</button>

      <h2>Data with fetch</h2>
      {users?.data?.map((user) => (
        <div key={user.id}>{user.first_name}</div>
      ))}

      <h2>Data with axios</h2>
      {loading && <div>{loading}</div>}
      {error && <div>{error}</div>}
      {!loading && !error && data?.map(user => <div key={user.id}>{user.first_name} {user.last_name}</div>)}
    </>
  );
}

export default App;
