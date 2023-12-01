import { Link, Navigate } from "react-router-dom";
import logo from './../../assets/logo.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../authentication/AuthProvider";
import { BsGoogle } from 'react-icons/Bs';
import useDBAllUser from "../../hook/useDBAllUser";
import axios from "axios";


const Login = () => {

    const { signInUser, user, googleSignIn } = useContext(AuthContext);
    const [signInError, setSignInError] = useState('');

    // all dbusers 
    const dbUsers = useDBAllUser();
    const role = 'user'


    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // clear the state info
        setSignInError('')

        if (signInUser) {
            signInUser(email, password)
                .then(result => {})
                .catch(error => {})

        }
        const handleGoogleSignIn = () => {
            googleSignIn()
        }
    }
    // google sign in handling
    const handleGoogleSignIn = () => {
        if (googleSignIn) {
            googleSignIn()
                .then((result) => {
                    const name = result?.user?.displayName;
                    const email = result?.user?.email;
                    const photoUrl = result?.user?.photoURL;
                    const password = '';
                    const user = { name, email, password, photoUrl, role }
                    const isExit = dbUsers.filter(item => item.email === email);

                    if (isExit.length === 0) {
                        axios.post('https://fitness-first-server.vercel.app/users', user)
                            .then(res => {})
                            .catch(error => {})
                    }
                })
                .catch((error) => {
                    {};

                });
        }
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            {/* if the user is login then will cannot access this page */}
            {
                user?.email &&
                <Navigate to='/' />
            }
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src={logo}
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Log in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6"
                    onSubmit={handleSignIn}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                    <div className="px-6 sm:px-0 max-w-sm">
                        <button type="button"
                            onClick={handleGoogleSignIn}
                            className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                            <BsGoogle />
                            Sign In with Google
                            <div></div></button>
                    </div>
                    {/* show the error message */}
                    <div className="text-center">
                        {signInError}
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Sign up new Account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;