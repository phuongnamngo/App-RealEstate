import { useNavigation } from "@react-navigation/native";
import React from "react";
const useForgotPassword = () => {
    const navigation = useNavigation();
    return { navigation };
}
export default useForgotPassword;