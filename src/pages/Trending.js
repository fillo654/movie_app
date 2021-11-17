import axios from "axios";
import { useEffect, useState } from "react";
import SingleCard from "../components/SingleCard";
import "../css/Trending.css"
import CustomPagination from "../components/Pagination";

const Trending = () => {

    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);

    const fetchTrending = async () => {
        // destructuring data
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=51d8bc30ec5bd8e301f98fc65efc32e4&page=${page}`);

        // console.log(data)
        // console.log(data.results)
        setContent(data.results);
    };

    useEffect(() => {
        fetchTrending();
    }, [page]); // [] richiama solo una volta l'effetto collaterale


    // const [movie, setMovie] = useState(movie)

    // useEffect(() => {
    //   fetch('https://api.themoviedb.org/3/movie/550?api_key=51d8bc30ec5bd8e301f98fc65efc32e4')
    //     .then(res => res.json())
    //     .then(movie => setMovie(movie))
    // });


    return (
        <div>

            <h1 className="pageTitle">Trending</h1>

            <div container className="trending">
            {/* se c'è qualocsa inside content e content map, (console.log(c)) */}
                {content.map((c) =>
                    <SingleCard
                        key={c.id}
                        id={c.id}
                        title={c.title || c.name}
                        poster={c.poster_path}
                        date={c.first_air_date || c.release_date}
                        media_type={c.media_type}
                        vote_average={c.vote_average}
                    />
                )}
            </div>
            <CustomPagination setPage={setPage} />

        </div>
    );
}

export default Trending;