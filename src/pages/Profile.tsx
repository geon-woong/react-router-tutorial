import { useParams } from 'react-router-dom';

const data = {
    geonwoong : {
        name: 'geonwoong',
        description : 'front-end dev',
    },
    eco : {
        name: 'eco',
        description : 'cutest cat',
    },
}

export const Profile = () => {
    const params = useParams();
    const profile = data[params.name];

    return(
        <div>
            <h1>사용자 프로필</h1>
            {
             profile? (
                 <div>
                     <h2>
                         {profile.name}
                     </h2>
                     <p>
                         {profile.description}
                     </p>
                 </div>
             ) : (
                 <p>존재하지 않는 프로필입니다.</p>
             )
            }
        </div>
    )
}