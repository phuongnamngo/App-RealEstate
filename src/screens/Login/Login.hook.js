import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/Auth/auth";
const useLogin = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const goPage = (text) => {
        navigation.navigate("Auth", { screen: text })
    }
    const onSubmit = (item) => {
        dispatch(login(item));
        navigation.navigate("Main", { screen: "Home" })
    }
    return { navigation, goPage, onSubmit };
}
export default useLogin;