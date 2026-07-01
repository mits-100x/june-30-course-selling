import Signin from "./pages/Signin";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
