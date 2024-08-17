import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setEmployee, setShow } from "../store";
import '../css/form.css';
import { states } from "../data";
import MyDatePicker from "./DatePicker";

const useOpenModal = () => {
    const dispatch = useDispatch();
    const openModal = () => {
        dispatch(setShow(true));
    }
    return openModal
};

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

    const [errors, setErrors] = useState(
        {
            firstname: '',
            lastname: '',
            dateofbirth: '',
            startdate: '',
            street: '',
            city: '',
            state: '',
            zipCode: '',
            department: '',
        }
    )
    const openModal = useOpenModal();

    const validateForm = () => {
        const newErrors = {
            firstname: firstname ? '' : 'First name is required',
            lastname: lastname ? '' : 'Last name is required',
            dateofbirth: dateofbirth ? '' : 'Date of Birth is required',
            startdate: startdate ? '' : 'Start Date is required',
            street: street ? '' : 'Street is required',
            city: city ? '' : 'City is required',
            state: state ? '' : 'State is required',
            zipCode: zipCode ? '' : 'Zip Code is required',
            department: department ? '' : 'Department is required',
        };
        setErrors(newErrors);
        // Vérifie s'il n'y a pas d'erreurs
        return Object.values(newErrors).every(error => error === '');
    };
    const saveEmployee = () => {
        if (validateForm()) {
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
        }
    };

    const prenom = useSelector((state: RootState) => state.app.employee);
    console.log(prenom, 'Info employee');

    return (
        <>
            <form>
                <div className="firstForm">
                    <label htmlFor="firstname">Firstname</label>
                    <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" name='firstname' />
                    {errors.firstname && <span className="error">{errors.firstname}</span>}
                    <label htmlFor="lastname">Lastname</label>
                    <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" name='lastname' />
                    {errors.lastname && <span className="error">{errors.lastname}</span>}
                    <label htmlFor="DateofBirth">Date of Birth</label>
                    <MyDatePicker
                        selected={dateofbirth}
                        onChange={(date) => setDateOfBirth(date)}
                        placeholder="Date of Birth"

                    />
                    {errors.dateofbirth && <span className="error">{errors.dateofbirth}</span>}
                    <label htmlFor="StartDate">Start Date</label>
                    <MyDatePicker
                        selected={dateofbirth}
                        onChange={(date) => setStartDate(date)}
                        placeholder="Start Date"
                    />
                    {errors.startdate && <span className="error">{errors.startdate}</span>}
                </div>
                <fieldset className="secondForm">
                    <legend>Address</legend>
                    <label htmlFor="street">Street</label>
                    <input onChange={(e) => setStreet(e.target.value)} required type="text" placeholder="Street" name='street' />
                    {errors.street && <span className="error">{errors.street}</span>}
                    <label htmlFor="city">City</label>
                    <input onChange={(e) => setCity(e.target.value)} type="text" placeholder="City" name='city' />
                    {errors.city && <span className="error">{errors.city}</span>}
                    <label htmlFor="state">State</label>
                    <select onChange={(e) => setState(e.target.value)} name="state" id="state">
                        {statesData.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                    {errors.state && <span className="error">{errors.state}</span>}
                    <label htmlFor="zipCode">ZipCode</label>
                    <input onChange={(e) => setZipCode(e.target.value)} type="text" placeholder="Zip Code" name='zipCode' />
                    {errors.zipCode && <span className="error">{errors.zipCode}</span>}
                    <label htmlFor="department">Department</label>
                    <select onChange={(e) => setDepartment(e.target.value)} name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                    {errors.department && <span className="error">{errors.department}</span>}
                </fieldset>
            </form>
            <div className="saveButton">
                <button onClick={saveEmployee}>Save Employee</button>
            </div>
        </>
    );
};

export default Form;
