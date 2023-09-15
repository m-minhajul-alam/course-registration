import PropTypes from 'prop-types'
const Cart = ({ card }) => {

    const { title } = card;

    return (
        <div>
            <p className="text-sm font-normal text-gray-400 list-decimal list-inside pb-3">{title}</p>
        </div>
    );
};

Cart.propTypes = {
    card: PropTypes.object
}

export default Cart;