
import "../components/card-style.css";

const Card = ({ value }) => {

    return (
        <div className="card">
            <img
                src={value.strMealThumb}
                alt=""
                className="card-image"
            />
            <div className="card-content">
                <h3 className="card-title">{value.strMeal}</h3>
                <div className="card-footer">
                    <span className="time-label">{value.idMeal}</span>
                    <button className="bookmark-btn">♡</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
