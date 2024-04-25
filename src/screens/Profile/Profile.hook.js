import getProfile from "@/store/reducers/api/Auth/getProfile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useProfile = () => {
    const dispatch = useDispatch();
    const { infoUser } = useSelector(state => state.main.auth);
    const getClient = async () => {
        const res = dispatch(getProfile.action());
    }
    useEffect(() => { getClient(); }, []);
    return { infoUser };
}
export default useProfile;