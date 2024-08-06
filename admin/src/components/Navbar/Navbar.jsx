import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h2>vy foody</h2>
      <img src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
