import { img_300 } from "../config/config";
import { unavailable } from "../config/config";
import Badge from '@mui/material/Badge';
import "../css/SingleCard.css"

// {} destructure
const SingleCard = ({ id, title, poster, date, media_type, vote_average }) => {

    let newDate = new Date(date).toLocaleDateString()
    // console.log(newDate)

    return (
        <div className="card">
            <Badge sx={{right: "-190px"}} badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"} />
            <img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <div className="cardContent">
                <span className="title">{title}</span>
                <p className="media_type">{media_type === "tv" ? "TV Series" : "Movie"}</p>
                <p className="date">{newDate}</p>
            </div>
        </div>
    );
}

export default SingleCard;