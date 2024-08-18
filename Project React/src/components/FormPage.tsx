import { useState } from "react";
import { useDispatch } from "react-redux";
import { setEmployee } from "../store";
import '../css/form.css';
import { departments, states } from "../data";
import MyDatePicker from "./DatePicker";
import Modale from "./Modal";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

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

    const [errors, setErrors] = useState({
        firstname: '',
        lastname: '',
        dateofbirth: '',
        startdate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: '',
    });

    const [showModal, setShowModal] = useState(false);

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
        return Object.values(newErrors).every(error => error === '');
    };

    const saveEmployee = () => {
        if (validateForm()) {
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
            setShowModal(true);

        }
    };



    return (
        <>
            <form>
                <div className="firstForm">
                    <label htmlFor="firstname">Firstname</label>
                    <input id="firstname" onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" name='firstname' />
                    {errors.firstname && <span className="error">{errors.firstname}</span>}
                    <label htmlFor="lastname">Lastname</label>
                    <input id="lastname" onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" name='lastname' />
                    {errors.lastname && <span className="error">{errors.lastname}</span>}
                    <label htmlFor="DateofBirth">Date of Birth</label>
                    <MyDatePicker
                        selected={dateofbirth}
                        onChange={(date) => setDateOfBirth(date)}
                        placeholder="Date of Birth"
                        id="dateofbirth"
                    />
                    {errors.dateofbirth && <span className="error">{errors.dateofbirth}</span>}
                    <label htmlFor="StartDate">Start Date</label>
                    <MyDatePicker
                        selected={startdate}
                        onChange={(date) => setStartDate(date)}
                        placeholder="Start Date"
                        id="startdate"
                    />
                    {errors.startdate && <span className="error">{errors.startdate}</span>}
                </div>
                <fieldset className="secondForm">
                    <legend>Address</legend>
                    <label htmlFor="street">Street</label>
                    <input id="street" onChange={(e) => setStreet(e.target.value)} required type="text" placeholder="Street" name='street' />
                    {errors.street && <span className="error">{errors.street}</span>}
                    <label htmlFor="city">City</label>
                    <input id="city" onChange={(e) => setCity(e.target.value)} type="text" placeholder="City" name='city' />
                    {errors.city && <span className="error">{errors.city}</span>}
                    <label htmlFor="state">State</label>
                    <Dropdown
                        options={statesData}
                        onChange={(option) => setState(option.value)}
                        value={"Alabama"}
                        placeholder="Select an option"
                    />
                    {errors.state && <span className="error">{errors.state}</span>}
                    <label htmlFor="zipCode">ZipCode</label>
                    <input id="zipcode" onChange={(e) => setZipCode(e.target.value)} type="text" placeholder="Zip Code" name='zipCode' />
                    {errors.zipCode && <span className="error">{errors.zipCode}</span>}
                    <label htmlFor="department">Department</label>
                    <Dropdown
                        options={departments}
                        onChange={(option) => setDepartment(option.value)}
                        value={"Sales"}
                        placeholder="Select a department"
                    />
                    {errors.department && <span className="error">{errors.department}</span>}
                </fieldset>
            </form>
            <div className="saveButton">
                <button onClick={saveEmployee}>Save Employee</button>
                {showModal && <Modale onClose={() => setShowModal(false)} />}
            </div>
        </>
    );
};

export default Form;
