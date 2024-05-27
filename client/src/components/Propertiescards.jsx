import a1 from "../images/agent-1.webp"
import p1 from "../images/p1.webp"
import { LiaBedSolid } from "react-icons/lia";
import { PiBathtubThin } from "react-icons/pi";
import { HiArrowTopRightOnSquare } from "react-icons/hi2"
function Propertiescards() {
  return (
    <div className="propertiescard">
      <div className="propertiescard-img">
        <img src={p1} alt="" />
        <div className="propertiescard-img-agent">
          <img src={a1} alt="" />
        </div>
      </div>
      <div className="properties-text">
        <div className="properties-text1">
          <h4><a href="#">Equestrian Family Home</a> </h4>
          <p>San Diego City,CA USA</p>
          <div className="properties-text1-icons">
            <span><LiaBedSolid/>5 beds</span>
           <span> <PiBathtubThin/>4 bath</span>
           <span><HiArrowTopRightOnSquare/> 900sqft</span>
          
            
          </div>
         
          
        </div>
        <div className="properties-text2">
          <p>For Rent</p>
          <div className="propterties-text2-icons"></div>
        </div>
      </div>
    </div>
  )
}

export default Propertiescards