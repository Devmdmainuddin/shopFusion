import React from 'react';

const Button = ({icon,text}) => {
    return (
        <button className=" absolute -bottom-full left-1/2 -translate-x-1/2 group-hover:bottom-1 opacity-0 group-hover:opacity-100 hover:bg-[#f3283d]  hover:text-white flex gap-2 items-center  text-center font-DM bg-[#fed700] py-2 px-6 rounded-3xl transition-all duration-300 cursor-pointer mb-4 "> {icon}  {text} </button>
    );
};

export default Button;