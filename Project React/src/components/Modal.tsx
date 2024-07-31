import { useDispatch, useSelector } from "react-redux";
import { RootState, setShow } from "../store";
import '../css/modal.css';

const Modal = () => {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(setShow(false));
        console.log("modal fermé");
    }

    const show = useSelector((state: RootState) => state.app.show);
    console.log(show, 'Modal ouverte');

    if (!show) {
        return null;
    }

    return (
        <div className='modal' onClick={closeModal}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <h4 className='modal-title'>Modal title</h4>
                </div>
                <div className='modal-body'>
                    Employee created!
                </div>
                <div className="modal-footer">
                    <button onClick={closeModal} className="button">Close</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
