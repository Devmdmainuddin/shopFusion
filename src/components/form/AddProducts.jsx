import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { imageUpload } from "../../utils";
import { useAddProductMutation } from "../../services/productApi";


// const InputFilds = ({ laberText, placeholder, type, name }) => {
//     return <div className={`border-b w-full md:w-[508px] border-[#73dcf9]`}>
//         <label className='font-bold uppercase' htmlFor={name}>{laberText}</label>
//         <input
//             name={name}
//             id=''
//             className='block w-full pb-4 mt-4 outline-none bg-transparent'
//             type={type}
//             placeholder={placeholder} />
//     </div>
// }
const AddProducts = () => {
    const { user } = useAuth() || {}
    const [addProduct]=useAddProductMutation()


    const handleAddProduct = async (e) => {
        e.preventDefault();
        // console.log('ok')
        const form = e.target;

        const thumbnailImage = form.thumbnail.files[0]
        const thumbnail = await imageUpload(thumbnailImage)
        const image_url = form.image.files[0]
        const image = await imageUpload(image_url)
        const title = form.title.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const descaption = form.descaption.value;
        const dimensions = form.dimensions.value;
        const price = form.price.value;
        const discount = form.discount.value;
        const availability_status = form.availability_status.value;
        const minimum_order_quantity = form.minimum_order_quantity.value;
        const return_policy = form.return_policy.value;
        const weight = form.weight.value;
        const warranty_information = form.warranty_information.value
        const shipping_cost = form.shipping_cost.value;
        const stock_levels = form.stock_levels.value;
        const tag01 = form.tag01.value;
        const tag02 = form.tag02.value;
        const tag03 = form.tag03.value;
        const tag04 = form.tag04.value;
        const createAt = (new Date()).toDateString();
        const name = user?.displayName;
        const email = user?.email;
        const userImage = user?.photoURL;
        const userInfo = { name, email, userImage }

        const info = { 
            thumbnail,
            image, 
            title, 
            brand, 
            price, 
            descaption, 
            category, 
            createAt,
            availability_status,
            minimum_order_quantity, 
            return_policy,
            shipping_information:{
                weight,
                dimensions,
                shipping_cost
            },
            stock_levels,
            tags:{
                tag01,
                tag02,
                tag03,
                tag04
            },
            warranty_information,
            discount,
            dimensions, 
            userInfo };
            console.log(info);

        try {
            await addProduct(info)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: " create product  ",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
        }
        catch (err) {
            // console.log(err)
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: " create product items faile",
                showConfirmButton: false,
                timer: 1500
            });
        }

    };
    return (
        <div className="">


            <form action="" onSubmit={handleAddProduct} className="px-8">

                <div className='mt-10 border-b pb-10'>
                    <h2 className='text-3xl font-bold mb-10 uppercase'>add product</h2>

                    <div className='flex flex-wrap gap-x-10 gap-y-6'>
                        {/* title */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='title'>title</label>

                            <input
                                name='title'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='text'
                                multiple
                                placeholder='title ' />
                        </div>
                        {/* brand */}
                        <div className="border-b w-full md:w-[408px] border-[#73dcf9]">
                            <label htmlFor="brand" className='font-bold uppercase'>brand</label>
                            <select name="brand" id="" className='block w-full mt-4  outline-none bg-transparent '>

                                <option value="FlexFit">FlexFit</option>
                                <option value="h&m">h&m</option>
                                <option value="ChefMaster">ChefMaster</option>
                                <option value="WristTech">WristTech</option>
                                <option value="ComfyChair">ComfyChair</option>

                            </select>
                        </div>
                        {/* category */}
                        <div className="border-b w-full md:w-[408px] border-[#73dcf9]">
                            <label htmlFor="category" className='font-bold uppercase'>category</label>
                            <select name="category" id="" className='block w-full mt-4  outline-none bg-transparent '>
                                <option value="Health & Beauty">Health & Beauty</option>
                                <option value="furniture">furniture</option>
                                <option value="groceries">groceries</option>
                                <option value="Women's & Girls' Fashion">Women{`'`}s & Girls{`'`} Fashion</option>
                                <option value="Men's & Boys' Fashion">Men{`'`}s & Boys{`'`} Fashion</option>
                                <option value="Electronic Accessories">Electronic Accessories</option>
                                <option value="Home & Lifestyle">Home & Lifestyle</option>
                                <option value="Watches, Bags, Jewellery">Watches, Bags, Jewellery</option>
                                <option value="TV & Home Appliances">TV & Home Appliances</option>
                                <option value="Mother & Baby">Mother & Baby</option>
                                <option value="Sports & Outdoors">Sports & Outdoors</option>
                            </select>
                        </div>
                        {/* thumbnail */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='thumbnail'>thumbnail</label>

                            <input
                                name='thumbnail'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='file'
                                multiple
                                placeholder='product thumbnail' />
                        </div>
                        {/* images */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='image'>images</label>

                            <input
                                name='image'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='file'
                                multiple
                                placeholder='image ' />
                        </div>
                        {/* description */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='descaption'>description</label>

                            <input
                                name='descaption'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='text'
                                multiple
                                placeholder='description ' />
                        </div>
                        {/* dimensions */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='dimensions'>dimensions</label>

                            <input
                                name='dimensions'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='text'
                                multiple
                                placeholder='product dimensions ' />
                        </div>
                        {/* price */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='price'>price</label>

                            <input
                                name='price'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='number'
                                multiple
                                placeholder='product price ' />
                        </div>
                        {/* discount */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='discount'>discount</label>

                            <input
                                name='discount'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='number'
                                multiple
                                placeholder='product discount  ' />
                        </div>
                        {/* availability status */}
                        <div className="border-b w-full md:w-[408px] border-[#73dcf9]">
                            <label htmlFor="availability_status" className='font-bold uppercase'>availability status</label>
                            <select name="availability_status" id="" className='block w-full mt-4  outline-none bg-transparent '>

                                <option value="In Stock">In Stock</option>
                                <option value="Out Of Stock">Out Of Stock</option>


                            </select>
                        </div>
                        {/* minimum order quantity */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='minimum_order_quantity'>minimum order quantity</label>

                            <input
                                name='minimum_order_quantity'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='number'
                                multiple
                                placeholder='minimum order quantity' />
                        </div>
                        {/* return policy */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='return_policy'>return policy</label>

                            <input
                                name='return_policy'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='text'
                                multiple
                                placeholder='return policy ' />
                        </div>
                        {/* stock levels */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='stock_levels'>stock levels</label>

                            <input
                                name='stock_levels'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='number'
                                multiple
                                placeholder='stock levels' />
                        </div>
                         {/* warranty information */}
                         <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='warranty_information'>warranty information</label>

                            <input
                                name='warranty_information'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='text'
                                multiple
                                placeholder='warranty information' />
                        </div>
                        {/* weight */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='weight'>weight</label>

                            <input
                                name='weight'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='number'
                                multiple
                                placeholder='weight' />
                        </div>
                         {/* shipping cost */}
                         <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='shipping_cost'>shipping cost</label>

                            <input
                                name='shipping_cost'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='number'
                                multiple
                                placeholder='shipping cost' />
                        </div>
                        {/* tags */}
                        <div className={`border-b w-full md:w-[408px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='tag01'>tags</label>
                            <input
                                name='tag01'
                                id=''
                                className='block w-full py-4 mt-4 outline-none bg-transparent'
                                type='text'
                                placeholder='tag01' />
                            <input
                                name='tag02'
                                id=''
                                className='block w-full py-4 mt-4 outline-none bg-transparent'
                                type='text'
                                placeholder='tag02' />
                            <input
                                name='tag03'
                                id=''
                                className='block w-full py-4 mt-4 outline-none bg-transparent'
                                type='text'
                                placeholder='tag03' />
                            <input
                                name='tag04'
                                id=''
                                className='block w-full py-4 mt-4 outline-none bg-transparent'
                                type='text'
                                placeholder='tag04' />
                        </div>
                    </div>
                    <div className=" mt-6">
                        <input
                            className=" py-4 px-10 border border-[#262626] bg-[#262626] text-white hover:text-[#262626] hover:border-[#262626] hover:bg-transparent transition-all duration-500 ease-in-out"
                            type="submit"
                            value="Add product"
                        />
                    </div>

                    {/* <div className='flex flex-wrap gap-x-10 gap-y-6'>

                        <InputFilds laberText='title' placeholder='product title' type='text' name='title'></InputFilds>
                     
                        <div className="border-b w-full md:w-[508px] border-[#73dcf9]">
                            <label htmlFor="brand" className='font-bold uppercase'>brand</label>
                            <select name="brand" id="" className='block w-full mt-4  outline-none bg-transparent '>

                                <option value="FlexFit">FlexFit</option>
                                <option value="h&m">h&m</option>
                                <option value="ChefMaster">ChefMaster</option>
                                <option value="WristTech">WristTech</option>
                                <option value="ComfyChair">ComfyChair</option>

                            </select>
                        </div>
                       
                        <div className="border-b w-full md:w-[508px] border-[#73dcf9]">
                            <label htmlFor="category" className='font-bold uppercase'>category</label>
                            <select name="category" id="" className='block w-full mt-4  outline-none bg-transparent '>
                                <option value="Health & Beauty">Health & Beauty</option>
                                <option value="furniture">furniture</option>
                                <option value="groceries">groceries</option>
                                <option value="Women's & Girls' Fashion">Women{`'`}s & Girls{`'`} Fashion</option>
                                <option value="Men's & Boys' Fashion">Men{`'`}s & Boys{`'`} Fashion</option>
                                <option value="Electronic Accessories">Electronic Accessories</option>
                                <option value="Home & Lifestyle">Home & Lifestyle</option>
                                <option value="Watches, Bags, Jewellery">Watches, Bags, Jewellery</option>
                                <option value="TV & Home Appliances">TV & Home Appliances</option>
                                <option value="Mother & Baby">Mother & Baby</option>
                                <option value="Sports & Outdoors">Sports & Outdoors</option>
                            </select>
                        </div>
                        <div className={`border-b w-full md:w-[508px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='file'>thumbnail</label>

                            <input
                                name='file'
                                id=''
                                className='block w-full pb-4 mt-4 outline-none bg-transparent'
                                type='file'
                                multiple
                                placeholder='image input' />
                        </div>
                        <InputFilds laberText='thumbnail' placeholder='product thumbnail' type='file' name='thumbnail'></InputFilds>
                        <InputFilds laberText='images' placeholder='product images' type='file' name='images'></InputFilds>
                        <InputFilds laberText='description' placeholder='product description' type='text' name='description'></InputFilds>
                        <InputFilds laberText='dimensions' placeholder='product dimensions' type='text' name='dimensions'></InputFilds>
                        <InputFilds laberText='price' placeholder='product price' type='number' name='price'></InputFilds>
                        <InputFilds laberText='discount' placeholder='discount' type='number' name='discount'></InputFilds>
                    
                        <div className="border-b w-full md:w-[508px] border-[#73dcf9]">
                            <label htmlFor="availability_status" className='font-bold uppercase'>availability status</label>
                            <select name="availability_status" id="" className='block w-full mt-4  outline-none bg-transparent '>

                                <option value="In Stock">In Stock</option>
                                <option value="Out Of Stock">Out Of Stock</option>


                            </select>
                        </div>
                        <InputFilds laberText='minimum order quantity' placeholder='minimum order quantity' type='number' name='minimum_order_quantity'></InputFilds>
                        <InputFilds laberText='return policy' placeholder='product return policy' type='text' name='return_policy'></InputFilds>
                        <InputFilds laberText='SKU' placeholder='product SKU' type='text' name='SKU'></InputFilds>
                        <InputFilds laberText='stock levels' placeholder='stock levels' type='number' name='stock_levels'></InputFilds>
                        <InputFilds laberText='warranty information' placeholder='warranty information' type='text' name='warranty_information'></InputFilds>
                        <InputFilds laberText='weight' placeholder='product weight' type='number' name='weight'></InputFilds>
                        <InputFilds laberText='shipping cost' placeholder='product shipping cost' type='text' name='shipping_cost'></InputFilds>
                        <InputFilds laberText='available regions' placeholder='available regions' type='text' name='available_regions'></InputFilds>
                       
                        <div className={`border-b w-full md:w-[508px] border-[#73dcf9]`}>
                            <label className='font-bold uppercase' htmlFor='tag01'>tags</label>
                            <input
                                name='tag01'
                                id=''
                                className='block w-full py-4 mt-4 outline-none bg-transparent'
                                type='text'
                                placeholder='tag01' />
                            <input
                                name='tag02'
                                id=''
                                className='block w-full py-4 mt-4 outline-none bg-transparent'
                                type='text'
                                placeholder='tag02' />
                            <input
                                name='tag03'
                                id=''
                                className='block w-full py-4 mt-4 outline-none bg-transparent'
                                type='text'
                                placeholder='tag03' />
                            <input
                                name='tag04'
                                id=''
                                className='block w-full py-4 mt-4 outline-none bg-transparent'
                                type='text'
                                placeholder='tag04' />
                        </div>
                    </div> */}

                </div>
            </form>


        </div>
    );
};

export default AddProducts;