import {Link} from "react-router-dom";

export default function Signup(){
    return(
        <>
            <div className="flex flex-col justify-center font-[sans-serif] text-[#333] sm:h-screen p-4">
                <div className="max-w-md w-full mx-auto border border-gray-300 rounded-md p-6">
                    <div className="text-center mb-12">
                        <h1 className="font-bold text-5xl">Klora</h1>
                    </div>
                    <form>
                        <div className="space-y-6">
                            <div>
                                <label className="text-sm mb-2 block">Email Id</label>
                                <input name="email" type="text"
                                       className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                       placeholder="Enter email"/>
                            </div>
                            <div>
                                <label className="text-sm mb-2 block">Password</label>
                                <input name="password" type="password"
                                       className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                       placeholder="Enter password"/>
                            </div>
                            <div>
                                <label className="text-sm mb-2 block">Confirm Password</label>
                                <input name="cpassword" type="password"
                                       className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                                       placeholder="Enter confirm password"/>
                            </div>
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox"
                                       className="h-4 w-4 shrink-0 text-buttonPrimary focus:ring-blue-500 border-gray-300 rounded"/>
                                <label htmlFor="remember-me" className="ml-3 block text-sm">
                                    I accept the <Link to="#"
                                                    className="text-buttonPrimary font-semibold hover:underline ml-1">Terms
                                    and Conditions</Link>
                                </label>
                            </div>
                        </div>
                        <div className="!mt-10">
                            <button type="button"
                                    className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-buttonPrimary  focus:outline-none">
                                Create an account
                            </button>
                        </div>
                        <p className="text-sm mt-6 text-center">Already have an account? <a href="javascript:void(0);"
                                                                                            className="text-buttonPrimary font-semibold hover:underline ml-1">Login
                            here</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}