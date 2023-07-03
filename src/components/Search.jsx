import { useState } from 'react';
function Search({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchTerm} onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default Search;
