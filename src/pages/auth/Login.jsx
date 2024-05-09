import {Link} from "react-router-dom";

export default function Login(){
    return(
        <>
            <section id="login" className="flex bg-white flex-col items-center pt-6">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 d">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Login
                        </h1>
                        <form className="space-y-4 md:space-y-6" method="POST">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-600 block w-full p-2.5"
                                    placeholder="Masukkan Username Anda !"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-600 block w-full p-2.5"
                                    placeholder="Masukkan Password Anda !"
                                    required=""
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-primary-700 hover:bg-primary-900  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                            >
                                Buat Akun
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Belum punya akun ?{" "}
                                <Link
                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                    to="/signup"
                                >
                                    Daftar di sini
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}