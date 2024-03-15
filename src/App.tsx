import { Routes, Route } from "react-router-dom";

import "./App.css";

import * as Pages from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages.Home />}></Route>
      <Route path="*" element={<Pages.NotFound />}></Route>
    </Routes>
  );
};

export default App;
