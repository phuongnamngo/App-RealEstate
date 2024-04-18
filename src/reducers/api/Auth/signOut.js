import { useDispatch } from "react-redux";
import { logout } from "../../../actions/Auth/auth";

export default function signOut() {
    const dispatch = useDispatch();
    dispatch(logout());
    return;
}