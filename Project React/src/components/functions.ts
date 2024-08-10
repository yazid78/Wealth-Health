import { useDispatch } from "react-redux";
import { setShow } from "../store";

export const useOpenModal = () => {
    const dispatch = useDispatch();
    const openModal = () => {
        dispatch(setShow(true));
        /*  console.log("ca marche"); */
    }
    return openModal
};

