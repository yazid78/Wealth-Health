
import { useDispatch } from 'react-redux';
import Modal from './Modal.tsx'
import { setShow } from '../store.ts';
import Form from './form.tsx';

function App() {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setShow(true));
    console.log("ca marche");
  }

  return (
    <>
      <div className="App">
        <button onClick={openModal}> show modal</button>
      </div>
      <Modal />
      <Form />
    </>
  )
}

export default App

