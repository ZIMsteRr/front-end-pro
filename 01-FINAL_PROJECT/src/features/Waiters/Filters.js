import {useSearchParams} from "react-router-dom";

export function Filters () {
    const [,setSearchParams] = useSearchParams();

    const onFilterBtnClick = (filter) => {
        setSearchParams(`filter=${filter}`);
    }

    return (
        <div style={{ marginTop: '20px' }}>
            <button onClick={() => onFilterBtnClick('all')}>All</button>
            <button onClick={() => onFilterBtnClick('name')} style={{ marginLeft: '10px' }}>By Name</button>
            <button onClick={() => onFilterBtnClick('phone')} style={{ marginLeft: '10px' }}>By Phone</button>
        </div>
    )}