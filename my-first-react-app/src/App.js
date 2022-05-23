import './App.css';
import { useState } from 'react';
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
import NewFormEvent from './components/NewFormEvent';
function App() {
  let [events , setEvents] = useState([])
  
  const [showEvents,setShowEvents]= useState(false);
  const [showModal , setShowModal] = useState(false);
  const addEvent = (event)=>{
    setEvents((prevEvents)=>{
      return [...prevEvents , event];
    })
    setShowModal(false);
  }
  function handleOnClick(id){
    setEvents((prevEvents)=>{
      return prevEvents.filter((event)=>{
        return id !== event.id
      })
    })
  }
  function closeModal(){
    setShowModal(false);
  }
  return (
    <>
    {!showEvents && <button onClick={()=>{setShowEvents(true)}}>show Events</button>}
    {showEvents && <button onClick={()=>{setShowEvents(false)}}>hide Events</button>}
    {!showModal && <button onClick={()=>{setShowModal(true)}}>Show modal</button>}
    <div className="App">
      {showModal && <Modal closeModal = {closeModal}>
        <NewFormEvent addEvent={addEvent}/>
        </Modal>}
      <Title title="Events in mario World are unique"/>
      <EventList handleOnClick = {handleOnClick} events = {events} showEvents={showEvents}/>
    </div>
    </>
  );
}

export default App;
