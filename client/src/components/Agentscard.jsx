
import agent1 from "../images/agent-1.webp"
function Agentscard() {
  return (
    <div className="agentscard">
     
        <div className="agentscard-img">    <img src={agent1} alt="" /> </div>
        <div className="agentscard-text">
            <h5>Arlene McCoy</h5>
            <p>Broker</p>
        </div>

    </div>
  )
}

export default Agentscard