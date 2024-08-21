import React from 'react';

const Button01 = ({text,onClick,className}) => {
    return (
        <button onClick={onClick} className={`py-4 px-10 border border-[#262626] bg-[#262626] text-white hover:text-[#262626] hover:border-[#262626] hover:bg-transparent transition-all duration-500 ease-in-out ${className}`}>{text}</button>
    );
};

export default Button01;