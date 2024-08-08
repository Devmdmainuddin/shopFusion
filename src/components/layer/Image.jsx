
import { Link } from 'react-router-dom'

const Image = ({src, alt, href, className}) => {
  return (
    <Link to={href}>
      <picture className={` block ${className}`}>
         <img className='w-full h-full object-contain  block'  src={src} alt={alt} />
      </picture>
    </Link>
  )
}

export default Image