import api from "@/api/api";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)

    async function handleSignup() {
        setLoading(true)
        let data = {username , password}
        let response = await api.post("/api/user/signup", data)
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