import { useState } from "react";
import { useOpenModal } from "./functions";
import { useDispatch, useSelector } from "react-redux";
import { clearEmployee, RootState, setEmployee } from "../store";

const Form = () => {
    const dispatch = useDispatch();
    const [firstname, setFirstName] = useState('')
    const openModal = useOpenModal();

    const saveEmployee = () => {
        openModal();
        dispatch(setEmployee(firstname));
        console.log('Employee save');
    }
    const prenom = useSelector((state: RootState) => state.app.employee);
    console.log(prenom, 'Info employee');
    return (
        <>
            <form>
                <input onChange={(e) => setFirstName(e.target.value)} type="text" name='fistname' />
            </form>
            <div className="App">
                <button onClick={saveEmployee}>Save Employee</button>
                <button onClick={() => {
                    dispatch(clearEmployee());
                }}>
                    Clear
                </button>
            </div>
        </>

    );
}

export default Form;
