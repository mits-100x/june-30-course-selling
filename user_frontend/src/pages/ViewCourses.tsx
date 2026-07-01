import api from "@/api/api";
import { useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
interface Courses {
  id: String
  name: String
  description: String
}
export function ViewCourses() {
  const [courses, setCourses] = useState<Courses[]>([])
  const navigate = useNavigate()

  let token = localStorage.getItem("token")
  if(!token) {
    navigate("/signin")
  }
  

    function handleClick(){
        navigate("/view-courses/6")
    }

    useEffect(() => {
      //make a axois call and fetch all the courses present in backend
      async function makeCall(){
        const response = await api.get("/user/courses")
        setCourses(response.data)
      }
      makeCall();
    }, [])
  return (
    <div>
      <h1>View Courses</h1>
      <button onClick={handleClick}> Go to Course no 4</button>
    </div>
  );
}

export default ViewCourses;