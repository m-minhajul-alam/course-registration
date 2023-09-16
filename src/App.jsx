import { useState } from 'react'
import './App.css'
import Cards from './component/Cards/Cards'
import Carts from './component/Carts/Carts'
import Header from './component/Header/Header'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cards, setCard] = useState([]);
  const [remainingCreditHour, setRemainingCreditHour] = useState(20);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handelSelectCard = (card) => {
    const isExist = cards.find((item) => item.id == card.id);

    let priceCount = card.price;
    let creditCount = card.credit;

    if (isExist) {
      return toast.success('This course is alredy added!', {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "colored"
      });

    } else {
      cards.forEach((item) => {
        priceCount = priceCount + item.price;
        creditCount = creditCount + item.credit;
      })

      const remainingCreditHour = 20 - creditCount;

      if (creditCount > 20 && remainingCreditHour < 20) {

        return toast.warn('You reach your credit limit!', {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "colored"
        });


      } else {
        setRemainingCreditHour(remainingCreditHour);
        setTotalCreditHour(creditCount);
        setTotalPrice(priceCount);

        const newCards = [...cards, card];
        setCard(newCards);

      }
    }
  }

  return (
    <>
      <Header></Header>
      <div className="flex gap-2">
        <Cards handelSelectCard={handelSelectCard}></Cards>
        <Carts cards={cards} remainingCreditHour={remainingCreditHour} totalCreditHour={totalCreditHour} totalPrice={totalPrice}></Carts>
      </div>
      <div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  )
}

export default App
