import Bredcumb from "../components/layer/Bredcumb";
import Button01 from "../components/layer/Button01";
import Container from "../components/layer/Container";
import Heading from "../components/layer/Heading";
import Inputbox from "../components/layer/Inputbox";


const Contacts = () => {
    return (
        <div>
            <Container className='mx-6'>
            <Bredcumb></Bredcumb>
            <div>
            <div className="mt-10 lg:mt-24">
          <div className="mb-10">
            <Heading text="Fill up a Form" />
          </div>
          <div className="mb-[140px] sm:w-2/4">
            <Inputbox as="input" title="Name" placeholder="Your name here" />
            <Inputbox as="input" title="Email" placeholder="Your name here" />
            <Inputbox
              as="textarea"
              title="Message"
              placeholder="Your name here"
            />
          <Button01 text="Send " className=" mt-2"/>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.170392066471!2d90.3799999096633!3d23.74130247858763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1724256980966!5m2!1sen!2sbd"  className="border-0 w-full h-[450px] mb-[140px]" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
            </div>

            </Container>
         
        </div>
    );
};

export default Contacts;