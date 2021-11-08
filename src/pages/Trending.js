import axios from "axios";
import { useEffect, useState } from "react";
import SingleCard from "../components/SingleCard";
import "../css/Trending.css"

const Trending = () => {

    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        // destructuring data
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=51d8bc30ec5bd8e301f98fc65efc32e4`);

        // console.log(data)
        console.log(data.results)
        setContent(data.results);
    };

    useEffect(() => {
        fetchTrending();
    }, []); // [] richiama solo una volta l'effetto collaterale



    return (
        <div>

            {/* se c'è qualocsa inside content e map content, (console.log(c)) */}
            <h1 className="pageTitle">Trending</h1>

            <div container className="trending">
                {content && content.map((c) =>
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

        </div>
    );
}

export default Trending;