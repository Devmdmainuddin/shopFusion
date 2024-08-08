
import Container from '../layer/Container';
import Image from '../layer/Image';

const Banner03 = () => {
    return (
        <div className='mt-12'>
             <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <Image className='' href='/details'  src='/ba4.jpg' alt='banner01'></Image>
                   <Image className='' href='/details'  src='/ba5.jpg' alt='banner02'></Image>
                 

                </div>
            </Container>
        </div>
    );
};

export default Banner03;