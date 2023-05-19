import { Outlet,NavLink } from "react-router-dom"
export const Articles = () =>{
    const activeStyle = {
        fontStyle: 'bold',
        fontSize: 21,
    }
     return( 
         <div>
             <Outlet/>
             <ul>
                 <li>
                     <NavLink style={({isActive})=> (isActive ? activeStyle : undefined)}  to="/articles/1">게시글1</NavLink>
                 </li>
                 <li>
                     <NavLink style={({isActive})=> (isActive ? activeStyle : undefined)}  to="/articles/2">게시글2</NavLink>
                 </li>
                 <li>
                     <NavLink style={({isActive})=> (isActive ? activeStyle : undefined)}  to="/articles/3">게시글3</NavLink>
                 </li>
             </ul>
         </div>
     )
}