import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APITester } from "./APITester";

import logo from "./logo.svg";
import reactLogo from "./react.svg";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup.";
import ViewCourses from "./pages/ViewCourses";
import CourseContent from "./pages/CourseContent";

export function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/view-courses" element={<ViewCourses />} />
      <Route path="/view-courses/:courseId" element={<CourseContent />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
