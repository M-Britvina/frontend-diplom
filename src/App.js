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
  const [ selectedTrain, setSelectedTrain ] = useState({});
  const [ findingsSeats, setFindingSeats ] = useState([]);
  const [ selectedPlace, setSelectedPlace ] = useState({});

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

  const handleSearchSeats = (seats, train) => {
    setFindingSeats(seats);
    setSelectedTrain(train);
    console.log(train);
    console.log(seats);
  }

  const handleSelectPlace = (coach, place) => {
    setSelectedPlace({coach, place});
    console.log(coach);
    console.log(place);
  }

  return (
    <>
      <Modal isOpen={isModalOpen} isError={modalData.isError} content={modalData.content} onClose={closeModal}/>
      <Header handleSearchTrains={handleSearchTrains}/>
      <main>
        <Routes>
            <Route index element={<Main />} />
            <Route path="train-chooser" element={<TrainChooser 
              totalCount={findingTrains.total_count} 
              trains={findingTrains.items}
              handleSearchSeats={handleSearchSeats}/>}
            />
            <Route path="place-chooser" element={<PlaceChooser 
              seats={findingsSeats}
              departure={selectedTrain}
              handleSelectPlace={handleSelectPlace}/>} />
            <Route path="passengers" element={<Passengers />} />
            <Route path="payment" element={<Payment 
              departure={selectedTrain}
              place={selectedPlace} />} />
            <Route path="order-confirmation" element={<OrderConfirmation 
              departure={selectedTrain}
              place={selectedPlace}/>} />
            <Route path="success-order" element={<SuccessOrder />} />
        </Routes>

      </main>
      <Footer openModal={openModal} />
    </>
  );
}

export default App;
