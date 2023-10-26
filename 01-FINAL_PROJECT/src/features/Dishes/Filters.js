import { useSearchParams } from 'react-router-dom';
import {useLang} from "../../hooks/LanguageContext";

export function Filters() {
    const [searchParams, setSearchParams] = useSearchParams();
    const lang = useLang();

    const filterBy = searchParams.get('filter') || '';

    const handleFilterChange = (filter) => {
        setSearchParams({ filter: filter });
    };

    return (
        <div>
            <label>{lang === 'en' ? 'Filter by:' : 'Фільтрувати за:'}</label>
            <button
                onClick={() => handleFilterChange('')}
                className={filterBy === '' ? 'active' : ''}
            >
                {lang === 'en' ? 'All' : 'Все'}
            </button>
            <button
                onClick={() => handleFilterChange('byName')}
                className={filterBy === 'byName' ? 'active' : ''}
            >
                {lang === 'en' ? 'Name' : 'Назва'}
            </button>
            <button
                onClick={() => handleFilterChange('byPrice')}
                className={filterBy === 'byPrice' ? 'active' : ''}
            >
                {lang === 'en' ? 'Price' : 'Ціна'}
            </button>
        </div>
    );
}