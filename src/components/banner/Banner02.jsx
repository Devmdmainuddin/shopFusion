import Container from "../layer/Container";
import Image from "../layer/Image";


const Banner02 = () => {
    return (
        <div>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   <Image className='' href='/details'  src='/b1.jpg' alt='banner01'></Image>
                   <Image className='' href='/details'  src='/b2.jpg' alt='banner02'></Image>
                   <Image className='' href='/details' src='/b3.jpg' alt='banner03'></Image>

                </div>
            </Container>
        </div>
    );
};

export default Banner02;