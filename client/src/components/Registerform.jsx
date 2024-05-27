import r1 from "../images/agentform-1.webp"
import { FaLocationArrow } from "react-icons/fa6";
function Registerform() {
  return (
    <div className="register-form">

        <div className="register-form1">
            <div className="register-form1-text">
            <h1>Become a real State agent</h1>
            <p>We only work with the best companies around the globe to survey</p>
            <button className='nav-button register-button'> <a href="/agentsregister">Register Now</a> <FaLocationArrow/></button>
            </div>
            
        </div>
        <div className="register-form2">
            <img src={r1} alt="" />
        </div>
    </div>
  )
}

export default Registerform