export function LoginPage(){
    return(
        <div className="w-full h-screen bg-[url(./login-bg.jpg)] bg-cover bg-center flex ">
            <div className="border w-[50%] h-full"></div>
            <div className="border w-[50%] h-full flex items-center justify-center">
                <div className="w-[500px] h-[600px] backdrop-blur-xl rounded-lg flex flex-col items-center justify-center gap-8">
                    Login Page
                    <input type="text" className="border border-white w-[70%] h-[50px] rounded-lg flex text-center" placeholder="Username" />
                    <input type="password" className="border border-white w-[70%] h-[50px] rounded-lg text-center" placeholder="Password" />
                    <input type="text" className="border border-white w-[70%] h-[50px] rounded-lg text-center" placeholder="Email" />
                    <button className="bg-blue-200 rounded-xl w-[60%] h-[50px]">Login</button>
                    

                </div>
            </div>
        </div>
    ) 
}