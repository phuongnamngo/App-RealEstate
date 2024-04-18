import React from "react";
import imgBanner1 from '../../../assets/images/image-banner1.jpg';
import imgBanner2 from '../../../assets/images/image-banner2.jpg';
import imgBanner3 from '../../../assets/images/image-banner3.jpg';
import { useNavigation } from "@react-navigation/native";
const useHome = () => {
    const navigation = useNavigation();
    const dataBanner = [
        {
            id: 1,
            image: imgBanner1
        },
        {
            id: 2,
            image: imgBanner2
        },
        {
            id: 3,
            image: imgBanner3
        },
    ]
    const dataNews = [
        {
            id: 1,
            title: "Bất động sản 1",
            image: imgBanner1
        },
        {
            id: 2,
            title: "Bất động sản 2",
            image: imgBanner2
        },
        {
            id: 3,
            title: "Bất động sản 3",
            image: imgBanner3
        },
        {
            id: 4,
            title: "Bất động sản 3",
            image: imgBanner3
        },
        {
            id: 5,
            title: "Bất động sản 3",
            image: imgBanner3
        },
    ]
    const dataDiscount = [
        {
            id: 1,
            title: "Ưu đãi 1",
            image: imgBanner1
        },
        {
            id: 2,
            title: "Ưu đãi 2",
            image: imgBanner2
        },
        {
            id: 3,
            title: "Ưu đãi 3",
            image: imgBanner3
        },
        {
            id: 4,
            title: "Bất động sản 3",
            image: imgBanner3
        },
        {
            id: 5,
            title: "Bất động sản 3",
            image: imgBanner3
        },
    ]
    const goPostDetail = (item) => {
        navigation.navigate("Root", { screen: "PostDetail", params: { item } })
    }
    return { dataBanner, dataDiscount, dataNews, goPostDetail, navigation };
}
export default useHome;