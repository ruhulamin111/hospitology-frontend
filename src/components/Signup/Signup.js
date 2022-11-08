import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Loading/Loading';
import auth from '../../firebase.init';

const Signup = () => {
    const [signInWithGoogle, gUser, gLoadding] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';
    if (gLoadding || loading) {
        return <Loading></Loading>
    }
    const onSubmit = (data) => {
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password)
    };
    if (user || gUser) {
        navigate(from, { replace: true })
    }

    return (
        <div className='flex justify-center pb-5 items-center'>
            <div className="card w-96 bg-base-100 shadow-xl pb-4">
                <div className="card-body items-center text-center">
                    <h2 className="card-title mb-4">Sign up</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email </span>
                            </label>
                            <input type="text" placeholder="Email" className="input input-bordered w-full "
                                {...register("email", {
                                    required: { value: true, message: 'Email is required' },
                                    pattern: { value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, message: 'Provide a valid email' }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: { value: true, message: 'Password is required' },
                                    pattern: { value: /(?=.*[!@#$%^&*])/, message: 'Password is at least one speacial character' }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt">{errors.password.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Confirm Password </span>
                            </label>
                            <input type="password" placeholder="Email" className="input input-bordered w-full max-w-xs"
                                {...register("confirmpassword", {
                                    required: { value: true, message: 'Confirm password is required' },
                                    pattern: { value: /(?=.*[!@#$%^&*])/, message: 'Password is not match' }
                                })}
                            />
                            <label className="label">
                                {errors.confirmpassword?.type === 'required' && <span className="label-text-alt">{errors.confirmpassword.message}</span>}
                                {errors.confirmpassword?.type === 'pattern' && <span className="label-text-alt">{errors.confirmpassword.message}</span>}
                            </label>
                        </div>

                        <input type='submit' value='Sign up' className="btn btn-neutral w-full mt-4"></input>
                    </form>

                    <p className='pt-2'>Have an account? <Link className='text-neutral' to='/signin'>Sign in please</Link></p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline btn-primary w-full" onClick={() => signInWithGoogle()} >Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;