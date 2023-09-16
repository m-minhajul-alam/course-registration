import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Cards = ({ handelSelectCard }) => {

    const [cards, setCards] = useState();

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])


    return (

        <div className="grid grid-cols-3 gap-2 w-3/4">

            {
                cards && cards.map(card => <Card key={card.id} handelSelectCard={handelSelectCard} card={card}></Card>)
            }

        </div>
    );
};

Cards.propTypes = {
    handelSelectCard: PropTypes.func
}

export default Cards;