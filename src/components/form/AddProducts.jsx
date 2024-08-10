import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { imageUpload } from "../../utils";

const AddProducts = () => {
    const { user } = useAuth() || {}

    const handleAddProduct = async (e) => {
        e.preventDefault();
        // console.log('ok')
        const form = e.target;
        const image_url = form.image.files[0]
        const image = await imageUpload(image_url)
        const title = form.title.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const descaption = form.descaption.value;
        const stockStatus = form.stockStatus.value;
        const discount= form.discount.value;
        const createAt = (new Date()).toDateString();
        const name = user.displayName;
        const email = user.email;
        const userImage = user.photoURL;
        
        const userInfo = {name,email,userImage}

      

        const info = {  image, title,brand,price,descaption,createAt,stockStatus,discount,userInfo };

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/product`, info)
            // console.log(data)
            if (data?.insertedId) {
                form.reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: " add Queries items ",
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
                title: " add Queries items faile",
                showConfirmButton: false,
                timer: 1500
            });
        }

    };
    return (
        <div>

            <div>

                <form onSubmit={handleAddProduct} className="card-body max-w-lg mx-auto border my-6 font-Inter capitalize">
                    <h1 className="text-3xl font-bold text-center">add scholarship</h1>
                    <div className="form-control">
                        <label htmlFor="title" className="label">
                            <span className="label-text">product title</span>
                        </label>
                        <input type="text" placeholder="type product name" name="title" id="title" className="input input-bordered" required
                            />

                    </div>
                    <div className="form-control">
                        <label htmlFor="brand" className="label">
                            <span className="label-text">brand Name</span>
                        </label>
                        <input type="text" placeholder="type your University Name" name="brand" id="text" className="input input-bordered" required
                           />

                    </div>
                    <div className="form-control">
                        <label htmlFor='image' className='block mb-2 text-sm'>
                            Select Image:
                        </label>
                        <input
                            required
                            type='file'
                            id='image'
                            name='image'
                            accept='image/*'
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="price" className="label">
                            <span className="label-text">product price</span>
                        </label>
                        <input type="number" placeholder="type product price" name="price" id="text" className="input input-bordered" required
                           />

                    </div>
                    <div className="form-control">
                        <label htmlFor="descaption" className="label">
                            <span className="label-text">product descaption</span>
                        </label>
                        <input type="text" placeholder="type product descaption" name="descaption" id="text" className="input input-bordered" required
                             />

                    </div>
                    <div className="form-control">
                        <label htmlFor="stockStatus" className="label">
                            <span className="label-text">stock Status</span>
                        </label>
                        <input type="text" placeholder="type product stock Status" name="stockStatus" id="rank" className="input input-bordered" required
                             />

                    </div>
                    <div className="form-control">
                        <label
                            className="block mt-4 mb-2 dark:text-white"
                            htmlFor="category"
                        >product  category
                        </label>
                        <select
                          
                            name="category"
                            id="category"
                            className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                            type="text"
                            placeholder="Select category"
                        >
                            <option value='mobile'>mobile</option>
                            <option value='computer'>computer</option>
                            <option value='laptop'>laptop</option>


                        </select>
                    </div>
                  
                  
                    <div className="form-control">
                        <label htmlFor="discount" className="label">
                            <span className="label-text"> product offer</span>
                        </label>
                        <input type="text" placeholder="type  product offer" name="discount" id="text" className="input input-bordered" required
                           />

                    </div>
                    
                    


                    <div className="form-control mt-6">
                    <input
                        className="inline-block w-full rounded bg-teal-500 mt-4 px-4 py-3 text-sm font-medium text-white transition  focus:outline-none focus:ring active:bg-indigo-500"
                        type="submit"
                        value="Add product"
                    />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;