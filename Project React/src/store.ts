import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
    show: boolean;
}

const initialState: AppState = {
    show: false,
};

const authSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setShow: (state, action: PayloadAction<boolean>) => {
            state.show = action.payload;
        },
    },
});

export const { setShow } = authSlice.actions;
const appReducer = authSlice.reducer;

const store = configureStore({
    reducer: {
        app: appReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
