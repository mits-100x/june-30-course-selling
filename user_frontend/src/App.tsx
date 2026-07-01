import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APITester } from "./APITester";

import logo from "./logo.svg";
import reactLogo from "./react.svg";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup.";
import ViewCourses from "./pages/ViewCourses";
import CourseContent from "./pages/CourseContent";
import Navbar from "./component/Navbar";
import Layout from "./layout/layout";

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<Layout />}> //1
      <Route path="/view-courses" element={<ViewCourses />} />
      <Route path="/view-courses/:courseId" element={<CourseContent />} />
      </Route> // 2
    </Routes>
    </BrowserRouter>
  );
}

export default App;
