import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import { Header } from "./components/organisms/Header";
import { Home } from "./pages/Home/Home";
import { PostDetails } from "./pages/PostDetails/PostDetails";
import { FilterProvider } from "./contexts/filterContext/filterContext";

import theme from "./Theme.module.css";

function App() {
  return (
    <div className={theme.Blog}>
      <FilterProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="post/:id" element={<PostDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FilterProvider>
    </div>
  );
}

export default App;
