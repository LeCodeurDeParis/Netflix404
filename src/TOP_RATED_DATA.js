import { useEffect, useState } from 'react';

const API_KEY_FETCH = process.env.REACT_APP_API_KEY;
const URL = 'https://api.themoviedb.org/3';

const useTopRatedMovies = (endpoint = 'movie/top_rated') => {
    const [topmovies, setTopMovies] = useState([]);

    useEffect(() => {
        const fetchAllTRM = async () => {
            try {
                const response = await fetch(`${URL}/${endpoint}?api_key=${API_KEY_FETCH}`)
                const data = await response.json()


                setTopMovies(data.results || [])
            } catch (e) {
                console.error("Erreur lors de la récupération des données : ", e)
            }
        }
        
        fetchAllTRM()
    }, [endpoint])

    return { topmovies }
}

export default useTopRatedMovies;