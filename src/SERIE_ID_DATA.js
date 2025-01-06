import { useEffect, useState } from 'react';

const API_KEY_FETCH = process.env.REACT_APP_API_KEY;
const URL = 'https://api.themoviedb.org/3';

export default function useSerieByID(serieId) {
    const [serie, setSerie] = useState([]);

    useEffect(() => {
        const fetchSerieID = async () => {
            try {
                const response = await fetch(`${URL}/tv/${serieId}?api_key=${API_KEY_FETCH}`);
                const data = await response.json();

                setSerie(data);
            } catch (e) {
                console.error("Erreur lors de la récupération des données : ", e)
            }
        }
        fetchSerieID();
    }, [serieId]);

    return serie;
}