
const Inputbox = (props) => {
    return (
        <div className=" mb-6">
      <h2 className=" placeholder:text-sm placeholder:font-dm font-dm text-base font-bold text-cdrop mb-3">{props.title}</h2>
      <props.as placeholder={props.placeholder} className=" border-b border-solid border-[#F0F0F0] pb-4 w-full outline-none font-dm text-cdrop"/>
    </div>
    );
};

export default Inputbox;