import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { colors, fonts, fontsizes } from '../styled';

// No active
const iconHome = require('../../assets/tabs/tab-home.png');
const iconHistory = require('../../assets/tabs/tab-history.png');
const iconPost = require('../../assets/tabs/tab-post.png');
const iconAccount = require('../../assets/tabs/tab-account.png');

// Active
const iconHomeActive = require('../../assets/tabs/tab-home-active.png');
const iconHistoryActive = require('../../assets/tabs/tab-history-active.png');
const iconPostActive = require('../../assets/tabs/tab-post-active.png');
const iconAccountActive = require('../../assets/tabs/tab-account-active.png');
const icons = {
    focus: {
        Home: iconHomeActive,
        History: iconHistoryActive,
        Post: iconPostActive,
        Account: iconAccountActive
    },
    nonfocus: {
        Home: iconHome,
        History: iconHistory,
        Post: iconPost,
        Account: iconAccount
    }
};

export default function MyTabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
    const { isLoggedIn } = useSelector(state => state.main.auth);
    if (focusedOptions.tabBarVisible === false) {
        return null;
    }
    const tabLabel = (type) => {
        switch (type) {
            case 'Home':
                return 'Trang chủ';
            case 'Post':
                return 'Bài viết';
            case 'History':
                return 'Lịch sử';
            case 'Account':
                return 'Tài khoản';
        }
    };

    const renderTab = (route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || options.title || route.name;

        const icon = () => {
            let iconName = icons[isFocused ? 'focus' : 'nonfocus'][route.name];
            return iconName;
        }

        const isFocused = state.index === index;
        const onPress = () => {
            const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
            });
            if (!isFocused && !event.defaultPrevented) {
                if (route.name === 'Account' && !isLoggedIn) {
                    navigation.navigate('Auth', { screen: 'Login' });
                } else {
                    navigation.jumpTo(route.name);
                }
            }
        };

        const onLongPress = () => {
            navigation.emit({
                type: 'tabLongPress',
                target: route.key,
            });
        };
        return (
            <View key={index} style={{ flex: 1, alignItems: 'center' }}>
                <Pressable
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={{ padding: 5 }}
                >
                    <View style={[styles.tabBarItemContainer, { paddingVertical: 5 }]}>
                        <Image
                            resizeMode="cover"
                            source={icon()}
                            style={styles.tabBarIcon}
                        />
                    </View>
                    <Text style={[{ color: isFocused ? colors.primary : colors.gray }, styles.textLabel]}>
                        {tabLabel(label)}
                    </Text>
                </Pressable>
            </View>
        );
    };

    const bgColor = React.useMemo(() => descriptors[state.routes[state.index].key].options.bgColor, [state]);
    return (
        <View style={[{ flexDirection: 'row' }, { backgroundColor: bgColor }]}>
            <View style={styles.tabContainer}>
                {state.routes.map(renderTab)}
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    tabContainer: {
        height: 70,
        backgroundColor: colors.white,
        paddingBottom: 5,
        paddingHorizontal: 15,
        flexDirection: 'row',
        width: '100%',
        borderTopWidth: 2,
        borderColor: colors.gray1
    },
    tabBarItemContainer: {
        flex: 1,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingBottom: 0,
    },
    tabBarIcon: {
        width: 20,
        height: 20,
    },
    textLabel: {
        fontSize: fontsizes.biggernormal,
        fontFamily: fonts.primaryMedium,
        paddingTop: 5
    }
});