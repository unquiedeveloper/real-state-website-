import b12 from "../images/blog-12.webp"

function Blogsmallcard() {
  return (
    <div className="blogssmallcard">
        <div className="blogssmallcard-img">
            <img src={b12} alt="" />
        </div>
        <div className="blogssmallcard-text">
            <h4><a href="">8 Tips for Achieving Maximum Coziness</a></h4>
            <p>28 july, 2024</p>
        </div>
    </div>
  )
}

export default Blogsmallcard