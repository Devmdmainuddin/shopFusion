
import { Link } from 'react-router-dom'

const Image = ({src, alt, href, className}) => {
  return (
    <Link to={href}>
      <picture>
         <img className={`w-full object-cover ${className} `} src={src} alt={alt} />
      </picture>
    </Link>
  )
}

export default Image