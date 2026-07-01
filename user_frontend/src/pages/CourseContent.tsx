import { useParams } from "react-router-dom"

export function CourseContent(){
    const {courseId} = useParams();
    console.log("asd");
    
    return (
        <>
        <div>
            Id at params is: {courseId}
        </div></>
    )
}

export default CourseContent