import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
const HistoryScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    return (
        <View style={Styles.container}>
            <Text>Page history</Text>
        </View>
    );
};
export default HistoryScreen;
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});