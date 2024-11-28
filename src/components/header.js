import HomeMoviePreview from "./homeMoviePreview";
import HeaderMenu from "./header-menu";


function Header(){
    return(
        <header>
            <HeaderMenu />
            <HomeMoviePreview />
        </header>
    ) 
}

export default Header;