
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';
import auth from '../firebase.init';

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/');
    }
    if (loading) {
        return <Loading></Loading>
    };

    const onSubmit = (data) => {
        console.log(data);
        createUserWithEmailAndPassword(data.email, data.pass);
    };
    return (
        <div>
            <div className='background-style h-[30vh]'>
                <h1 className=' text-white text-4xl pt-32 pl-20 font-serif font-bold'>Register</h1>
            </div>

            <div className=' bg-secondary w-96 mx-auto my-20 p-10 rounded shadow'>
                <form className="form mb-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <input className=' bg-secondary w-full pl-3 py-2 border-b-5 border-accent'
                            type="text"
                            placeholder="Full name"
                            required
                            {...register("name")}
                        />
                        <hr />
                    </div>
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
                        Register
                    </button>
                </form>
                <Link to="/login" className=' hover:text-blue-500'>
                    Don't have an account? Create an account
                </Link>
            </div>
        </div>
    );
};

export default Register;