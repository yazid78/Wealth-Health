
import { useDispatch } from 'react-redux';
import '../css/App.css'
import Modal from './Modal.tsx'
import { setShow } from '../store.ts';

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
    </>
  )
}

export default App

/* const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}; */