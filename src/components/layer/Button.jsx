import React from 'react';

const Button = ({icon,className,text}) => {
    return (
        <button className={` hover:bg-[#f3283d]  hover:text-white flex gap-2 items-center  text-center font-DM bg-[#fed700] py-2 px-6 rounded-3xl transition-all duration-1000 cursor-pointer mb-4 ${className}`}> {icon}  {text} </button>
    );
};

export default Button;