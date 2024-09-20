import { IoIosArrowForward } from "react-icons/io";
import Container from "./Container";
import { Link } from "react-router-dom";


const Bredcumb = () => {
    return (
        <div>
            <Container>
                <div className='mt-[93px]'>
                    <h2 className='text-[#262626] text-2xl md:text-5xl font-bold capitalize'>{`${window.location.pathname.split("/")[1]}`}</h2>
                    <p></p>
                    <ul className='flex items-center gap-2 mt-3'>
                        <li className='text-xl font-normal text-[#6D6D60] flex items-center'><Link to='/'>Home  </Link><span >{` - ${window.location.pathname.split("/")[1]}`}</span></li>

                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Bredcumb;