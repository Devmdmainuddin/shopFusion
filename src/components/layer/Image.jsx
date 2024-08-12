
import { Link } from 'react-router-dom'

const Image = ({src, alt, href, className,imgClassName}) => {
  return (
    <Link to={href} className={` block ${className}`}>
      <picture >
         <img className={`w-full   block ${imgClassName}`}  src={src} alt={alt} />
      </picture>
    </Link>
  )
}

export default Image