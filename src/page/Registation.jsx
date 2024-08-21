import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../hooks/useAuth'

import toast from 'react-hot-toast';
// import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from '../utils/index';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoMdEyeOff } from 'react-icons/io';
import useAxiosCommon from '../hooks/useAxiosCommon';
import Image from '../components/layer/Image';
import Container from '../components/layer/Container';
import Bredcumb from '../components/layer/Bredcumb';
import Inputbox from '../components/layer/Inputbox';
import Input from '../components/layer/Input';
import Button01 from '../components/layer/Button01';
const Registation = () => {
    const { user } = useAuth()
    const [showpassword, setshowpassword] = useState(null)
    const axiosCommon = useAxiosCommon()
    const navigate = useNavigate()
    const { createUser, signInWithGoogle, updateUserProfile, loading, setLoading } = useAuth()
    const handleSubmit = async e => {
        e.preventDefault()

        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const image = form.image.files[0]
        const image_url = await imageUpload(image)
        const userinfo = {
            name: name,
            email: email,
            image: image_url,
            role: 'user',
            status: 'verified',
        }

        if (password.length < 6) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "password must have a  6 letter",
                showConfirmButton: false,
                timer: 1500
            });
            //toast.error('error.message')
            return
        }
        if (/[A-Z]/.test(password)) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "password don't have a capital letter",
                showConfirmButton: false,
                timer: 1500
            });
            //toast.error("password must have a  uppercase  letter")
            return
        }

        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "password don't have a special character",
                showConfirmButton: false,
                timer: 1500
            });
            //toast.error('password must have a capital letter')
            return
        }


        try {
            setLoading(true)
            // 1. Upload image and get image url
            const image_url = await imageUpload(image)

            //2. user ragistration
            const result = await createUser(email, password)
            //2. update user profile
            await updateUserProfile(name, image_url)
            // const userinfo = {
            //     name:user? user?.displayName:name,
            //     email:user? user?.email:email,
            //     image:user? user?.photoURL : image_url,
            //     role: 'user',
            //     status: 'verified',
            // }
            axiosCommon.put(`/user`, userinfo)
                .then(res => {
                    toast.success('signup Successful')
                })
            navigate('/')

        }
        catch (err) {
            console.log(err);
            setLoading(false)
            toast.error(err.message)
        }



    }
    const handleGoogleSignIn = async () => {

        try {
            setLoading(true)
            await signInWithGoogle()

            //  user info save in database
            const userinfo = {
                name: user?.displayName,
                email: user?.email,
                image: user?.photoURL,
                role: 'user',
                status: 'verified',
            }
            axiosCommon.put(`/user`, userinfo)
                .then(res => {
                    toast.success('signup Successful')
                })

            navigate('/')
            toast.success('signup Successful')
        }
        catch (err) {
            setLoading(false)
            toast.error(err.message)
        }
    }

    // ......................

    let Division = ["Barishal", "Chattogram", "Dhaka", "Khulna", "Rajshahi", "Rangpur", "Mymensingh", "Sylhet"]


    const District = [
        "Bandarban",
        "Barguna",
        "Barisal",
        "B Brahmanbaria",
        "Brahmanbaria",
        "Chandpur",
        "Chandpur",
        "Chattogram",
        "Chuadanga",
        "Cox's Bazar",
        "Dhaka",
        "Dinajpur",
        "Faridpur",
        "Feni",
        "Gaibandha",
        "Gazipur",
        "Gopalganj",
        "Habiganj",
        "Halda",
        "Jamalpur",
        "Jashore",
        "Jatiyo",
        "Jhalokati",
        "Jhenaidah",
        "Joypurhat",
        "Khagrachari",
        "Khulna",
        "Kishoreganj",
        "Kurigram",
        "Kushtia",
        "Lalmonirhat",
        "Madaripur",
        "Magura",
        "Manikganj",
        "Meherpur",
        "Moulvibazar",
        "Mymensingh",
        "Naogaon",
        "Narail",
        "Narayanganj",
        "Narsingdi",
        "Narsingdi",
        "Natore",
        "Netrokona",
        "Nilphamari",
        "Noakhali",
        "Pabna",
        "Panchagarh",
        "Patuakhali",
        "Patuakhali",
        "Pirojpur",
        "Rajbari",
        "Rajshahi",
        "Rangamati",
        "Rangpur",
        "Satkhira",
        "Shariatpur",
        "Sherpur",
        "Sirajganj",
        "Sunamganj",
        "Sylhet",
        "Tangail",
        "Thakurgaon"
    ];

    return (
        <div>
            <Container className='px-6'>
                <Bredcumb></Bredcumb>
                <div>
                    <p className='mt-20 max-w-[644px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                    </p>
                    <div className='mt-10 border-b pb-10'>
                        <h2 className='text-3xl font-bold mb-10'>Your Personal Details</h2>

                        <div className='flex flex-wrap gap-x-10 gap-y-6'>
                            <Input LabelText='First Name' placeholder='First Name' type='text' id='FirstName' className='w-[508px]' />
                            <Input LabelText='Last Name' placeholder='Last Name' type='text' id='LastName' className='w-[508px]' />
                            <Input LabelText='Email address' placeholder='company@domain.com' type='Email' id='Emailaddress' className='w-[508px]' />
                            <Input LabelText='Telephone' placeholder='Your phone number' type='number' id='Telephone' className='w-[508px]' />
                        </div>

                    </div>

                    <div className='mt-10  border-b pb-10'>
                        <h2 className='text-3xl font-bold mb-10'>New Customer</h2>

                        <div className='flex flex-wrap gap-x-10 gap-y-6'>
                            <Input LabelText='Address 1' placeholder='4279 Zboncak Port Suite 6212' type='text' id='Address1' className='w-[508px]' />
                            <Input LabelText='Address 2' placeholder='—' type='text' id='Address2' className='w-[508px]' />
                            <Input LabelText='City' placeholder='Your city' type='text' id='City' className='w-[508px]' />
                            <Input LabelText='Post Code' placeholder='05228' type='number' id='05228' className='w-[508px]' />



                            <div className='border-b w-[508px]'>
                                <label className='font-bold' htmlFor='Division'>Division</label>
                                <select className='block w-full pb-4 mt-4 outline-none' id="Division">
                                    <option value="Please select">Please select</option>
                                    {
                                        Division.map((item, index) => (
                                            <option key={index} value={item}>{item}</option>
                                        ))
                                    }
                                </select>
                            </div>


                            <div className='border-b w-[508px]'>
                                <label className='font-bold' htmlFor='District'>District</label>
                                <select className='block w-full pb-4 mt-4 outline-none' id="Division">
                                    <option value="Please select">Please select</option>
                                    {
                                        District.map((item, index) => (
                                            <option key={index} value={item}>{item}</option>
                                        ))
                                    }
                                </select>
                            </div>

                        </div>

                    </div>

                    <div className='mt-10  border-b pb-10'>
                        <h2 className='text-3xl font-bold mb-10'>Your Password</h2>
                        <div className='flex flex-wrap gap-x-10 gap-y-6'>
                            <Input LabelText='Password' placeholder='Password' type='password' className='w-[508px]' />
                            <Input LabelText='Repeat Password' placeholder='Repeat Password' type='password' id='Repeatpassword' className='w-[508px]' />

                        </div>
                    </div>
                    <div>
                        <input type="checkbox" className='mt-16' id="vehicle1" name="vehicle1" value="Bike" />
                        <label htmlFor="vehicle1" className='text-[#767676] text-sm '> I have read and agree to the Privacy Policy</label>

                        <div className='mt-6'>
                           <h3 className='text-[#767676] text-sm inline-block mr-4'>Subscribe Newsletter</h3>
                            <input className='mr-4' type="radio" name="gender" id="male" />
                            <label className='mr-4' htmlFor="male">Yes</label>
                            <input className='mr-4' type="radio" name="gender" id="famale" />
                            <label htmlFor="famale">No</label>
                           
                        </div>
                        <Button01 className='mt-7 block' text='log in'></Button01>
                    </div>

                </div>
            </Container>
        </div>
        // <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        //     <div className="w-1/2">
        //         <Image src='/card-4.jpg'></Image>
        //     </div>
        //     <div className='w-1/2 flex flex-col  p-6  sm:p-10 bg-white  text-gray-900'>
        //         <div className='mb-8 text-center'>
        //             <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
        //             <p className='text-sm text-gray-400'>Welcome to Gericht</p>
        //         </div>
        //         <form
        //             onSubmit={handleSubmit}
        //             className='space-y-6 ng-untouched ng-pristine ng-valid'
        //         >
        //             <div className='space-y-4'>
        //                 <div>
        //                     <label htmlFor='name' className='block mb-2 text-sm'>
        //                         Name
        //                     </label>
        //                     <input
        //                         type='text'
        //                         name='name'
        //                         id='name'
        //                         placeholder='Enter Your Name Here'
        //                         className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
        //                         data-temp-mail-org='0'
        //                     />
        //                 </div>
        //                 <div>
        //                     <label htmlFor='image' className='block mb-2 text-sm'>
        //                         Select Image:
        //                     </label>
        //                     <input
        //                         required
        //                         type='file'
        //                         id='image'
        //                         name='image'
        //                         accept='image/*'
        //                     />
        //                 </div>
        //                 <div>
        //                     <label htmlFor='email' className='block mb-2 text-sm'>
        //                         Email address
        //                     </label>
        //                     <input
        //                         type='email'
        //                         name='email'
        //                         id='email'
        //                         required
        //                         placeholder='Enter Your Email Here'
        //                         className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
        //                         data-temp-mail-org='0'
        //                     />
        //                 </div>
        //                 <div>
        //                     <div className='flex justify-between'>
        //                         <label htmlFor='password' className='text-sm mb-2'>
        //                             Password
        //                         </label>
        //                     </div>
        //                     <div className="flex items-center gap-x-2 relative">
        //                         <input
        //                             type={showpassword ? "text" : "password"}
        //                             name='password'
        //                             autoComplete='new-password'
        //                             id='password'
        //                             required
        //                             placeholder='*******'
        //                             className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
        //                         />
        //                         <span className="absolute right-3" onClick={() => setshowpassword(!showpassword)}>
        //                             {showpassword ? <FaEye className="text-gray-900"></FaEye> : <IoMdEyeOff className="text-gray-900"></IoMdEyeOff>}
        //                         </span>
        //                     </div>

        //                 </div>
        //             </div>

        //             <div>
        //                 <button
        //                     disabled={loading}
        //                     type='submit'
        //                     className=' bg-[#95f0bc] capitalize w-full rounded-md py-3 '
        //                 >
        //                     sign up
        //                 </button>
        //             </div>
        //         </form>
        //         <div className='flex items-center pt-4 space-x-1'>
        //             <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        //             <p className='px-3 text-sm dark:text-gray-400'>
        //                 Signup with social accounts
        //             </p>
        //             <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        //         </div>
        //         <button
        //             disabled={loading}
        //             onClick={handleGoogleSignIn}
        //             className='disabled:cursor-not-allowed flex justify-center  items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
        //             <FcGoogle size={32} />

        //             <p>Continue with Google</p>
        //         </button>
        //         <p className='px-6 text-sm text-center text-gray-400'>
        //             Already have an account?{' '}
        //             <Link
        //                 to='/login'
        //                 className='hover:underline hover:text-rose-500 text-gray-600'
        //             >
        //                 Login
        //             </Link>
        //             .
        //         </p>
        //     </div>
        // </div>
    );
};

export default Registation;