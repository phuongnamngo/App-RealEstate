import {logout} from '@/actions/Auth/auth';
import {showAlert, showAlertError} from '@/services/utils/Alert';
import logoutApi from '@/store/reducers/api/Auth/logoutApi';
import updatePassword from '@/store/reducers/api/Auth/updatePassword';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
const useChangePassword = () => {
  const dispatch = useDispatch();
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const handleSubmit = async () => {
    if (!oldPass || !newPass || !confirmPass) {
      showAlertError({message: 'Vui lòng nhập mật khẩu'});
      return;
    }
    if (newPass != confirmPass) {
      showAlertError({
        message: 'Mật khẩu và Nhập lại mật khẩu không giống trùng khớp',
      });
      return;
    }
    const payload = {
      password: oldPass,
      new_password: newPass,
      new_password_confirmation: confirmPass,
    };
    const res = await dispatch(updatePassword.action(payload));
    if (res?.payload?.statuscode === 200) {
      showAlert({title: 'Thành công', message: 'Đổi mật khẩu thành công'});
      dispatch(logoutApi.action());
    } else {
      showAlertError({
        message:
          Object.values(res.payload.data.errors ?? {}).flat()[0] ??
          'Lỗi không xác định',
      });
    }
  };
  return {
    newPass,
    setNewPass,
    confirmPass,
    setConfirmPass,
    oldPass,
    setOldPass,
    handleSubmit,
  };
};
export default useChangePassword;
