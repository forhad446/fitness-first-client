import { Link, Navigate } from "react-router-dom";
import logo from './../assets/images/logo.png'
import { useContext, useState } from "react";
import { AuthContext } from "../../authentication/AuthProvider";
import { BsGoogle } from 'react-icons/Bs';

const SignUp = () => {

    const { createUser, googleSignIn, user } = useContext(AuthContext);

    const [signUpError, setSignUpError] = useState('');

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // clear the state info
        setSignUpError('')

        if (password.length < 6) {
            setSignUpError('Password should be at least 6 characters');
            console.log(signUpError);
            return;
        } else if (!/[A-Z]/.test(password)) {
            setSignUpError('Password should have a capital letter');
            console.log(signUpError);
            return;
        } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            setSignUpError('Password should have a special character');
            console.log(signUpError);
            return;
        } else {
            createUser(email, password)
                .then(() => setSignUpError('Account successfully created'))
                .catch(error => {
                    setSignUpError(error.message.slice(10, 50))
                })
            console.log(signUpError);
        }


    }
    // handle google sign In
    const handleGoogleSignIn = () => {
        if (googleSignIn) {
            googleSignIn()
                .then((result) => {
                    console.log(result.user);
                })
                .catch((error) => {
                    console.log(error.message);

                });
        }
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            {/* if the user is login then will cannot access this page */}
            {
                user?.email &&
                <Navigate to='/profile' />
            }
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <img
                    className="mx-auto h-10 w-auto"
                    src={logo}
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign up new account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSignUp}>
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
                            Sign up
                        </button>
                    </div>
                    {/* sign up with google */}
                    <div className="px-6 sm:px-0 max-w-sm">
                        <button type="button"
                            onClick={handleGoogleSignIn} className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                            <BsGoogle />
                            Sign up with Google
                            <div></div></button>
                    </div>
                    {/* show the error message */}
                    <div className="text-center">
                        {signUpError}
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already have a member?{' '}
                    <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Sign in Now
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;