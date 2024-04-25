import { logout } from "@/actions/Auth/auth";
import { showAlert, showAlertError } from "@/services/utils/Alert";
import updatePassword from "@/store/reducers/api/Auth/updatePassword";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
const useChangePassword = () => {
    const dispatch = useDispatch();
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const handleSubmit = async () => {
        if (!oldPass || !newPass || !confirmPass) {
            showAlertError({ message: 'Vui lòng nhập mật khẩu' });
            return;
        }
        if (newPass != confirmPass) {
            showAlertError({ message: 'Mật khẩu và Nhập lại mật khẩu không giống trùng khớp' });
            return;
        }
        const payload = { password: oldPass, new_password: newPass, new_password_confirmation: confirmPass };
        const res = await dispatch(updatePassword.action(payload));
        if (res?.payload?.code === 200) {
            showAlert({ title: "Thành công", message: "Đổi mật khẩu thành công" });
            dispatch(logout());
        } else {
            showAlertError({ message: res.payload.message });
        }
    }
    return { newPass, setNewPass, confirmPass, setConfirmPass, oldPass, setOldPass };
}
export default useChangePassword;