import api from "@/api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    async function handleSignin() {
        setLoading(true)

        try {
            let data = {username, password}
            let response = await api.post("/user/signin", data)
            /**
             * response.data =  {
             *  success: true
             *  data: "asdjfhasjkdlfhlajksdhflkajsdhfldsajfk"
             * }
             * 
             */
            localStorage.setItem("token", response.data.data)
            alert("signin successfull")
            navigate("/view-courses")
        } catch (error) {
            
        } finally {
            setLoading(false)
        }
        // {token: "asdasdasd"}

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
      <button disabled={loading} onClick={handleSignin}>{loading ? "loading.." : "singin"}</button>
    </div>
  );
}

export default Signin;