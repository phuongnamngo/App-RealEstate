import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";
const ProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    return (
        <View style={Styles.container}>
            <Text style={{ fontSize: 16 }}>Page Profile</Text>
        </View>
    );
};
export default ProfileScreen;
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});