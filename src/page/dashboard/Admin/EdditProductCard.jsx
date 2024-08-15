import axios from "axios";
import Swal from "sweetalert2";
import { imageUpload } from "../../../utils";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

const EdditProductCard = () => {

    const product = useLoaderData();
console.log(product);
    // const axiosSecure = useAxiosSecure()
    // const { mutateAsync } = useMutation({
    //     mutationFn: async updateData => {
    //         const { data } = await axiosSecure.put(`/ScholarShips/${sholarship._id}`, updateData)
    //         return data
    //     },
    //     onSuccess: () => {

    //         Swal.fire({
    //             position: "top-end",
    //             icon: "success",
    //             title: "Your items has been Edit",
    //             showConfirmButton: false,
    //             timer: 1500
    //         });
    //     }
    // })


    const handleEdditProduct = async (e) => {
        e.preventDefault();
        // console.log('ok')
        const form = e.target;
        // const image_url = form.image.files[0]
        // const image = await imageUpload(image_url)
        const title = form.title.value;
        const category = form.category.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const descaption = form.descaption.value;
        const stockStatus = form.stockStatus.value;
        const discount = form.discount.value;
        const update = (new Date()).toDateString();
        // const name = user.displayName;
        // const email = user.email;
        // const userImage = user.photoURL;

        // const userInfo = { name, email, userImage }



        const info = {  title, brand, price, descaption,category, update, stockStatus, discount };

        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/updateproduct/${product._id}`, info)
            // console.log(data)
            if (data?.insertedId) {
                form.reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: " update product successfuly ",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        catch (err) {
            // console.log(err)
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " update product items faile",
                showConfirmButton: false,
                timer: 1500
            });
        }

    };
    return (
        <div className="">



            <form onSubmit={handleEdditProduct} className="w-full md:w-[450px] mx-auto  px-8   border my-6  capitalize">
                <h1 className="text-3xl font-bold text-center">update product</h1>
                <div className="mt-9">
                    <div className="flex flex-col">
                        <label htmlFor="title" className="">
                            <span className="">product title</span>
                        </label>
                        <input type="text" placeholder="type product name" defaultValue={product.title} name="title" id="title" className="  py-2 px-4 border-none outline-none rounded-md" required
                        />

                    </div>
                    <div className="flex flex-col mt-3">
                        <label htmlFor="brand" className="">
                            <span className="">brand Name</span>
                        </label>
                        <input type="text" placeholder="type your University Name"defaultValue={product.brand} name="brand" id="text" className="  py-2 px-4 border-none outline-none rounded-md" required
                        />

                    </div>
                    {/* <div className="flex flex-col mt-3">
                        <label htmlFor='image' className='block mb-2 text-sm'>
                            Select Image:
                        </label>
                        <input
                           
                            type='file'
                            id='image'
                            
                            name='image'
                            className="w-full block py-2 px-4 bg-white border-none outline-none rounded-md"
                            accept='image/*'
                        />
                    </div> */}
                    <div className="flex flex-col mt-3" >
                        <label htmlFor="price" className="">
                            <span className="">product price</span>
                        </label>
                        <input type="number" placeholder="type product price" defaultValue={product.price} name="price" id="price" className="  py-2 px-4 border-none outline-none rounded-md" required
                        />

                    </div>
                    <div className="flex flex-col items-start mt-3">
                        <label htmlFor="descaption" className="">
                            <span className="">product descaption</span>
                        </label>
                        <input type="text" placeholder="type product descaption" defaultValue={product.descaption} name="descaption" id="text" className="w-full  py-2 px-4 border-none outline-none rounded-md" required
                        />

                    </div>
                    <div className="flex flex-col mt-3">
                        <label htmlFor="stockStatus" className="">
                            <span className="">stock Status</span>
                        </label>
                        <input type="text" defaultValue={product.stockStatus} placeholder="type product stock Status" name="stockStatus" id="rank" className=" inline-block  py-2 px-4 border-none outline-none rounded-md" required
                        />

                    </div>
                    <div className="flex flex-col mt-3">
                        <label
                            className="block mt-4 mb-2 dark:text-white"
                            htmlFor="category"
                        >product  category
                        </label>
                        <select

                            name="category"
                            id="category"
                            className=" py-2 px-4 border-none outline-none rounded-md"
                            type="text"
                            placeholder="Select category"
                        >
                            <option value='mobile'>mobile</option>
                            <option value='computer'>computer</option>
                            <option value='laptop'>laptop</option>


                        </select>
                    </div>
                    <div className="flex flex-col mt-3">
                        <label htmlFor="discount" className="">
                            <span className=""> product offer</span>
                        </label>
                        <input type="text" placeholder="type  product offer" defaultValue={product.discount} name="discount" id="text" className=" py-2 px-4 border-none outline-none rounded-md" required
                        />

                    </div>
                    <div className="flex flex-col mt-3">
                        <input
                            className="inline-block  rounded bg-teal-500 mt-4 px-4 py-3 text-sm font-medium text-white transition  focus:outline-none focus:ring active:bg-indigo-500"
                            type="submit"
                            
                            value="Add product"
                        />
                    </div>
                </div>

            </form>

        </div>
    );
};

export default EdditProductCard;