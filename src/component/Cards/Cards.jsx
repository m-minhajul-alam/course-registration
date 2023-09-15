import { useEffect, useState } from "react";
import Card from "../Card/Card";
import SidePanel from "../SidePanel/SidePanel";

const Cards = () => {

    const [cards, setCards] = useState()

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, [])

    return (
        <div>

            <div className="flex gap-2">

                <div className="grid grid-cols-3 gap-2 w-3/4">

                    {
                        cards.map(card => <Card key={card.id} card={card}></Card>)
                    }

                </div>

                <div className="bg-white p-5 rounded-xl w-1/4">

                    <SidePanel></SidePanel>

                </div>

            </div>

        </div>
    );
};

export default Cards;