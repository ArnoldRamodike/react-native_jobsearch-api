import { useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

        const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
            query: { ...query},
        },
        headers: {
            'X-RapidAPI-Key': 'ac6b1f1b2bmsh4f598a216b3acc2p1af414jsnebe50520f28f',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
        };
    
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response  = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('There is an error loading data')
        }
        finally{
            setIsLoading(false);
        }  
    }
    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }
    return {data, isLoading, error, refetch};
}

export default useFetch;