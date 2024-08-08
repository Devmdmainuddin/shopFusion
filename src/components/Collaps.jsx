import { useState } from "react";

const CollapsItems = ({ onClick, title, hideText, className }) => {
    return (
        <div >
            <div onClick={onClick} className=" flex justify-between items-center cursor-pointer">
                <h3 className=" font-semibold text-xl leading-5 text-gray-800">{title}</h3>
                <button aria-label="too" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <path className={`${className ? "hidden" : "block"} `} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div>
                <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (className ? "block" : "hidden")}>{hideText}</p>
            </div>

        </div>
    )

}
const Collaps = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    return (
        <div className=" md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
            <CollapsItems className={show} onClick={() => setShow(!show)} title='Shipping' hideText='We are covering every major country worldwide. The shipment leaves from US as it is our headquarter. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.' >
            </CollapsItems>
            <hr className=" my-7 bg-gray-200" />
            <CollapsItems className={show2} onClick={() => setShow2(!show2)} title='Returns' hideText='We are covering every major country worldwide. The shipment leaves from US as it is our headquarter. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.' >
            </CollapsItems>
            <hr className=" my-7 bg-gray-200" />
            <CollapsItems className={show3} onClick={() => setShow3(!show3)} title='Exchange' hideText='We are covering every major country worldwide. The shipment leaves from US as it is our headquarter. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.' >
            </CollapsItems>
            <hr className=" my-7 bg-gray-200" />
            <CollapsItems className={show4} onClick={() => setShow4(!show4)} title='Tracking' hideText='We are covering every major country worldwide. The shipment leaves from US as it is our headquarter. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.' >
            </CollapsItems>
            <hr className=" my-7 bg-gray-200" />
        </div>
    );
};


export default Collaps;