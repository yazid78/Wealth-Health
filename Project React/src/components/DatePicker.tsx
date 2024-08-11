import React from 'react';
import DatePicker from 'react-datepicker'; // Importer le composant DatePicker
import 'react-datepicker/dist/react-datepicker.css'; // Importer les styles CSS
import '../css/form.css';

interface MyDatePickerProps {
    selected: Date | null;
    onChange: (date: Date | null) => void;
    placeholder: string
}

const MyDatePicker: React.FC<MyDatePickerProps> = ({ selected, onChange, placeholder }) => {
    return (
        <DatePicker
            selected={selected}
            onChange={onChange}
            dateFormat="dd/MM/yyyy"
            placeholderText={placeholder}
        />
    );
};

export default MyDatePicker;
