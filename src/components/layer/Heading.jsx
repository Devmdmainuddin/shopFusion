import PropTypes from 'prop-types'

const Heading = ({className,text}) => {
    return (
        <h1 className={`mt-[128px] mb-12 text-[#262626] text-[39px] font-bold ${className}`}>{text}</h1>
    );
};
Heading.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
}
export default Heading;