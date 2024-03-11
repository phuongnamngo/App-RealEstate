import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
const PostScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    return (
        <View style={Styles.container}>
            <Text>Page Post</Text>
        </View>
    );
};
export default PostScreen;
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});