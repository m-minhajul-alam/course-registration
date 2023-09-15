import PropTypes from 'prop-types';

const Card = ({ card }) => {

    const { cover_img, title, description, price, credit } = card

    return (
        <div>

            <div className="bg-white p-5 rounded-xl h-full">

                <div className="flex justify-center items-center">
                    <img className="rounded-lg " src={cover_img} alt="" />
                </div>

                <div className="my-3">
                    <h4 className="text-md font-semibold my-3">{title}</h4>
                    <p className="text-xs font-normal text-gray-400 my-3">{description}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="w-4" src="./../../src/assets/icons/dollar-sign.png" alt="" />
                            <p className="ml-2 text-sm font-medium text-gray-400">{`Price: ${price}`}</p>
                        </div>
                        <div className="flex items-center">
                            <img className="w-4" src="./../../src/assets/icons/Frame.png" alt="" />
                            <p className="ml-2 text-sm font-medium text-gray-400">{`Cradit: ${credit}hr`}</p>
                        </div>
                    </div>
                </div>

                <div className='mt-auto'>
                    <button className="text-sm text-white font-semibold py-2 w-full rounded-lg bg-blue-500 mt-auto">Select</button>
                </div>
                
            </div>

        </div>
    );
};

Card.proptypes = {
    card: PropTypes.object,
}

export default Card;