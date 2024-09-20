import Bredcumb from "../components/layer/Bredcumb";
import Container from "../components/layer/Container";
import Heading from "../components/layer/Heading";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";


const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_kghgnmk', 'template_n6i25co', form.current, {
      publicKey: 'qirVr37Rt5CPGYNtG',
    })
    
      .then(
        () => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your information was sent successfully ",
            showConfirmButton: false,
            timer: 1500,
          });
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div>
      <Container className='mx-6'>
        <Bredcumb></Bredcumb>
        <div>
          <div className="mt-10 lg:mt-24">
            <div className="mb-10">
              <Heading text="Fill up a Form" />
            </div>
            <form ref={form} onSubmit={sendEmail} className="mb-[140px] sm:w-2/4">
              <div className=" mb-6">
                <label className=" placeholder:text-sm placeholder:font-dm font-dm text-base font-bold text-cdrop mb-3">Name</label>
                <input type="text" name="user_name" className=" border-b border-solid border-[#F0F0F0] pb-4 w-full outline-none font-dm text-cdrop" />
              </div>
              <div className=" mb-6">
                <label className=" placeholder:text-sm placeholder:font-dm font-dm text-base font-bold text-cdrop mb-3">Email</label>
                <input type="email" name="user_email" className=" border-b border-solid border-[#F0F0F0] pb-4 w-full outline-none font-dm text-cdrop" />
              </div>
              <div className=" mb-6">
                <label className=" placeholder:text-sm placeholder:font-dm font-dm text-base font-bold text-cdrop mb-3">Message</label>
                <textarea name="message" className=" border-b border-solid border-[#F0F0F0] pb-4 w-full outline-none font-dm text-cdrop" />
              </div>
              <input type="submit" value="Send" className='py-4 px-10 border border-[#262626] bg-[#262626] text-white hover:text-[#262626] hover:border-[#262626] hover:bg-transparent transition-all duration-500 ease-in-out' />
            </form>


            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.170392066471!2d90.3799999096633!3d23.74130247858763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1724256980966!5m2!1sen!2sbd" className="border-0 w-full h-[450px] mb-[140px]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

      </Container>

    </div>
  );
};

export default Contacts;