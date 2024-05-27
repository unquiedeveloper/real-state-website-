import Agentscard from "./Agentscard"
import Footer from "./Footer"
import about1 from "../images/about-1.jpg"

function Agentsfeature() {
  return (
    <>
        <div className="agents">
        <div className="properties-main">
          <img src={about1} alt="" />
          <div className="properties-heading-h1">
            <h1>Agents</h1>
          </div>
          <div className="properties-heading-p">
            <p>Home/Agents</p>

          </div>



        </div>
    </div>


        <div className='property'>
            <div className='property-1'>
                <div className='property-1-text'>
                    <h1>Discover Agents</h1>
                    <p>Lorem ipsum dolor sit amet consecte Vere quasi assumenda veritatis adipisci. Culpa numquam optio perferendis.</p>
                </div>
                <div className='property-1-filter'>
                <button className='property-button'>All</button>
                    <button className='property-button'>House</button>
                    <button className='property-button'>Villa</button>
                    <button className='property-button'>Office</button>
                    <button className='property-button'>Appartment</button>
                </div>
            </div>
            <div className='property-2'>
                <Agentscard/>
                <Agentscard/>
                <Agentscard/>

                <Agentscard/>
                <Agentscard/>



            

           
       
            </div>
          
        </div>
        <Footer/>
    </>

      
    
    
  )
}

export default Agentsfeature