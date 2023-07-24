import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Search from "./components/Search";
import SearchPage from "./components/SearchPage";
import Store from "./components/Store";
import Gmail from "./components/Gmail";
import Images from "./components/Images";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/gmail" element={<Gmail />} />
          <Route path="/images" element={<Images />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
