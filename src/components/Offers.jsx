import Heading from './layer/Heading';
import Container from './layer/Container';
import ProductCard from './card/ProductCard';
import LoadingSpinner from './share/LoadingSpinner';
import { useGetproductsQuery } from '../services/productApi';
const Offers = () => {
    const { data, error, isLoading, } = useGetproductsQuery()
    return (
        <>
            <Container >
                <Heading className='mt-[128px] mb-12' text='Special Offers'></Heading>
                <div className='flex justify-between md:mt-12 mb-[108px] mt-5 flex-wrap gap-y-16'>
                    {isLoading && <LoadingSpinner />}
                    {error && <p>error:{error.message}</p>}
                    {!isLoading && !error && data && data.length > 0 && (
                        data.slice(0, 8).map((item, key) => <ProductCard key={key} item={item}   ></ProductCard>)
                    )}
                </div>
            </Container>
        </>
    );
};

export default Offers;