// import useProduct from "../hooks/useProduct";
import useProducts from "../hooks/useProducts";
import ProductCard from "./card/ProductCard";
import Container from "./layer/Container";
import Heading from "./layer/Heading";
import LoadingSpinner from "./share/LoadingSpinner";


const Bestsellers = () => {
    // const [product, loading] = useProduct()
    const [products,loading]=useProducts()
    if (loading) return <LoadingSpinner />
    return (
        <div>
            <Container>
                <Heading className='mb-12' text='Our Bestsellers'></Heading>
                <div className='flex justify-between md:mt-12 mt-5 flex-wrap  md:gap-y-5 gap-y-16'>
                {
          products.slice(0,8).map(item => <ProductCard key={item._id} item={item}   ></ProductCard>)
        }
                {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-3'> */}
                    {/* <ProductCard src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard>
                    <ProductCard src='/card-3.jpg' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard>
                    <ProductCard src='/card-2.jpg' offer='10%' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard>
                    <ProductCard src='/card-4.jpg' offer='25%' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard> */}
                </div>
            </Container>
        </div>
    );
};

export default Bestsellers;