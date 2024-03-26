import React, { useState } from "react";
const useChangePassword = () => {
    const [newPass, setNewPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    return { newPass, setNewPass, confirmPass, setConfirmPass };
}
export default useChangePassword;