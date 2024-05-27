import b11 from "../images/blog-11.webp"

function Blogcard() {
    return (
        <div className="blogcard">
            <div className="blogcard-img">
                <img src={b11} alt="" />
 
            </div>
            <div className="blogcard-text">
                <div>
                    <p className="para-1">Home Improvement</p>
                    <h3><a href="">9 Easy-to-Ambitious DIY Projects to Improve Your Home</a></h3>
                    <p>When it time to move to a smaller home, these tips will help you save the memories while.</p>
                </div>
            </div>
        </div>
    )
}

export default Blogcard