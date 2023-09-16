import PropTypes from 'prop-types';

const Cart = ({ card, index }) => {

    const { title } = card;

    return (
        <div>
            <p className="text-sm font-normal text-gray-400 list-decimal list-inside pb-3">{index + 1} {title}</p>
        </div>
    );
};

Cart.propTypes = {
    card: PropTypes.object,
    index: PropTypes.number
}

export default Cart;