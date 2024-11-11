import { Route, Routes, useParams } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Page/Home/Home";
import ListFilms from "./components/Page/ListFilms/ListFilms";
import AboutFilm from "./components/Page/AboutFilm.jsx/AboutFilm";
import AboutActors from "./components/Page/PageAboutActors/AboutActors";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<ListFilms />} path="type/:type/:id" />
          <Route element={<ListFilms />} path="type/:type" /> 
          <Route element={<AboutFilm />} path="AboutFilm/type/:type/:id" />
          <Route element={<AboutActors />} path="Info-person/:id" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
