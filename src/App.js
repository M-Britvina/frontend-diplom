import { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router";
import Main from './component/Main';
import TrainChooser from './component/TrainChooser';
import PlaceChooser from './component/PlaceChooser';
import Passengers from './component/Passengers';
import Payment from './component/Payment';
import OrderConfirmation from './component/OrderConfirmation';
import SuccessOrder from './component/SuccessOrder';
import Header from './component/Header';
import Footer from './component/Footer';
import Modal from './component/Modal';

function App() {
  const [ modalData, setModalData] = useState({});
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ findingTrains, setFindingTrains ] = useState([]);

  const openModal = (isError, content) => {
    console.log('open modal');
    setIsModalOpen(true);
    setModalData({
        isError,
        content,
        onClose: closeModal
    });
  }

  const closeModal = () => {
    console.log('close modal');
    setModalData({});
    setIsModalOpen(false);
  }

  const handleSearchTrains = (trains) => {
    setFindingTrains(trains);
    console.log(trains);
  }

  return (
    <>
      <Modal isOpen={isModalOpen} isError={modalData.isError} content={modalData.content} onClose={closeModal}/>
      <Header handleSearchTrains={handleSearchTrains}/>
      <main>
        <Routes>
            <Route index element={<Main />} />
            <Route path="train-chooser" element={<TrainChooser totalCount={findingTrains.total_count} trains={findingTrains.items}/>}/>
            <Route path="place-chooser" element={<PlaceChooser />} />
            <Route path="passengers" element={<Passengers />} />
            <Route path="payment" element={<Payment />} />
            <Route path="order-confirmation" element={<OrderConfirmation />} />
            <Route path="success-order" element={<SuccessOrder />} />
        </Routes>

      </main>
      <Footer openModal={openModal} />
    </>
  );
}

export default App;
