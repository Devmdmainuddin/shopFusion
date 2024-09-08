import Heading from './layer/Heading';
import Container from './layer/Container';
import ProductCard from './card/ProductCard';
import useProducts from '../hooks/useProducts';
import LoadingSpinner from './share/LoadingSpinner';
const Offers = () => {

    const [products,loading]=useProducts()

    if (loading) return <LoadingSpinner />
    return (
        <>
            <Container >
                <Heading className='mt-[128px] mb-12' text='Special Offers'></Heading>
                <div className='flex justify-between md:mt-12 mb-[108px] mt-5 flex-wrap gap-y-16'>
                    {
                        products.slice(0,8).map((item,key) => <ProductCard key={key} item={item}  ></ProductCard>)
                    }
                 
                </div>
            </Container>
        </>
    );
};

export default Offers;