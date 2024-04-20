import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/Auth/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from '@react-native-firebase/messaging';

const useLogin = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [tokenFirebase, setTokenFirebase] = useState('');
    const goPage = (text) => {
        navigation.navigate("Auth", { screen: text })
    }
    const onSubmit = (item) => {
        dispatch(login(item));
        navigation.navigate("Main", { screen: "Home" })
    }
    const GetFCMToken = async () => {
        const fcmToken = await AsyncStorage.getItem('fcmtoken');
        if (!fcmToken) {
            try {
                const fcmToken = await messaging().getToken();
                if (fcmToken) {
                    setTokenFirebase(fcmToken);
                    console.log('meo: ', fcmToken);
                    await AsyncStorage.setItem('fcmToken', fcmToken);
                }
            } catch (error) {
                console.log(error, 'error in fcmtoken');
            }
        }
    };
    console.log('meo: ', tokenFirebase);
    useEffect(() => {
        GetFCMToken();
    }, []);
    return { navigation, goPage, onSubmit };
}
export default useLogin;