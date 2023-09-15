import { useState } from 'react'
import './App.css'
import Cards from './component/Cards/Cards'
import Carts from './component/Carts/Carts'
import Header from './component/Header/Header'

function App() {
  const [cards, setCard] = useState([]);
  const [remainingCreditHour, setRemainingCreditHour] = useState(0)
  const [totalCreditHour, setTotalCreditHour] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const handelSelectCard = (card) => {
    const isExist = cards.find((item) => item.id == card.id);

    let priceCount = card.price;
    let creditCount = card.credit;

    if (isExist) {
      return alert("ache vai");
    }
    else {

      cards.forEach((item) => {
        priceCount = priceCount + item.price;
        creditCount = creditCount + item.credit;
      })

      const remainingCreditHour = 20 - creditCount;

      setRemainingCreditHour(remainingCreditHour);
      setTotalCreditHour(creditCount);
      setTotalPrice(priceCount);

      const newCards = [...cards, card];
      setCard(newCards);
    }
  }

  return (
    <>
      <Header></Header>

      <div className="flex gap-2">

        <Cards handelSelectCard={handelSelectCard}></Cards>
        <Carts cards={cards} remainingCreditHour={remainingCreditHour} totalCreditHour={totalCreditHour} totalPrice={totalPrice}></Carts>

      </div>
    </>
  )
}

export default App
