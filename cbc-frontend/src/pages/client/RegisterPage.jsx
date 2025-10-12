import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export function RegisterPage() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    async function handleRegister() {
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            toast.error("Please fill all fields")
            return
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match")
            return
        }

        try {
            setLoading(true)
            const response = await axios.post(
                import.meta.env.VITE_BACKEND_URL + "/api/user",
                {
                    firstName,
                    lastName,
                    email,
                    password,
                }
            )

            toast.success("Registration successful! Please log in.")
            console.log("Register success:", response.data)
            setLoading(false)
            navigate("/login")
        } catch (err) {
            console.error("Register error:", err)
            toast.error(err.response?.data?.message || "Registration failed")
            setLoading(false)
        }
    }

    return (
        <div className="w-full h-screen bg-[url(./login-bg.jpg)] bg-cover bg-center flex">
            <div className="w-[50%] h-full"></div>
            <div className="w-[50%] h-full flex items-center justify-center">
                <div className="w-[500px] h-[700px] backdrop-blur-xl rounded-lg flex flex-col items-center justify-center gap-6">
                    <h2 className="text-2xl font-semibold text-white">Register Page</h2>

                    <div className="flex w-[70%] justify-between gap-3">
                        <input
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                            className="border border-white w-1/2 h-[50px] rounded-lg text-center"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            onChange={(e) => setLastName(e.target.value)}
                            className="border border-white w-1/2 h-[50px] rounded-lg text-center"
                            placeholder="Last Name"
                        />
                    </div>

                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-white w-[70%] h-[50px] rounded-lg text-center"
                        placeholder="Email"
                    />

                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-white w-[70%] h-[50px] rounded-lg text-center"
                        placeholder="Password"
                    />

                    <input
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border border-white w-[70%] h-[50px] rounded-lg text-center"
                        placeholder="Confirm Password"
                    />

                    <button
                        className="bg-blue-200 rounded-xl w-[60%] h-[50px] cursor-pointer"
                        onClick={handleRegister}
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>

                    <p className="text-gray-200 text-lg">
                        Already have an account?{"   "}
                        <span
                            onClick={() => navigate("/login")}
                            className="text-blue-500  cursor-pointer"
                        >
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}
