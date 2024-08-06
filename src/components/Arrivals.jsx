import Card from "./card/Card";
import ProductCard from "./card/ProductCard";
import Container from "./layer/Container";
import Heading from "./layer/Heading";


const Arrivals = () => {
    return (
        <div className="my-36">
            <Container>
                <Heading className='mb-12' text='New Arrivals'></Heading>
                {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-3'> */}
                    <div className="flex justify-center gap-6 flex-wrap">
                    <ProductCard src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard>
                    <ProductCard src='/card-2.jpg' offer='10%' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard>
                    <ProductCard src='/card-3.jpg' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard>
                    <ProductCard src='/card-4.jpg' offer='25%' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></ProductCard>
                </div>


                {/* <Card src='/card-1.jpg' offer='10%' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
                        <Card src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
                        <Card src='/card-1.jpg' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
                        <Card src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
                        <Card src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card>
                        <Card src='/card-1.jpg' offer='new' title='Basic Crew Neck Tee' alt='product-1 image' price='$60.00' brand='Black'></Card> */}
                {/* </div> */}
            </Container>
        </div>
    );
};

export default Arrivals;