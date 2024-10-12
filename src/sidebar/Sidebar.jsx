import "./sidebar.css"
import ProfilePic from "../assets/AboutImg.jpeg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="AboutImg" src={ProfilePic} alt="" />
        <p>Welcome! I'm Rakshini, a passionate software developer, avid reader, and adventure-seeker. This blog is where I share my thoughts, experience, and reflections on life's journey, from exploring new places to diving into a good book. Join me as I navigate the world, one post at a time.
        </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Travel</li>
        <li className="sidebarListItem">Books</li>
        <li className="sidebarListItem">BucketList</li>
        <li className="sidebarListItem">Random Thoughts</li>
        <li className="sidebarListItem">Tech</li>
      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        <i className="sidebarIcon fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  )
}
