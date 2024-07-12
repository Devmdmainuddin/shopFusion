
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const MegaMenuLi = ({ content, href }) => {
  return (
    <li className='w-28'>
      <Link className='block ' to={href}>
        <p>{content}</p>
      </Link>
    </li>
  );
};
MegaMenuLi.propTypes = {
  content: PropTypes.string,
  href: PropTypes.string,
}
export default MegaMenuLi;