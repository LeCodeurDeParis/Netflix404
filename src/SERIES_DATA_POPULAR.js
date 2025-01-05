import { useEffect, useState } from 'react';

const API_KEY_FETCH = process.env.REACT_APP_API_KEY;
const URL = 'https://api.themoviedb.org/3';

const usePopularSeries = (endpoint = 'tv/popular') => {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        const fetchAllSeries = async () => {
            try {
                const response = await fetch(`${URL}/${endpoint}?api_key=${API_KEY_FETCH}`)
                const data = await response.json()


                setSeries(data.results || [])
            } catch (e) {
                console.error("Erreur lors de la récupération des données : ", e)
            }
        }
        
        fetchAllSeries()
    }, [endpoint])

    return { series }
}

export default usePopularSeries;