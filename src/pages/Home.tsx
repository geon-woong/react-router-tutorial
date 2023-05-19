import { Link } from "react-router-dom";
export const Home = () => {
   
    return(
        <div>
            <h1>home</h1>
            <ul>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/profile/geonwoong">geonwoong 프로필</Link>
                </li>
                <li>
                    <Link to="/profile/eco">eco 프로필</Link>
                </li>
                <li>
                    <Link to="/articles">게시글</Link>
                </li>
            </ul>
        </div>
    )
}