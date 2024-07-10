import PropTypes from 'prop-types';

const Container = ({children, className}) => {
    return (
        <div className={`max-w-[1600px] mx-auto px-6  ${className}`} >
            {children}
          
        </div>
    );
};
Container.propTypes = {
    
    children: PropTypes.array,
    className: PropTypes.string,
}
export default Container;