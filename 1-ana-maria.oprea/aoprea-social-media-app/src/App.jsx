import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/home/HomePage";
import AuthPage from "./pages/auth/AuthPage";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/profile/ProfilePage";
import Landingpage from "./pages/feed/landingPage/landingPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/auth" element={<AuthPage />}></Route>
          <Route path="/profile/:id" element={<ProfilePage />}></Route>
          <Route path="/landing-page" element={<Landingpage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
