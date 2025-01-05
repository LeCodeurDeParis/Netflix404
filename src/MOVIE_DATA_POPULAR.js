import { useEffect, useState } from 'react';

const API_KEY_FETCH = process.env.REACT_APP_API_KEY;
const URL = 'https://api.themoviedb.org/3';


const usePopularMovies = (endpoint = 'movie/popular', totalPages = 2) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchAllMovies = async () => {
            try {
                const requests = Array.from({ length: totalPages }, (_, index) =>
                    fetch(`${URL}/${endpoint}?api_key=${API_KEY_FETCH}&page=${index + 1}`)
                );

                const responses = await Promise.all(requests);
                const data = await Promise.all(responses.map((res) => res.json()));

                const allMovies = data.flatMap((page) => page.results || []);
                setMovies(allMovies);
            } catch (e) {
                console.error("Erreur lors de la récupération des données : ", e)
            }
        }
        
        fetchAllMovies()
    }, [endpoint, totalPages])

    return { movies }
}

export default usePopularMovies;