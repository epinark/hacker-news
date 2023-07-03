import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './components/Search';

import './App.css';

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://hn.algolia.com/api/v1/search?query=react');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${searchTerm}`);
      setData(response.data);
    } catch (error) {
      console.error('Error searching data:', error);
    }
    setLoading(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Hacker News</h1>
      {data.hits.map((article) => (
        <div key={article.objectID}>
          <a href={article.url}>{article.title}</a>
          <p>{article.author}</p>
        </div>
      ))}
      <Search onSearch={handleSearch}
      />
    </>
  );
}
