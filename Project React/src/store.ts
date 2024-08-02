import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, Employee } from './interface';


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
