import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../components/layer/Container";
import Bredcumb from "../components/layer/Bredcumb";
import Button01 from "../components/layer/Button01";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import PasswordResetModal from "../components/modal/PasswordResetModal";


const Login = () => {
    const { signIn,resetPassword, setLoading } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    const from = location?.state || '/'



    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        try {
             await signIn(email, password)
            // dispatch(loginUser(formData))
            navigate(from)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: " login Successful ",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (err) {
            setLoading(false)
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "login Error",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }
    return (
        <div>
            <Container className='mx-6'>
                <Bredcumb></Bredcumb>
                <div>
                    <p className='mt-20 max-w-[644px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{`'`}s standard dummy text ever since the.
                    </p>
                    <div className='mt-10 border-b pb-10'>
                        <h2 className='text-3xl font-bold mb-10'>Returning Customer</h2>

                        <div className='flex flex-wrap gap-x-10 gap-y-6'>
                            <form onSubmit={handleSubmit} action="">
                                <div className={`border-b w-[508px]`}>
                                    <label className='font-bold' htmlFor='email'>Email address</label>
                                    <input id='email' name='email' className='block w-full pb-4 mt-4 outline-none' type='email' placeholder='your Email address' />
                                </div>
                                <div className={`border-b w-[508px]`}>
                                    <label className='font-bold' htmlFor='password'>Password</label>
                                    <input id='password' name='password' className='block w-full pb-4 mt-4 outline-none' type='Password' placeholder='Password' />
                                </div>
                                <button className=" mt-7 py-4 px-10 border border-[#262626] text-[#262626] hover:border-[#262626] hover:text-white hover:bg-[#262626] transition-all duration-500 ease-in-out" type="submit">login</button>
                            </form>


                        </div>
                        {/* <Button02 className=' mt-7' text='Log in'></Button02> */}
                        <div className="flex justify-end w-[508px]"> <button onClick={()=>setIsOpen(!isOpen)} className="text-red-600 uppercase border border-red-600 p-2" >forget password</button></div>
                       <PasswordResetModal isOpen={isOpen} setIsOpen={setIsOpen}></PasswordResetModal>
                    </div>
                    <div className='mt-10 mb-[140px]'>
                        <h2 className='text-3xl font-bold mb-[38px]'>New Customer</h2>
                        <p className=' max-w-[644px]'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{`'`}s standard dummy text ever since the.
                        </p>
                        <Link to='/registation' >  <Button01 className='mt-[50px]' text='Continue'></Button01> </Link>
                    </div>


                </div>
            </Container>
        </div>
   
    );
};

export default Login;