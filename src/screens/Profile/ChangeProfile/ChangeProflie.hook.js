import { showAlert, showAlertError } from "@/services/utils/Alert";
import updateProfile from "@/store/reducers/api/Auth/updateProfile";
import loadDistricts from "@/store/reducers/api/General/loadDistricts";
import loadProvinces from "@/store/reducers/api/General/loadProvinces";
import loadWards from "@/store/reducers/api/General/loadWards";
import { formatDate } from "@/utils/DateUtils";
import { getZoneById } from "@/utils/Zone";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";


const useChangeProfile = ({ data }) => {
    const dispatch = useDispatch();
    const navigate = useNavigation();
    const { provinces, districts, wards } = useSelector(
        state => ({
            provinces: state.api.General.item.loadProvinces,
            districts: state.api.General.item.loadDistricts,
            wards: state.api.General.item.loadWards,
        }),
        shallowEqual,
    );
    const [showBirthday, setShowBirthday] = useState(false);
    const changeShowBirthday = () => {
        setShowBirthday(prevState => !prevState);
    };
    const UpdateInfo = async () => {
        setShowBirthday(false);
    };
    const [profile, setProfile] = useState({
        name: data.firstname + " " + data.lastname,
        email: data.email,
        birthday: data.birthday,
        address: data.address,
        ward: data.ward,
        wards_id: "",
        district: data.district,
        district_id: "",
        province: data.province,
        provinces_id: "",
    });
    const onChange = (key, value) => {
        setProfile(prevState => {
            const update = { [key]: value };
            if (key === 'province_id' && value) {
                update.province = getZoneById(provinces, value)?.label || '';
                update.provinces_id = value;
                dispatch(loadDistricts.action({ code: value, resetState: true }));
                update.district_id = null;
                update.district = null;
                update.wards_id = null;
                update.ward = null;
            }
            if (key === 'district_id' && value) {
                update.district = getZoneById(districts, value)?.label || '';
                dispatch(loadWards.action({ code: value }));
                update.wards_id = null;
                update.ward = null;
            }
            if (key === 'wards_id' && value) {
                update.ward = getZoneById(wards, value)?.label || '';
            }
            if (key === 'birthday' && value) {
                update.birthday = moment(value).format('YYYY-MM-DD');
                setShowBirthday(false);
            }
            return { ...prevState, ...update };
        });
    };
    const nameParts = profile.name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');
    const actionConfirm = async () => {
        const payload = {
            firstname: firstName,
            lastname: lastName,
            birthday: profile.birthday,
            email: profile.email,
            address: profile.address,
            province: profile.province,
            district: profile.district,
            ward: profile.ward
        };
        const rs = await dispatch(updateProfile.action(payload));
        if (rs?.payload?.statuscode === 200) {
            showAlert({ title: "Thành công", message: "Cập nhật khách hàng thành công." })
            navigate.goBack();
        } else {
            showAlertError({ message: Object.values(rs?.payload?.data?.errors ?? {}).flat()[0] ?? "Lỗi không xác định" });
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            const promises = [dispatch(loadProvinces.action())];
            await Promise.all(promises);
            if (profile.provinces_id && profile.provinces_id !== '0') {
                dispatch(loadDistricts.action(profile.provinces_id));
            }
            if (profile.district_id && profile.district_id !== '0') {
                dispatch(loadWards.action(profile.district_id));
            }
        }
        fetchData();
    }, []);
    return {
        onChange,
        profile,
        showBirthday,
        changeShowBirthday,
        UpdateInfo,
        actionConfirm,
        provinces,
        districts,
        wards
    };
}
export default useChangeProfile;