import Container from "../layer/Container";
import Image from "../layer/Image";


const Banner02 = () => {
    return (
        <div>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   <Image  src='/b1.jpg' alt=''></Image>
                   <Image  src='/b2.jpg' alt=''></Image>
                   <Image  src='/b3.jpg' alt=''></Image>

                </div>
            </Container>
        </div>
    );
};

export default Banner02;