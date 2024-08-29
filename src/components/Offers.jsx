import Heading from './layer/Heading';
import Container from './layer/Container';
// import useProduct from '../hooks/useProduct';
import ProductCard from './card/ProductCard';
import useProducts from '../hooks/useProducts';
import LoadingSpinner from './share/LoadingSpinner';
const Offers = () => {
    // const [product, loading] = useProduct()
    const [products,loading]=useProducts()

    if (loading) return <LoadingSpinner />
    return (
        <>
            <Container >
                <Heading className='mt-[128px] mb-12' text='Special Offers'></Heading>
                {/* <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-3'> */}
                <div className='flex justify-between md:mt-12 mb-[108px] mt-5 flex-wrap gap-y-16'>
                    {
                        products.slice(0,8).map(item => <ProductCard key={item._id} item={item}  ></ProductCard>)
                    }
                 
                </div>
            </Container>
        </>
    );
};

export default Offers;