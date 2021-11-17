import axios from "axios";
import { useEffect, useState } from "react";
import SingleCard from "../components/SingleCard";
import CustomPagination from "../components/Pagination";
import Filter from "../components/Filters/Filter";
import Order from "../components/Orders/Order";

const Movies = () => {

    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState();
    // const [selectedGneres, setSelectedGeneres ] = useState([]);
    

    const fetchMovies = async () => {

        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=51d8bc30ec5bd8e301f98fc65efc32e4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`);

        // console.log(data);
        // console.log(data.results);
        setContent(data.results);
        setNumOfPages(data.total_pages)
    }

    useEffect(() => {
        fetchMovies();
    }, [page]);

    return (
        <div >
            <h1 className="">Movies</h1>
            <div >
                <Filter />
                <Order />
            </div>
            <div container className="trending">
            <selectedGneres />
            {/* se c'è qualocsa inside content e content map, (console.log(c)) */}
                {content.map((c) =>
                    <SingleCard
                        key={c.id}
                        id={c.id}
                        title={c.title || c.name}
                        poster={c.poster_path}
                        date={c.first_air_date || c.release_date}
                        media_type="movie"
                        vote_average={c.vote_average}
                    />
                )}
            </div>
            <CustomPagination setPage={setPage} numOfPages={numOfPages}/>

        </div>
    );
}

export default Movies;