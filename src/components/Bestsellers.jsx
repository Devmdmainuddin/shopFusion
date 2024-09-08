
import useProducts from "../hooks/useProducts";
import ProductCard from "./card/ProductCard";
import Container from "./layer/Container";
import Heading from "./layer/Heading";
import LoadingSpinner from "./share/LoadingSpinner";


const Bestsellers = () => {
    const [products, loading] = useProducts()
    if (loading) return <LoadingSpinner />
    return (
        <div>
            <Container>
                <Heading className='mb-12' text='Our Bestsellers'></Heading>
                <div className='flex justify-between md:mt-12 mt-5 flex-wrap  md:gap-y-5 gap-y-16'>
                    {
                        products.slice(0, 8).map((item, key) => <ProductCard key={key} item={item}   ></ProductCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Bestsellers;