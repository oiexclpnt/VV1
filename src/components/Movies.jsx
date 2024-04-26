import { Movie } from './Movie'
import lost from '../img/lost.png'

function Movies(props) {
    const { movies = [] } = props;

    return <div className="movies">
        {movies.length ? (
            movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
        ) : (
                <div>
                    <img src={lost}/>
                </div>
        )} 
    </div>
}
export { Movies };