import api from "@/api/api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSignup() {
        setLoading(true)
        let data = {username , password}
        let response = await api.post("/user/signup", data)
        /**
         * {
         *  success: true
         *  data: []
         *  message: "Signup successfull"
         * }
         * 
         */
        if(response.data.success){
            alert("Signup Successfull")
            navigate("/view-courses")
        } else {
            alert("Failed to Signup")
        }
        console.log(response);
        setLoading(false)
    }

  return (
    <div>
        <div>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleSignup} disabled={loading}>{loading ? "loading..." : "Signup"}</button>
        <p>Already have an account? <Link to="/signin">Signin</Link></p>
    </div>
  );
}

export default Signup;