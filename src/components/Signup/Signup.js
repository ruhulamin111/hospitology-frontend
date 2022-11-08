import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import CommonBanner from '../CommonBanner/CommonBanner';
import { FaFacebook, FaGoogle, FaPhone } from 'react-icons/fa';
import signin from '../../assets/login.jpg'

const Signin = () => {
    const [signInWithGoogle, gUser, gLoadding, gError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';
    let userError;
    if (gError || error) {
        userError = <p>{gError?.message || error?.message}</p>
    }
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
        <section>
            <CommonBanner />

            <div className='lg:grid-cols-2 grid my-10 w-11/12 mx-auto gap-5'>
                <div className='p-10'>
                    <div>
                        <h1 className='text-3xl font-bold mb-5 text-secondary'>A Modern approach to <br />
                            primary care</h1>
                        <div className='flex gap-5 mb-5'>
                            <img className='h-16' src={signin} alt="" />
                            <div>
                                <h2 className='text-lg mb-2 font-bold'>Primary care for all ages</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eveniet beatae natus quidem ipsam rerum?</p>
                            </div>
                        </div>
                        <div className='flex gap-5 mb-5'>
                            <img className='h-16' src={signin} alt="" />
                            <div>
                                <h2 className='text-lg mb-2 font-bold'>Primary care for all ages</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eveniet beatae natus quidem ipsam rerum?</p>
                            </div>
                        </div>
                        <div className='flex gap-5 mb-5'>
                            <img className='h-16' src={signin} alt="" />
                            <div>
                                <h2 className='text-lg mb-2 font-bold'>Primary care for all ages</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eveniet beatae natus quidem ipsam rerum?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card lg:w-full shadow-xl ">
                    <div className='bg-primary text-white w-full rounded-tl-lg py-2 text-center'>
                        <h2 className="text-2xl font-semibold">Sign up</h2>
                        <h3 className="text-lg">Stay connect with us</h3>
                    </div>

                    <div className="card-body items-center text-center">
                        <form onSubmit={handleSubmit(onSubmit)} className=' w-full'>
                            <div className="form-control ">
                                <label className="label">Email</label>
                                <input type="text" placeholder="Email"
                                    className="input input-bordered w-full "
                                    {...register("email", {
                                        required: { value: true, message: 'Email is required' },
                                        pattern: { value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, message: 'Provide a valid email' }
                                    })}
                                />
                                <label className="label ">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 text-sm">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 text-sm">{errors.email.message}</span>}
                                </label>
                            </div>

                            <div className="form-control ">
                                <label className="label">Password</label>
                                <input type="password" placeholder="Password"
                                    className="input input-bordered w-full "
                                    {...register("password", {
                                        required: { value: true, message: 'Password is required' },
                                        pattern: { value: /(?=.*[!@#$%^&*])/, message: 'Password is at least one speacial character' }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 text-sm">{errors.password.message}</span>}
                                    {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500 text-sm">{errors.password.message}</span>}
                                </label>
                            </div>
                            <div className='flex justify-between'>
                                <div className='cursor-pointer '>
                                    <input type="checkbox" name="" id="" className='mr-2' />
                                    <span>Remember me</span>
                                </div>
                                <div className='cursor-pointer'>
                                    <span>Forgot password?</span>
                                </div>
                            </div>
                            <input type='submit' value='Sign up' className="btn btn-primary w-full text-white mt-5"></input>
                            {userError}
                        </form>

                        <div className="divider">Or Sign up With</div>
                        {/* <button className="btn btn-outline btn-primary w-full" onClick={() => signInWithGoogle()} >Continue with google</button> */}

                        {/* <Link to='/' className='text-md p-3 rounded-full border border-primary hover:border-secondary hover:bg-secondary duration-300 ease-in   hover:text-white'><FaGoogle /></Link> */}
                        <div className='flex gap-5'>
                            <p onClick={() => signInWithGoogle()} className='cursor-pointer text-md p-3 rounded-full border border-primary hover:border-secondary hover:bg-secondary duration-300 ease-in   hover:text-white'><FaGoogle /></p>
                            <p className='cursor-pointer text-md p-3 rounded-full border border-primary hover:border-secondary hover:bg-secondary hover:text-white duration-300 ease-in '><FaFacebook /></p>
                            <p className='cursor-pointer text-md p-3 rounded-full border border-primary hover:border-secondary hover:bg-secondary hover:text-white duration-300 ease-in '><FaPhone /></p>
                        </div>
                        <p className='pt-2'>Already Have An Account?
                            <Link className='text-secondary' to='/signin'> Sign in</Link>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Signin;