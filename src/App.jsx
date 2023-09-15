import { useState } from 'react'
import './App.css'
import Cards from './component/Cards/Cards'
import Carts from './component/Carts/Carts'
import Header from './component/Header/Header'

function App() {
  const [cards, setCard] = useState([]);

  const handelSelectCard = (card) => {
    const newCards = [...cards, card];
    setCard(newCards);
  }

  return (
    <>
      <Header></Header>

      <div className="flex gap-2">

        <Cards handelSelectCard={handelSelectCard}></Cards>
        <Carts cards={cards}></Carts>

      </div>
    </>
  )
}

export default App
