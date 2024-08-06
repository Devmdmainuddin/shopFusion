

const Heading = ({className,text}) => {
    return (
        <h1 className={`mt-[128px] mb-12 text-[#262626] text-[39px] font-bold ${className}`}>{text}</h1>
    );
};

export default Heading;