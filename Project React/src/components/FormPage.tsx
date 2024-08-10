import { useState } from "react";
import { useOpenModal } from "./functions";
import { useDispatch, useSelector } from "react-redux";
import { clearEmployee, RootState, setEmployee } from "../store";
import '../css/form.css'
import { states } from "../data";
const Form = () => {
    const statesData = states.map(states => states.name)

    const dispatch = useDispatch();

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [dateofbirth, setDateOfBirth] = useState('');
    const [startdate, setStartDate] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [department, setDepartment] = useState('');

    const openModal = useOpenModal();

    const saveEmployee = () => {
        openModal();

        const employee = {
            firstname,
            lastname,
            dateofbirth,
            startdate,
            department,
            street,
            city,
            state,
            zipCode
        };

        dispatch(setEmployee(employee));
        console.log('Employee save');
    };

    const prenom = useSelector((state: RootState) => state.app.employee);
    console.log(prenom, 'Info employee');
    return (
        <>
            <form>
                <div className="firstForm">
                    <label htmlFor="firstname">Firstname</label>
                    <input onChange={(e) => setFirstName(e.target.value)} type="text" name='fistname' />
                    <label htmlFor="lastname">Lastname</label>
                    <input onChange={(e) => setLastName(e.target.value)} type="text" name='lastname' />
                    <label htmlFor="DateofBirth">Date of Birth</label>
                    <input onChange={(e) => setDateOfBirth(e.target.value)} type="text" name='DateofBirth' />
                    <label htmlFor="StartDate">Start Date</label>
                    <input onChange={(e) => setStartDate(e.target.value)} type="text" name='StartDate' />
                </div>
                <fieldset className="secondForm">
                    <legend>Address</legend>
                    <label htmlFor="street">Street</label>
                    <input onChange={(e) => setStreet(e.target.value)} type="text" name='street' />
                    <label htmlFor="city">City</label>
                    <input onChange={(e) => setCity(e.target.value)} type="text" name='city' />
                    <label htmlFor="state">State</label>
                    <select onChange={(e) => setState(e.target.value)} name="state" id="state">
                        {statesData.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>


                    <label htmlFor="zipCode">ZipCode</label>
                    <input onChange={(e) => setZipCode(e.target.value)} type="text" name='zipCode' />
                    <label htmlFor="departement">Department</label>
                    <select onChange={(e) => setDepartment(e.target.value)} name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </fieldset>

            </form>
            <div className="saveButton">
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
