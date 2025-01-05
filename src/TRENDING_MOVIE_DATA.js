import { useEffect, useState } from 'react';

const API_KEY_FETCH = process.env.REACT_APP_API_KEY;
const URL = 'https://api.themoviedb.org/3';

const useTrendingMovies = (endpoint = 'trending/movie/day') => {
    const [trendingmovies, setTrendingMovies] = useState([]);

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const response = await fetch(`${URL}/${endpoint}?api_key=${API_KEY_FETCH}`)
                const data = await response.json()


                setTrendingMovies(data.results || [])
            } catch (e) {
                console.error("Erreur lors de la récupération des données : ", e)
            }
        }
        
        fetchTrending()
    }, [endpoint])

    return { trendingmovies }
}

export default useTrendingMovies;