import PropTypes from 'prop-types';
import { BsBook } from 'react-icons/bs';
import { LuDollarSign } from 'react-icons/lu';


const Card = ({ card, handelSelectCard }) => {

    const { coverImg, title, description, price, credit } = card;

    return (
        <div>
            <div className="bg-white p-5 rounded-xl h-full">
                <div className="flex justify-center items-center">
                    <img className="rounded-lg " src={coverImg} alt="" />
                </div>
                <div className="my-3">
                    <h4 className="text-md font-semibold my-3">{title}</h4>
                    <p className="text-xs font-normal text-gray-400 my-3">{description}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <span><LuDollarSign></LuDollarSign></span>
                            <p className="ml-2 text-sm font-medium text-gray-400">{`Price: ${price}`}</p>
                        </div>
                        <div className="flex items-center">
                            <span><BsBook></BsBook></span>
                            <p className="ml-2 text-sm font-medium text-gray-400">{`Credit: ${credit}hr`}</p>
                        </div>
                    </div>
                </div>
                <div className='mt-auto'>
                    <button onClick={() => handelSelectCard(card)} className="text-sm text-white font-semibold py-2 w-full rounded-lg bg-blue-500 mt-auto">Select</button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object,
    handelSelectCard: PropTypes.func
}

export default Card;