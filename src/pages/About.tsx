import { useSearchParams } from 'react-router-dom';

export const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail')
    const mode = searchParams.get('mode')

    const onToggleDetail = () => { 
        setSearchParams({mode, detail: detail ==='true' ? false : true});
    }

    const onIncreaseMode = () => { 
        const nextMode = mode === null ? 1 : Number(mode) + 1;
        setSearchParams({mode: nextMode , detail});
    }
    return(
        <div>
            <h1>소개</h1>
            <p>리액트 라우터 사용 프로젝트</p>
            <p>detail : { detail } </p>
            <p>mode : { mode } </p>
            <button onClick={onToggleDetail}>toggle</button>
            <button onClick={onIncreaseMode}>plus mode</button>
        </div>
    )
}