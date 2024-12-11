import { useEffect, useState } from 'react';

const API_KEY_FETCH = process.env.REACT_APP_API_KEY;
const URL = 'https://api.themoviedb.org/3';


const usePopularMovies = (endpoint = 'movie/popular') => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchAllMovies = async () => {
            try {
                const response = await fetch(`${URL}/${endpoint}?api_key=${API_KEY_FETCH}`)
                const data = await response.json()

                console.log(data)

                setMovies(data.results || [])
            } catch (e) {
                console.error("Erreur lors de la récupération des données : ", e)
            }
        }
        
        fetchAllMovies()
    }, [endpoint])

    return { movies }
}

export default usePopularMovies;