import { useEffect, useState } from 'react';

const API_KEY_FETCH = process.env.REACT_APP_API_KEY;
const URL = 'https://api.themoviedb.org/3';

const useDiscoverMovies = (endpoint = 'discover/movie') => {
    const [discovermovies, setDiscoverMovies] = useState([]);

    useEffect(() => {
        const fetchDiscover = async () => {
            try {
                const response = await fetch(`${URL}/${endpoint}?api_key=${API_KEY_FETCH}&sort_by=popularity.desc&page=1`)
                const data = await response.json()
                setDiscoverMovies(data.results || [])
            } catch (e) {
                console.error("Erreur lors de la récupération des données : ", e)
            }
        }
        
        fetchDiscover()
    }, [endpoint])

    return { discovermovies }
}

export default useDiscoverMovies;