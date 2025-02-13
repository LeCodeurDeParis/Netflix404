import ContentBanner from '../components/contentBanner';
import useSerieByID from '../SERIE_ID_DATA';
import useCastSerie from '../CAST_SERIE_DATA';
import ContentInfo from '../components/contentInfo';
import Cast from '../components/cast';


export default function DetailPageSerie() {

    const pathname = window.location.pathname;
    const id = pathname.split('/').pop();
    const serie = useSerieByID(id);
    const serieCast = useCastSerie(id);
    return (
        <div className='bg-[#141414] h-[100vh]'>
            <ContentBanner content={serie} />
            <ContentInfo content={serie} cast={serieCast} />
            <Cast cast={serieCast} />
        </div>
    );
}

