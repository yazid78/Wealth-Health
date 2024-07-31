import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Employee {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    startDate: string;
    department: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
}
interface AppState {
    show: boolean;
    employee: Employee[]
}

const initialState: AppState = {
    show: false,
    employee: [],
};

const authSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setShow: (state, action: PayloadAction<boolean>) => {
            state.show = action.payload;
        },
        setEmployee: (state, action: PayloadAction<Employee>) => {
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
