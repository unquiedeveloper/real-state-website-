
import f1 from "../images/f-1.webp"
import f2 from "../images/f-2.webp"
import f3 from "../images/f-3.webp"
import f4 from "../images/f-4.webp"
import f5 from "../images/f-5.webp"
import f6 from "../images/f-6.webp"
function Features() {
  return (
    <div className='feature'>
      <div className='feature-text'>
        <h2>Explore Home type</h2>
        <p>Get some Inspirations from 1800+ skills</p>
      </div>
      <div className='feature-1'>
        <div className='feature-1-img1'>
          <img src={f1} alt="" />
          <div className='feature-1-img1-heading'>
            <h4>Los Angles</h4>
            <h4>12 properties</h4>
          </div>

        </div>
        <div className='feature-1-img2'>
          <img src={f2} alt="" />
          <div className='feature-1-img1-heading'>
            <h4>Los Angles</h4>
            <h4>12 properties</h4>
          </div>


        </div>
        <div className='feature-1-img3'>
          <img src={f3} alt="" />
          <div className='feature-1-img1-heading'>
            <h4>Los Angles</h4>
            <h4>12 properties</h4>
          </div>

        </div>
      </div>
      <div className='feature-2'>
        <div className='feature-1-img2'>
          <img src={f4} alt="" />
          <div className='feature-1-img1-heading'>
            <h4>Los Angles</h4>
            <h4>12 properties</h4>
          </div>
        </div>
        <div className='feature-1-img3'>
          <img src={f5} alt="" />
          <div className='feature-1-img1-heading'>
            <h4>Los Angles</h4>
            <h4>12 properties</h4>
          </div>

        </div>
        <div className='feature-1-img1'>
          <img src={f6} alt="" />
          <div className='feature-1-img1-heading'>
            <h4>Los Angles</h4>
            <h4>12 properties</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features