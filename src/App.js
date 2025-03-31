import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/organisms/Header";
import { Home } from "./pages/Home/Home";
import { PostDetails } from "./pages/PostDetails/PostDetails";

import theme from "./Theme.module.css";

function App() {
  return (
    <div className={theme.Blog}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="post/:id" element={<PostDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
