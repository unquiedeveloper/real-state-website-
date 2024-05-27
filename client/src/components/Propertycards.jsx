
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { TbRulerMeasure } from "react-icons/tb";
import p1 from "../images/p1.webp"

export default function Propertycards() {
  return (
    <div className='card'>
      <div className="card-img">
        <img src={p1} alt="card-img" />
      </div>
      <div className="card-text">
        <div className="card-text-1">
          <h1>Equestain Family home</h1>
          <p>New York City, CA ,USA</p>
        </div>
        <div className="card-text-2">
          <div className="card-text-2-icon">
            <div>   <IoBedOutline/><span>1</span></div>
            <div><PiBathtub/><span>2</span></div>
            <div><TbRulerMeasure/><span>1200</span></div>
         
            

          </div>
          <div className="card-text-2-price">
            <button  className='property-button'>14,000/mo</button>
          </div>
        </div>
      </div>
    </div>
  )
}
