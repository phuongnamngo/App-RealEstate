import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/Auth/auth";
import logoutApi from "@/store/reducers/api/Auth/logoutApi";

const useSetting = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const logoutSubmit = async () => {
        const res = await dispatch(logoutApi.action());
        navigation.navigate("Main", { screen: 'Home' })
        dispatch(logout());
    }
    return { logoutSubmit };
}
export default useSetting;