

const Input = ({className,id,type,placeholder,LabelText}) => {
    return (
        <div className={`border-b ${className}`}>
        <label className='font-bold' htmlFor={id}>{LabelText}</label>
        <input id={id} className='block w-full pb-4 mt-4 outline-none' type={type} placeholder={placeholder}/>
    </div>
    );
};

export default Input;