import { useEffect, useState } from 'react';

const API_KEY_FETCH = process.env.REACT_APP_API_KEY;
const URL = 'https://api.themoviedb.org/3';

const usePopularSeries = (endpoint = 'tv/popular', totalPages = 2) => {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        const fetchAllSeries = async () => {
            try {
                const requests = Array.from({ length: totalPages }, (_, index) =>
                    fetch(`${URL}/${endpoint}?api_key=${API_KEY_FETCH}&page=${index + 1}`)
                );

                // Exécute toutes les requêtes en parallèle
                const responses = await Promise.all(requests);
                const data = await Promise.all(responses.map((res) => res.json()));

                // Fusionne tous les résultats dans un seul tableau
                const allSeries = data.flatMap((page) => page.results || []);
                setSeries(allSeries);
                console.log(allSeries)
            } catch (e) {
                console.error("Erreur lors de la récupération des données : ", e)
            }
        }
        
        fetchAllSeries()
    }, [endpoint, totalPages])

    return { series }
}

export default usePopularSeries;