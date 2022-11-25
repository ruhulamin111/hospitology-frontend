import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import CommonBanner from '../CommonBanner/CommonBanner';
import { FaFacebook, FaGoogle, FaPhone } from 'react-icons/fa';
import signin from '../../assets/login.jpg'
import { updateProfile } from 'firebase/auth';
import useToken from '../../hooks/useToken/useToken';

const Signin = () => {
    const [signInWithGoogle, gUser, gLoadding, gError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    const [token] = useToken(user || gUser)

    const from = location?.state?.from?.pathname || '/';
    let userError;
    if (gError || error) {
        userError = <p>{gError?.message || error?.message}</p>
    }
    if (gLoadding || loading) {
        return <Loading></Loading>
    }
    if (token) {
        navigate(from, { replace: true })
    }
    const onSubmit = async (data) => {
        console.log(data);
        if (data.password === data.confirmpassword) {
            await createUserWithEmailAndPassword(data.email, data.password)
            await updateProfile({ displayName: data.name })

        } else {
            userError = <p>Password dont't match</p>
        }
    };
    // if (user || gUser) {
    //     navigate(from, { replace: true })
    // }

    return (
        <section>
            <CommonBanner title={'Stay connect with us'} name={'Signup'} />

            <div className='lg:grid-cols-2 grid my-10 w-11/12 mx-auto gap-5 items-center'>
                <div className='p-10 text-black'>
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
                    <div className='bg-primary text-white w-full rounded-tl-lg py-4 text-center'>
                        <h2 className="text-2xl font-semibold">Sign up</h2>
                    </div>
                    <div className="card-body items-center text-center text-black">
                        <div className='flex gap-5'>
                            <p onClick={() => signInWithGoogle()} className='cursor-pointer text-md p-3 rounded-full border border-secondary hover:border-secondary hover:bg-secondary text-secondary duration-300 ease-in   hover:text-white'><FaGoogle /></p>
                            <p className='cursor-pointer text-md p-3 rounded-full border border-secondary hover:border-secondary hover:bg-secondary text-secondary duration-300 ease-in   hover:text-white'><FaFacebook /></p>
                            <p className='cursor-pointer text-md p-3 rounded-full border border-secondary hover:border-secondary hover:bg-secondary text-secondary duration-300 ease-in   hover:text-white'><FaPhone /></p>

                        </div>
                        {/* <p className='pt-2'>Don't Have an Account?
                            <Link className='text-primary' to='/signup'> Create One</Link>
                        </p> */}
                        <div className="divider">Or Sign up with</div>
                        <form onSubmit={handleSubmit(onSubmit)} className=' w-full'>
                            <div className="form-control ">
                                <label className="label">Name*</label>
                                <input type="text" placeholder="Name"
                                    className="input input-bordered w-full border-accent"
                                    {...register("name", {
                                        required: { value: true, message: 'Name is required' },
                                        // pattern: { value: /@[a-z]/, message: 'Provide your full name' }
                                    })}
                                />
                                <label className="label ">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 text-sm">{errors.name.message}</span>}
                                    {/* {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500 text-sm">{errors.name.message}</span>} */}
                                </label>
                            </div>

                            <div className="form-control ">
                                <label className="label">Email*</label>
                                <input type="text" placeholder="Email"
                                    className="input input-bordered w-full border-accent"
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
                                <label className="label">Password*</label>
                                <input type="password" placeholder="Password"
                                    className="input input-bordered w-full border-accent"
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

                            <div className="form-control ">
                                <label className="label">Confirm Password*</label>
                                <input type="password" placeholder="Confirm Password"
                                    className="input input-bordered w-full border-accent"
                                    {...register("confirmpassword", {
                                        required: { value: true, message: 'Confirm Password is required' },
                                        pattern: { value: /(?=.*[!@#$%^&*])/, message: 'Confirm Password is at least one speacial character' }
                                    })}
                                />
                                <label className="label">
                                    {errors.confirmpassword?.type === 'required' && <span className="label-text-alt text-red-500 text-sm">{errors.confirmpassword.message}</span>}
                                    {errors.confirmpassword?.type === 'pattern' && <span className="label-text-alt text-red-500 text-sm">{errors.confirmpassword.message}</span>}
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
                        <p className='pt-4'>Already Have An Account?
                            <Link className='text-primary' to='/signin'> Sign in</Link>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Signin;