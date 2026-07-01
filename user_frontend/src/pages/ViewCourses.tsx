import { useNavigate  } from "react-router-dom";

export function ViewCourses() {

    const navigate = useNavigate()
    function handleClick(){
        navigate("/view-courses/6")
    }
  return (
    <div>
      <h1>View Courses</h1>
      <button onClick={handleClick}> Go to Course no 4</button>
    </div>
  );
}

export default ViewCourses;