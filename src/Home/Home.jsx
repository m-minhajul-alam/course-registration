import { useEffect, useState } from "react";

const Home = () => {
    const [card, setCard] = useState([])

    useEffect(() => {
        fetch('./data.json')
            .then((res) => res.json())
            .then((data) => setCard(data));
    }, [])

    return (
        <div>
            <h1 className='text-3xl font-bold text-center mb-7'>Course Registration</h1>
        </div>
    );
};

export default Home;