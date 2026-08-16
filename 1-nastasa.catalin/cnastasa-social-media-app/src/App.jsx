import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import PageSkeleton from "./components/PageSkeleton";
import AuthPage from "./pages/auth/AuthPage";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const ReelsPage = lazy(() => import("./pages/reels/ReelsPage"));
const MarketplacePage = lazy(() => import("./pages/marketplace/MarketplacePage"));
const GroupsPage = lazy(() => import("./pages/groups/GroupsPage"));
const GamingPage = lazy(() => import("./pages/gaming/GamingPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProfilePage = lazy(() => import("./pages/profile/ProfilePage"));
const MetaAiPage = lazy(() => import("./pages/metaai/MetaAiPage"));
const MemoriesPage = lazy(() => import("./pages/memories/MemoriesPage"));
const SavedPage = lazy(() => import("./pages/saved/SavedPage"));
const FavoritesPage = lazy(() => import("./pages/favorites/FavoritesPage"));
const EventsPage = lazy(() => import("./pages/events/EventsPage"));
const PagesPage = lazy(() => import("./pages/pages/PagesPage"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />

          <Route element={<RequireAuth />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/reels" element={<ReelsPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/groups" element={<GroupsPage />} />
            <Route path="/gaming" element={<GamingPage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/meta-ai" element={<MetaAiPage />} />
            <Route path="/memories" element={<MemoriesPage />} />
            <Route path="/saved" element={<SavedPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/pages" element={<PagesPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
