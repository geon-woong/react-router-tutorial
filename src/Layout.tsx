import { useEffect } from "react";
import { Outlet,useNavigate } from "react-router-dom";
export const Layout = () => {
    const navigate = useNavigate();

    return (
        <div>
            <header style={{background:'gray',padding:15,fontSize:24}}>
                <button onClick={()=>navigate('/')}>홈</button>
                <button onClick={()=>navigate(-1)}>뒤로가기</button>
                <button onClick={()=>navigate('/articles',{replace:true})}>게시글목록</button>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}