import React, { useState } from 'react';
import axios from 'axios';

function SearchPage() {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get(`/api/event/search?query=${query}`);
            setSearchResults(response.data);
        } catch (error) {
            setError('An error occurred while fetching search results.');
        }

        setIsLoading(false);
    };

    return (
        <div>
            <h1>Event Search</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter search query"
            />
            <button onClick={handleSearch} disabled={!query || isLoading}>
                Search
            </button>

            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <div>
                {searchResults.map((event) => (
                    <div key={event.eventID}>
                        <h2>{event.name}</h2>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchPage;
