import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export function LoginPage(){
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [loading,setLoading] = useState(false)

    const navigate = useNavigate()

    function handleLogin(){
        setLoading(true)
        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/login",{
            email: email,
            password: password
        }).then(
            (response)=>{
                console.log("Login success", response.data)
                toast.success("Login successful")
                localStorage.setItem("token",response.data.token)

                const user = response.data.user
                if(user.role==="admin"){
                    navigate("/admin")
                }else{
                    navigate("/user")
                }
                setLoading(false)
        }).catch(
            (err)=>{    
                console.log("Login error", err)
                toast.error(err.response.data.message||"Login failed")
                setLoading(false)
        })
    }   

    return(
        <div className="w-full h-screen bg-[url(./login-bg.jpg)] bg-cover bg-center flex text-xl">
            <div className="w-[50%] h-full"></div>
            <div className=" w-[50%] h-full flex items-center justify-center">
                <div className="w-[500px] h-[600px] backdrop-blur-xl rounded-lg flex flex-col items-center justify-center gap-8">
                    Login Page
    

                     <input type="text" onChange={(e)=>{
                        setEmail(e.target.value)}}
                        className="border border-white w-[70%] h-[50px] rounded-lg text-center" placeholder="Email" />
                    <input type="password" onChange={(e)=>{
                        setPassword(e.target.value)}} 
                    className="border border-white w-[70%] h-[50px] rounded-lg text-center" placeholder="Password" />
                   
                    <button className="bg-blue-200 rounded-xl w-[60%] h-[50px] cursor-pointer"  onClick={handleLogin}>
                        
                        {loading ? "Logging in..." : "Login"}
                    </button>

                    <p className="text-gray-200 text-lg">
                        Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={()=>{navigate("/register")}}>Register</span>
                    </p>
                     
                </div>
            </div>
        </div>
    ) 
}