import register from "@/store/reducers/api/Auth/register";
import { showAlert, showAlertError } from "@/services/utils/Alert";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
const useRegister = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        password: "",
        rePassword: ""
    });
    const validateEmail = text => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            return false;
        } else {
            return true;
        }
    };
    const onChange = (key, value) => {
        setInput(prev => ({ ...prev, [key]: value }))
    };
    const onRegister = async () => {
        if (!input.firstName && !input.lastName) {
            showAlertError({ message: "Vui lòng tên khách hàng không để trống" });
            return;
        }
        if (!input.phoneNumber) {
            showAlertError({ message: 'Vui lòng nhập số điện thoại' });
            return;
        } else {
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(input.phoneNumber)) {
                showAlertError({ message: 'Vui lòng nhập kiểu số' });
                return;
            } else if (input.phoneNumber.length != 10) {
                showAlertError({ message: 'Số điện thoại không quá 10 số ' });
                return;
            }
        }
        if (!input.password) {
            showAlertError({ message: 'Vui lòng nhập mật khẩu' });
            return;
        }
        if (!input.rePassword) {
            showAlertError({ message: 'Vui lòng nhập lại mật khẩu' });
            return;
        }
        if (input.password != input.rePassword) {
            showAlertError({ message: 'Mật khẩu và Nhập lại mật khẩu không giống trùng khớp' });
            return;
        }
        const payload = {
            firstname: input.firstName,
            lastname: input.lastName,
            phone: input.phoneNumber,
            password: input.password
        };
        const res = await dispatch(register.action(payload));
        if (res.status === "success") {
            showAlert({ title: "Thành công ", message: 'Bạn đã tạo khoản thành công' });
            navigation.navigate("Auth", { screen: "Login" });
        } else {
            showAlertError({ message: 'Tạo tài khoản không thành công' });
        }
    }
    const goLogin = () => {
        navigation.navigate("Auth", { screen: "Login" })
    }
    return { goLogin, onChange, onRegister };
}
export default useRegister;