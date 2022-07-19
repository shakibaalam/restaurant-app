import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Components/Loading';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading></Loading>
    };

    const onSubmit = (data) => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.pass);
    };
    return (
        <div>
            <div className='background-style h-[30vh]'>
                <h1 className=' text-white text-4xl pt-32 pl-20 font-serif font-bold'>Login</h1>
            </div>

            <div className=' bg-secondary w-96 mx-auto my-20 p-10 rounded shadow'>
                <form className="form mb-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <input className=' bg-secondary w-full pl-3 py-2 border-b-5 border-accent'
                            type="email"
                            placeholder="Email"
                            required
                            {...register("email")}
                        />
                        <hr />
                    </div>
                    <div className="mb-3">
                        <input className=' bg-secondary  w-full border-b-5 border-accent pl-3 py-2'
                            type="password"
                            placeholder="Password"
                            required
                            {...register("pass")}
                        />
                    </div>
                    <button type="submit" className=" bg-primary text-white px-5 py-2 my-6 mx-auto rounded flex justify-center items-center">
                        Login
                    </button>
                </form>
                <Link to="/register" className=' hover:text-blue-500'>
                    Don't have an account? Create an account
                </Link>

                {error && <p className=' text-red-500'>{error}</p>}
            </div>
        </div>
    );
};

export default Login;