import { useEffect, useState } from 'react';

const API_KEY_FETCH = process.env.REACT_APP_API_KEY;
const URL = 'https://api.themoviedb.org/3';

export default function useMovieById(movieId) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchMovieID = async () => {
            try {
                const response = await fetch(`${URL}/movie/${movieId}?api_key=${API_KEY_FETCH}`);
                const data = await response.json();
                console.log(data)
                setMovie(data);
            } catch (e) {
                console.error("Erreur lors de la récupération des données : ", e)
            }
        }
        fetchMovieID();
    }, [movieId]);

    return movie;
}