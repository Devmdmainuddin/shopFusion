

const Button02 = ({text,onClick,className}) => {
    return (
        <button onClick={onClick} className={`${className} py-4 px-10 border border-[#262626] text-[#262626] hover:border-[#262626] hover:text-white hover:bg-[#262626] transition-all duration-500 ease-in-out`}>{text}</button>
    );
};

export default Button02;