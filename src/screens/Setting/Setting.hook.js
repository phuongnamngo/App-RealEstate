import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/Auth/auth";

const useSetting = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const Logout = () => {
        navigation.navigate("Main", { screen: 'Home' })
        dispatch(logout());
    }
    return { Logout };
}
export default useSetting;