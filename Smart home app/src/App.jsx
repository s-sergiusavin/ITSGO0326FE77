import { useState } from "react";
import "./App.scss";
import FeaturesForm from "./components/logic/FeaturesForm";
import { nanoid } from "nanoid";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import SmartHome from "./components/logic/SmartHome";
import Welcome from "./components/logic/Welcome";
import NotFound from "./components/logic/NotFound";

import HomeIcon from "@mui/icons-material/Home";
import DevicesIcon from "@mui/icons-material/Devices";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import useFetch from "./hooks/use-fetch";
import useAxios from "./hooks/use-axios";

import Button from "@mui/material/Button";

function App() {
  const [feature, setFeature] = useState({
    name: "",
    action: "",
    state: false,
    id: nanoid(),
  });

  const usersUrl = "https://reqres.in/api/users?page=2";
  const users = useFetch(usersUrl);
  const { data, loading, error } = useAxios(usersUrl);

  const updateFeaturesHandler = (feature) => {
    setFeature(feature);
  };

  const testLocalStorage = "Acest text va aparea in local storage";
  const testSessionStorage = "Acest text va aparea in session storage";

  const objectLocalStorage = {
    testLocalStorage: "Text in local storage din obiect",
  };

  const setStorage = () => {
    localStorage.setItem("localStorageTest", testLocalStorage);
    sessionStorage.setItem("sessionStoragetest", testSessionStorage);

    localStorage.setItem("localStorageTest2", testLocalStorage);
    sessionStorage.setItem("sessionStorageTest2", testSessionStorage);

    localStorage.setItem(
      "objectInLocalStorage",
      JSON.stringify(objectLocalStorage),
    );
    sessionStorage.setItem(
      "objectInSessionStorage",
      JSON.stringify(objectLocalStorage),
    );
  };

  const removeStorage = () => {
    // Metoda remove item sterge elementul cu cheia mentionata
    // localStorage.removeItem('localStorageTest');
    // sessionStorage.removeItem('sessionStoragetest');

    // Metoda clear sterge tot
    localStorage.clear();
    sessionStorage.clear();
  };

  return (
    <>
      <header>
        <ul>
          <li>
            <HomeIcon />
            <Link to={"/welcome"}>Welcome</Link>
          </li>
          <li>
            <DevicesIcon />
            <NavLink to="/smart-home">Smart home</NavLink>
          </li>
          <li>
            <AddToQueueIcon />
            <NavLink to={"/features-form"}>Features Form</NavLink>
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

      <div className="features-container ">
        <Button variant="contained" fullWidth onClick={setStorage}>
          Set storage
        </Button>
        <Button variant="contained" fullWidth onClick={removeStorage}>
          Remove storage
        </Button>
      </div>

      <h2>Data with use fetch</h2>
      {users?.data?.map((user) => (
        <div key={user.id}>{user.first_name}</div>
      ))}
      {/* {users && users.data.map( user => <div key={user.id}>{user.first_name}</div>)} */}

      <h2>Data with axios</h2>
      {loading && <div>{loading}</div>}
      {error && <div>{error}</div>}
      {!loading &&
        !error &&
        data?.map((user) => (
          <div key={user.id}>
            {user.first_name} {user.last_name}
          </div>
        ))}
    </>
  );
}

export default App;