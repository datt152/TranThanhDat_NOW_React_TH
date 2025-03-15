import PropTypes from 'prop-types';

const Card = ({ value }) => {
    return (
        <div className="border rounded-xl p-2 w-56 flex flex-col justify-between h-full">
            <img
                src={value.strMealThumb}
                alt={value.strMeal}
                className="w-full h-32 object-cover rounded-t-xl"
            />
            <div className="p-2 flex flex-col flex-grow justify-between">
                <h3 className="text-lg font-bold break-words">{value.strMeal}</h3>
                <div className="flex justify-between items-center mt-2">
                    <span className="text-sm font-semibold text-gray-600">{value.idMeal}</span>
                    <button className="text-red-500 text-xl px-2 py-1 rounded text-sm hover:text-red-700">
                        ♥
                    </button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    value: PropTypes.shape({
        strMealThumb: PropTypes.string.isRequired,
        strMeal: PropTypes.string.isRequired,
        idMeal: PropTypes.string.isRequired,
    }).isRequired,
};

export default Card;
