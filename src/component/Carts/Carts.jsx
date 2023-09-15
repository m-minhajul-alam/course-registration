import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';

const Carts = ({ cards }) => {

    return (
        <div className="bg-white p-5 rounded-xl w-1/4">
            <h3 className="text-base font-bold text-blue-500 text-center py-2">Credit Hour Remaining 20hr</h3>
            <hr />
            <h4 className="text-sm font-bold py-2">Course Name</h4>

            {
                cards.map(card => <Cart key={card.id} card={card}></Cart>)
            }

            <hr />
            <h5 className="text-sm font-medium py-2">Total Credit Hour : 13</h5>
            <hr />
            <h5 className="text-sm font-semibold py-2">Total Price : 48000 USD</h5>
        </div>
    );
};

Carts.propTypes = {
    cards: PropTypes.array
}

export default Carts;