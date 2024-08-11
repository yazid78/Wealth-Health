import { useState } from "react";
import { useOpenModal } from "./functions";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setEmployee } from "../store";
import '../css/form.css';
import { states } from "../data";
import MyDatePicker from "./DatePicker";

const Form = () => {
    const statesData = states.map(state => state.name);

    const dispatch = useDispatch();

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [dateofbirth, setDateOfBirth] = useState<Date | null>(null);
    const [startdate, setStartDate] = useState<Date | null>(null);
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
            dateofbirth: dateofbirth ? dateofbirth.toISOString().split('T')[0] : '',
            startdate: startdate ? startdate.toISOString().split('T')[0] : '',
            department,
            street,
            city,
            state,
            zipCode
        };

        dispatch(setEmployee(employee));
        console.log('Employee saved');
    };

    const prenom = useSelector((state: RootState) => state.app.employee);
    console.log(prenom, 'Info employee');

    return (
        <>
            <form>
                <div className="firstForm">
                    <label htmlFor="firstname">Firstname</label>
                    <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" name='firstname' />
                    <label htmlFor="lastname">Lastname</label>
                    <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" name='lastname' />
                    <label htmlFor="DateofBirth">Date of Birth</label>
                    <MyDatePicker
                        selected={dateofbirth}
                        onChange={(date) => setDateOfBirth(date)}
                        placeholder="Date of Birth"

                    />
                    <label htmlFor="StartDate">Start Date</label>
                    <MyDatePicker
                        selected={dateofbirth}
                        onChange={(date) => setStartDate(date)}
                        placeholder="Start Date"
                    />
                </div>
                <fieldset className="secondForm">
                    <legend>Address</legend>
                    <label htmlFor="street">Street</label>
                    <input onChange={(e) => setStreet(e.target.value)} type="text" placeholder="Street" name='street' />
                    <label htmlFor="city">City</label>
                    <input onChange={(e) => setCity(e.target.value)} type="text" placeholder="City" name='city' />
                    <label htmlFor="state">State</label>
                    <select onChange={(e) => setState(e.target.value)} name="state" id="state">
                        {statesData.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                    <label htmlFor="zipCode">ZipCode</label>
                    <input onChange={(e) => setZipCode(e.target.value)} type="text" placeholder="Zip Code" name='zipCode' />
                    <label htmlFor="department">Department</label>
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
            </div>
        </>
    );
};

export default Form;
