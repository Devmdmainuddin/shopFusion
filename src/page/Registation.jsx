import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import toast from 'react-hot-toast';
import useAxiosCommon from '../hooks/useAxiosCommon';
import Container from '../components/layer/Container';
import Bredcumb from '../components/layer/Bredcumb';
import Button01 from '../components/layer/Button01';
// import Input from '../components/layer/Input';
// import { imageUpload } from '../utils/index';
// import Swal from 'sweetalert2';
// import { useState } from 'react';
// import { FaEye } from 'react-icons/fa';
// import { IoMdEyeOff } from 'react-icons/io';
// import { CgLaptop } from 'react-icons/cg';
// import Image from '../components/layer/Image';
// import Inputbox from '../components/layer/Inputbox';
// import { TbFidgetSpinner } from "react-icons/tb";
// import { FcGoogle } from 'react-icons/fc'






const Registation = () => {
    const { user } = useAuth()
    // const [showpassword, setshowpassword] = useState(null)
    const axiosCommon = useAxiosCommon()
    const navigate = useNavigate()
    const { createUser, signInWithGoogle, updateUserProfile, loading, setLoading } = useAuth()
   
    const handleSubmit = async e => {
        e.preventDefault()

        const form = e.target
        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const name = firstName + lastName
        const email = form.email.value
        const telephone = form.telephone.value
        const password = form.password.value
        // const repeatPassword = form.repeatPassword.value
        // const image = form.image.files[0]
        // const image_url = await imageUpload(image)
        const address01 = form.address01.value
        const address02 = form.address02.value
        const city = form.city.value
        const postCode = form.postCode.value
        const dividion = form.city.value
        const district = form.postCode.value

        const userinfo = {
            name: name,
            email: email,
            // image: image_url,
            telephone: telephone,
            address01: address01,
            address02: address02,
            city: city,
            postCode: postCode,
            dividion: dividion,
            district: district,
            role: 'user',
            status: 'verified',
        }
        console.log(userinfo);
        // if (password.length < 6) {
        //     Swal.fire({
        //         position: "top-end",
        //         icon: "error",
        //         title: "password must have a  6 letter",
        //         showConfirmButton: false,
        //         timer: 1500
        //     });
        //     //toast.error('error.message')
        //     return
        // }
        // if (password !== repeatPassword) {
        //     Swal.fire({
        //         position: "top-end",
        //         icon: "error",
        //         title: "password don't metch",
        //         showConfirmButton: false,
        //         timer: 1500
        //     });
        //     //toast.error('password must have a capital letter')
        //     return
        // }


        // if (/[A-Z]/.test(password)) {
        //     Swal.fire({
        //         position: "top-end",
        //         icon: "error",
        //         title: "password don't have a capital letter",
        //         showConfirmButton: false,
        //         timer: 1500
        //     });
        //     //toast.error("password must have a  uppercase  letter")
        //     return
        // }

        // if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        //     Swal.fire({
        //         position: "top-end",
        //         icon: "error",
        //         title: "password don't have a special character",
        //         showConfirmButton: false,
        //         timer: 1500
        //     });
        //     //toast.error('password must have a capital letter')
        //     return
        // }


        try {
            setLoading(true)

            // const image_url = await imageUpload(image)
            const result = await createUser(email, password)

            // await updateUserProfile(name, image_url)
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
    // const handleGoogleSignIn = async () => {

    //     try {
    //         setLoading(true)
    //         await signInWithGoogle()

    //         //  user info save in database
    //         const userinfo = {
    //             name: user?.displayName,
    //             email: user?.email,
    //             image: user?.photoURL,
    //             role: 'user',
    //             status: 'verified',
    //         }
    //         axiosCommon.put(`/user`, userinfo)
    //             .then(res => {
    //                 toast.success('signup Successful')
    //             })

    //         navigate('/')
    //         toast.success('signup Successful')
    //     }
    //     catch (err) {
    //         setLoading(false)
    //         toast.error(err.message)
    //     }
    // }


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
                    <form onSubmit={handleSubmit} action="">
                        <div className='mt-10 border-b pb-10'>
                            <h2 className='text-3xl font-bold mb-10'>Your Personal Details</h2>

                            <div className='flex flex-wrap gap-x-10 gap-y-6'>

                                <div className={`border-b w-full md:w-[508px]`}>
                                    <label className='font-bold' htmlFor='firstName'>First Name</label>
                                    <input
                                        name='firstName'
                                        id=''
                                        className='block w-full pb-4 mt-4 outline-none'
                                        type='text'
                                        placeholder='First Name' />
                                </div>
                                <div className={`border-b w-full md:w-[508px]`}>
                                    <label className='font-bold' htmlFor='lastName'>Last Name</label>
                                    <input
                                        name='lastName'
                                        id=''
                                        className='block w-full pb-4 mt-4 outline-none'
                                        type='text'
                                        placeholder='Last Name' />
                                </div>

                                <div className={`border-b w-full md:w-[508px]`}>
                                    <label className='font-bold' htmlFor='email'>Email</label>
                                    <input
                                        name='email'
                                        id=''
                                        className='block w-full pb-4 mt-4 outline-none'
                                        type='email'
                                        placeholder='Email' />
                                </div>
                                <div className={`border-b w-full md:w-[508px]`}>
                                    <label className='font-bold' htmlFor='telephone'>Telephone</label>
                                    <input
                                        name='telephone'
                                        id=''
                                        className='block w-full pb-4 mt-4 outline-none'
                                        type='number'
                                        placeholder='Your phone number' />
                                </div>


                                {/* <Input name='firstName' LabelText='First Name' placeholder='First Name' type='text' id='FirstName' className=' w-full md:w-[508px]' />
                                <Input name='lastName' LabelText='Last Name' placeholder='Last Name' type='text' id='LastName' className='w-full md:w-[508px]' />
                                <Input name='email' LabelText='Email address' placeholder='company@domain.com' type='Email' id='Emailaddress' className='w-full md:w-[508px]' />
                                <Input name='telephone' LabelText='Telephone' placeholder='Your phone number' type='number' id='Telephone' className='w-full md:w-[508px]' />
                             */}
                            </div>

                        </div>

                        <div className='mt-10  border-b pb-10'>
                            <h2 className='text-3xl font-bold mb-10'>New Customer</h2>

                            <div className='flex flex-wrap gap-x-10 gap-y-6'>
                                <div className={`border-b w-full md:w-[508px]`}>
                                    <label className='font-bold' htmlFor='address01'>Address 1</label>
                                    <input
                                        name='address01'
                                        id='address01'
                                        className='block w-full pb-4 mt-4 outline-none'
                                        type='text'
                                        placeholder='4279 Zboncak Port Suite 6212' />
                                </div>
                                <div className={`border-b w-full md:w-[508px]`}>
                                    <label className='font-bold' htmlFor='address02'>Address 2</label>
                                    <input
                                        name='address02'
                                        id='address02'
                                        className='block w-full pb-4 mt-4 outline-none'
                                        type='text'
                                        placeholder='4279 Zboncak --' />
                                </div>
                                <div className={`border-b w-full md:w-[508px]`}>
                                    <label className='font-bold' htmlFor='city'>city</label>
                                    <input
                                        name='city'
                                        id='city'
                                        className='block w-full pb-4 mt-4 outline-none'
                                        type='text'
                                        placeholder='Your city' />
                                </div>
                                <div className={`border-b w-full md:w-[508px]`}>
                                    <label className='font-bold' htmlFor='postCode'>postCode</label>
                                    <input
                                        name='postCode'
                                        id='postCode'
                                        className='block w-full pb-4 mt-4 outline-none'
                                        type='number'
                                        placeholder='Your postCode' />
                                </div>

                                {/* <Input name='address01' LabelText='Address 1' placeholder='4279 Zboncak Port Suite 6212' type='text' id='Address1' className=' w-full md:w-[508px]' />
                                <Input name='address02' LabelText='Address 2' placeholder='—' type='text' id='Address2' className=' w-full md:w-[508px]' />
                                <Input name='city' LabelText='City' placeholder='Your city' type='text' id='City' className=' w-full md:w-[508px]' />
                                <Input name='postCode' LabelText='Post Code' placeholder='05228' type='number' id='05228' className=' w-full md:w-[508px]' /> */}



                                <div className='border-b w-full md:w-[508px]'>
                                    <label className='font-bold' htmlFor='Division'>Division</label>
                                    <select name='dividion' className='block w-full pb-4 mt-4 outline-none' id="Division">
                                        <option value="Please select">Please select</option>
                                        {
                                            Division.map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </div>


                                <div className='border-b w-full md:w-[508px]'>
                                    <label className='font-bold' htmlFor='District'>District</label>
                                    <select name='district' className='block w-full pb-4 mt-4 outline-none' id="district">
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
                                <div className={`border-b w-full md:w-[508px]`}>
                                    <label className='font-bold' htmlFor='password'>password</label>
                                    <input
                                        name='password'
                                        id='password'
                                        className='block w-full pb-4 mt-4 outline-none'
                                        type='password'
                                        placeholder='Your password' />
                                </div>
                                {/* <Input name='password' LabelText='Password' placeholder='Password' type='password' className='w-full md:w-[508px]' />
                                <Input name='repeatPassword' LabelText='Repeat Password' placeholder='Repeat Password' type='password' id='Repeatpassword' className='w-full md:w-[508px]' /> */}

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
                    </form>


                </div>
            </Container>
        </div>
        
    );
};

export default Registation;