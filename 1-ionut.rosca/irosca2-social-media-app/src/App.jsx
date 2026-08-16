import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/home/HomePage";
import AuthPage from "./pages/auth/AuthPage";
import MyProfile from "./pages/profile/MyProfile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/auth" element={<AuthPage/>}></Route>
          <Route path="/my-profile" element={<MyProfile/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
