import PropTypes from 'prop-types';
const PizzaCard = ({ name, description, stock, image }) => {
    return (
        <div className="flex items-center p-4 border rounded-md shadow-md">
            <div className={`relative`}>
                <img
                    src={image}
                    alt={name}
                    className={`rounded-md w-40 h-30 mr-4 ${stock === 0 ? 'opacity-50 grayscale' : ''}`}
                />
                {stock === 0 && (
                    <span className="absolute inset-0 flex items-center justify-center text-black text-2xl font-bold0 bg-opacity-75 rounded-md">
                        Sold Out
                    </span>
                )}
            </div>
            <div className="flex flex-col">
                <h2 className="text-lg font-bold mb-2">{name}</h2>
                <p className="text-gray-600 mb-2">{description}</p>
                <span className="text-sm text-gray-500">
                    {stock === 0 ? 'Sold Out' : `Stock: ${stock}`}
                </span>
                <button
                    className={`bg-yellow-300 hover:bg-yellow-600 rounded-md p-2 text-black font-small w-fit mt-2 ${stock === 0 ? 'cursor-not-allowed opacity-50' : ''}`}
                    disabled={stock === 0}
                >
                    Order Now
                </button>
            </div>
        </div>
    );
};

PizzaCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
};

export default PizzaCard;

