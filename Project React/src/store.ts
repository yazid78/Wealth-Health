import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, TypeEmployee } from './interface';


const initialState: AppState = {
    show: false,
    employee: [
        {
            firstname: "John",
            lastname: "Doe",
            dateofbirth: "1990-04-15",
            startdate: "2021-08-01",
            department: "Engineering",
            street: "123 Elm Street",
            city: "Springfield",
            state: "IL",
            zipCode: "62704",
        },
        {
            firstname: "Jane",
            lastname: "Smith",
            dateofbirth: "1985-12-22",
            startdate: "2020-11-15",
            department: "Marketing",
            street: "456 Oak Avenue",
            city: "Riverside",
            state: "CA",
            zipCode: "92501",
        },
        {
            firstname: "Michael",
            lastname: "Johnson",
            dateofbirth: "1978-02-10",
            startdate: "2019-05-20",
            department: "Human Resources",
            street: "789 Pine Road",
            city: "Dallas",
            state: "TX",
            zipCode: "75201",
        },
        {
            firstname: "Emily",
            lastname: "Davis",
            dateofbirth: "1992-07-30",
            startdate: "2022-03-12",
            department: "Finance",
            street: "101 Maple Lane",
            city: "Seattle",
            state: "WA",
            zipCode: "98101",
        },
        {
            firstname: "Chris",
            lastname: "Brown",
            dateofbirth: "1983-09-17",
            startdate: "2018-01-05",
            department: "IT",
            street: "202 Cedar Street",
            city: "Atlanta",
            state: "GA",
            zipCode: "30303",
        },
        {
            firstname: "John",
            lastname: "Doe",
            dateofbirth: "1990-04-15",
            startdate: "2021-08-01",
            department: "Engineering",
            street: "123 Elm Street",
            city: "Springfield",
            state: "IL",
            zipCode: "62704",
        },
        {
            firstname: "Jane",
            lastname: "Smith",
            dateofbirth: "1985-12-22",
            startdate: "2020-11-15",
            department: "Marketing",
            street: "456 Oak Avenue",
            city: "Riverside",
            state: "CA",
            zipCode: "92501",
        },
        {
            firstname: "Michael",
            lastname: "Johnson",
            dateofbirth: "1978-02-10",
            startdate: "2019-05-20",
            department: "Human Resources",
            street: "789 Pine Road",
            city: "Dallas",
            state: "TX",
            zipCode: "75201",
        },
        {
            firstname: "Emily",
            lastname: "Davis",
            dateofbirth: "1992-07-30",
            startdate: "2022-03-12",
            department: "Finance",
            street: "101 Maple Lane",
            city: "Seattle",
            state: "WA",
            zipCode: "98101",
        },
        {
            firstname: "Chris",
            lastname: "Brown",
            dateofbirth: "1983-09-17",
            startdate: "2018-01-05",
            department: "IT",
            street: "202 Cedar Street",
            city: "Atlanta",
            state: "GA",
            zipCode: "30303",
        },
        {
            firstname: "John",
            lastname: "Doe",
            dateofbirth: "1990-04-15",
            startdate: "2021-08-01",
            department: "Engineering",
            street: "123 Elm Street",
            city: "Springfield",
            state: "IL",
            zipCode: "62704",
        },
        {
            firstname: "Jane",
            lastname: "Smith",
            dateofbirth: "1985-12-22",
            startdate: "2020-11-15",
            department: "Marketing",
            street: "456 Oak Avenue",
            city: "Riverside",
            state: "CA",
            zipCode: "92501",
        },
        {
            firstname: "Michael",
            lastname: "Johnson",
            dateofbirth: "1978-02-10",
            startdate: "2019-05-20",
            department: "Human Resources",
            street: "789 Pine Road",
            city: "Dallas",
            state: "TX",
            zipCode: "75201",
        },
        {
            firstname: "Emily",
            lastname: "Davis",
            dateofbirth: "1992-07-30",
            startdate: "2022-03-12",
            department: "Finance",
            street: "101 Maple Lane",
            city: "Seattle",
            state: "WA",
            zipCode: "98101",
        },
        {
            firstname: "Chris",
            lastname: "Brown",
            dateofbirth: "1983-09-17",
            startdate: "2018-01-05",
            department: "IT",
            street: "202 Cedar Street",
            city: "Atlanta",
            state: "GA",
            zipCode: "30303",
        },
    ]
};

const authSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setShow: (state, action: PayloadAction<boolean>) => {
            state.show = action.payload;
        },
        setEmployee: (state, action: PayloadAction<TypeEmployee>) => {
            state.employee.push(action.payload);
        },
        clearEmployee: (state) => {
            state.employee = [];
        },
    },
});

export const { setShow, setEmployee, clearEmployee } = authSlice.actions;
const appReducer = authSlice.reducer;

const store = configureStore({
    reducer: {
        app: appReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
