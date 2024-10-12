import "./header.css"
import BackgroundImg from "../assets/BackgroundImg.png";

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">My Thoughts, My Journey</span>
            <span className="headerTitleLg">Diary of a Dreamer</span>
        </div>
        <img src={BackgroundImg} alt="" className="headerImg" />
    </div>
  )
}
