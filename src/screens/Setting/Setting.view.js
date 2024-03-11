import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";
const SettingScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    return (
        <View style={Styles.container}>
            <Text style={{ fontSize: 16 }}>Page Setting</Text>
        </View>
    );
};
export default SettingScreen;
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});