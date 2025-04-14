import React, { useState } from 'react'
import { useAppContext } from '../Contexts/AppContext';

const Login = () => {

    const { setShowUserLogin, setUser } = useAppContext()

    const [state, setState] = useState("login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //whenever user provide their details and submit the form then close the login form 
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setUser({
            email: "test@natureCart.com",
            name: "dev"
        })
        setShowUserLogin(false);
    }

    return (
        <div onClick={() => setShowUserLogin(false)} className='fixed left-0 top-0 bottom-0 right-0 z-30 flex items-center text-sm text-gray-600 bg-black/50'>
            <form className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[452px]  rounded-lg shadow-xl border border-gray-200 bg-white"
                onSubmit={onSubmitHandler}
                onClick={(e) => e.stopPropagation()}>

                {/* ------- heading ------- */}
                <p className="text-2xl font-medium m-auto">
                    <span className="text-green-700">User</span> {state === "login" ? "Login" : "Sign Up"}
                </p>
                {
                    state === "register" && (
                        <div className="w-full">
                            <p>Name</p>
                            <input onChange={(e) => setName(e.target.value)} value={name} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-3 outline-green-500" type="text" required />
                        </div>
                    )
                }
                {/* ------- Email ------- */}
                <div className="w-full ">
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-3 outline-green-500" type="email" required />
                </div>
                {/* ------- Password ------- */}
                <div className="w-full ">
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-3 outline-green-500" type="password" required />
                </div>

                {
                    state === "register" ? (
                        <p>
                            Already have account? <span onClick={() => setState("login")} className="text-green-700 cursor-pointer">click here</span>
                        </p>
                    ) : (
                        <p>
                            Create an account? <span onClick={() => setState("register")} className="text-green-700 cursor-pointer">click here</span>
                        </p>
                    )
                }

                {/* ------- button ------- */}
                <button className="bg-green-700 hover:bg-green-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
                    {state === "register" ? "Create Account" : "Login"}
                </button>
            </form>
        </div>
    )
}

export default Login


