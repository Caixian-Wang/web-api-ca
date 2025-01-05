import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import LocalUpcomingMoviesPage from "./pages/localUpcomingMoviesPage";
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import PopularMoivesPage from "./pages/popularMoviesPage";
import MovieRecommendationPage from "./pages/movieRecommendationPage";
import MovieSimilarPage from "./pages/movieSimilarPage";
import CreditInfPage from "./pages/creditInfPage";
import LocalHomePage from "./pages/localHomePage";
import Header from "./components/loginSiteHeader";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import ProfilePage from "./pages/ProfilePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
        <Header />
          <SiteHeader />
          <MoviesContextProvider>
            <Routes>
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route path="/localmovies/upcoming" element={<LocalUpcomingMoviesPage />} />
              <Route path="/localmovies" element={<LocalHomePage />} />
              <Route path="/movies/trending" element={<TrendingMoviesPage />} />
              <Route path="/movies/popular" element={<PopularMoivesPage />} />
              <Route path="/reviews/:id" element={ <MovieReviewPage/> } /> 
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/reviews/form" element={ <AddMovieReviewPage /> } /> 
              <Route path="/movies/:id/recommendations" element={<MovieRecommendationPage />} /> 
              <Route path="/movies/:id/similars" element={<MovieSimilarPage />} /> 
              <Route path="/credits/:id/creditInf" element={<CreditInfPage />} /> 
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={ <SignUpPage /> } />
              <Route element={<ProtectedRoutes />}>
              <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              </Route>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={ <Navigate to="/" /> } />
            </Routes>
          </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);