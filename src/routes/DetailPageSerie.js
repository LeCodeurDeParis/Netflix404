import useSerieByID from '../SERIE_ID_DATA';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";


export default function DetailPageSerie() {

    const pathname = window.location.pathname;
    const id = pathname.split('/').pop();
    const serie = useSerieByID(id);
    return (
        <div>
            <h1>{serie.title}</h1>
            <p>{serie.overview}</p>
            <img src={`${IMAGE_BASE_URL}${serie.poster_path}`} alt={serie.title} />
        </div>
    );
}

