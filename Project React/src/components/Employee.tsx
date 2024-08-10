import DataTable, { TableColumn } from "react-data-table-component";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { TypeEmployee } from "../interface";
import '../css/employee.css'
import { useState } from "react";

const Employee = () => {
    const data: TypeEmployee[] = useSelector((state: RootState) => state.app.employee);

    const columns: TableColumn<TypeEmployee>[] = [
        {
            name: "First Name",
            selector: (row: TypeEmployee) => row.firstname,
            sortable: true,
        },
        {
            name: "Last Name",
            selector: (row: TypeEmployee) => row.lastname,
            sortable: true
        },
        {
            name: "Start Date",
            selector: (row: TypeEmployee) => row.startdate,
            sortable: true
        },
        {
            name: "Department",
            selector: (row: TypeEmployee) => row.department,
            sortable: true
        },
        {
            name: "Date of Birth",
            selector: (row: TypeEmployee) => row.dateofbirth,
            sortable: true
        },
        {
            name: "Street",
            selector: (row: TypeEmployee) => row.street,
            sortable: true
        },
        {
            name: "City",
            selector: (row: TypeEmployee) => row.city,
            sortable: true
        },
        {
            name: "State",
            selector: (row: TypeEmployee) => row.state,
            sortable: true
        },
        {
            name: "Zip Code",
            selector: (row: TypeEmployee) => row.zipCode,
            sortable: true
        },
    ];

    const [records, setRecords] = useState(data);

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        const filteredData = data.filter(row => {
            return (
                row.firstname.toLowerCase().includes(query) ||
                row.lastname.toLowerCase().includes(query) ||
                row.department.toLowerCase().includes(query) ||
                row.street.toLowerCase().includes(query) ||
                row.city.toLowerCase().includes(query) ||
                row.state.toLowerCase().includes(query) ||
                row.zipCode.toLowerCase().includes(query)
            );
        });
        setRecords(filteredData);
    };

    return (
        <div className="containerTable">
            <div className="searchInput">
                <input
                    type="text"
                    placeholder="Search"
                    onChange={handleFilter}
                />
            </div>
            <DataTable
                columns={columns}
                data={records}
                pagination
            />
        </div>
    );
};

export default Employee;
