import { useParams} from 'react-router-dom'
export const Article = () =>{
    const { id } = useParams();
    return( 
        <div>
            게시글 { id }
        </div>
    )
}