import { useEffect, useState } from 'react';

const API_KEY_FETCH = process.env.REACT_APP_API_KEY;
const URL = 'https://api.themoviedb.org/3';

export default function useCastMovie(movieId) {
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const fetchCastMovie = async () => {
            try {
                const response = await fetch(`${URL}/movie/${movieId}/credits?api_key=${API_KEY_FETCH}`);
                const data = await response.json();
                console.log(data);
                setCast(data);
            } catch (e) {
                console.error("Erreur lors de la récupération des données : ", e)
            }
        }
        fetchCastMovie();
    }, [movieId]);

    return cast;
}