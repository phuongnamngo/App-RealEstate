import { formatDate } from "@/utils/DateUtils";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import icProfile from '../../../assets/icons/icon-profile.png';
import icAddress from '../../../assets/icons/ic-address.png';
import icBirthday from '../../../assets/icons/ic-birthday.png';
import icPhone from '../../../assets/icons/ic-phone.png';
import icMail from '../../../assets/icons/ic-mail.png';
import { addressInfoToString } from "@/utils/Zone";
const useProfile = () => {
    const dispatch = useDispatch();
    const { infoUser } = useSelector(state => state.main.auth);
    const navigation = useNavigation();
    const data = {
        name: infoUser.firstname ? infoUser.firstname + " " + infoUser.lastname : "",
        address: addressInfoToString({
            address: infoUser?.address,
            ward: infoUser.ward,
            district: infoUser.district,
            province: infoUser.province,
        }),
        birthday: infoUser.birthday ? formatDate(infoUser.birthday) : "",
        phone: infoUser.phone ? infoUser.phone : "",
        mail: infoUser.email ? infoUser.email : ""
    };
    const label = [{
        title: "Chủ tài khoản",
        image: icProfile,
        key: 'name',
    },
    {
        title: "Địa chỉ",
        image: icAddress,
        key: 'address',
    },
    {
        title: "Số điện thoại",
        image: icPhone,
        key: 'phone',
    },
    {
        title: "Ngày sinh",
        image: icBirthday,
        key: 'birthday',
    },
    {
        title: "Email",
        image: icMail,
        key: 'mail',
    },
    ]
    return { navigation, data, label, infoUser };
}
export default useProfile;