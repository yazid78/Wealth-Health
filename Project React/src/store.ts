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
        }, {
            firstname: "David",
            lastname: "Miller",
            dateofbirth: "1988-11-23",
            startdate: "2021-07-15",
            department: "Operations",
            street: "890 Walnut Street",
            city: "Chicago",
            state: "IL",
            zipCode: "60601",
        },
        {
            firstname: "Laura",
            lastname: "Wilson",
            dateofbirth: "1995-05-12",
            startdate: "2020-10-10",
            department: "Sales",
            street: "345 Birch Avenue",
            city: "San Francisco",
            state: "CA",
            zipCode: "94107",
        },
        {
            firstname: "Daniel",
            lastname: "Anderson",
            dateofbirth: "1982-03-08",
            startdate: "2019-04-21",
            department: "Legal",
            street: "678 Willow Lane",
            city: "Boston",
            state: "MA",
            zipCode: "02108",
        },
        {
            firstname: "Sophia",
            lastname: "Martinez",
            dateofbirth: "1990-06-20",
            startdate: "2017-11-09",
            department: "Customer Service",
            street: "910 Aspen Way",
            city: "Miami",
            state: "FL",
            zipCode: "33101",
        },
        {
            firstname: "James",
            lastname: "Garcia",
            dateofbirth: "1986-08-14",
            startdate: "2022-01-05",
            department: "Research",
            street: "234 Poplar Street",
            city: "Houston",
            state: "TX",
            zipCode: "77002",
        },
        {
            firstname: "Olivia",
            lastname: "Martinez",
            dateofbirth: "1993-04-09",
            startdate: "2021-12-01",
            department: "Engineering",
            street: "567 Cedar Avenue",
            city: "Phoenix",
            state: "AZ",
            zipCode: "85001",
        },
        {
            firstname: "Matthew",
            lastname: "Hernandez",
            dateofbirth: "1979-09-29",
            startdate: "2020-06-15",
            department: "Human Resources",
            street: "789 Chestnut Drive",
            city: "Philadelphia",
            state: "PA",
            zipCode: "19101",
        },
        {
            firstname: "Emma",
            lastname: "Lopez",
            dateofbirth: "1987-01-19",
            startdate: "2018-02-28",
            department: "Marketing",
            street: "321 Spruce Lane",
            city: "San Diego",
            state: "CA",
            zipCode: "92101",
        },
        {
            firstname: "Anthony",
            lastname: "White",
            dateofbirth: "1984-10-10",
            startdate: "2021-05-11",
            department: "Finance",
            street: "987 Pine Court",
            city: "Denver",
            state: "CO",
            zipCode: "80202",
        },
        {
            firstname: "Isabella",
            lastname: "Clark",
            dateofbirth: "1991-07-07",
            startdate: "2019-09-23",
            department: "IT",
            street: "654 Elm Drive",
            city: "Las Vegas",
            state: "NV",
            zipCode: "89101",
        }
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
