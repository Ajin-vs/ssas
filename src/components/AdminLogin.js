import { useNavigate } from "react-router-dom"

export default function AdminLogin(){
    const navigate = useNavigate();
    const handleLogin =()=>{
        navigate("/admin")
    }
    return (
        <>
        <h1> Admin Login</h1>   
        <button onClick={handleLogin}>Login</button>
        </>
    )
}