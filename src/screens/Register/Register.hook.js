import { useNavigation } from "@react-navigation/native";
import React from "react";
const useRegister = () => {
    const navigation = useNavigation();
    const goLogin = () => {
        navigation.navigate("Auth", { screen: "Login" })
    }
    return {goLogin};
}
export default useRegister;