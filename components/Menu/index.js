import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, ImageBackground, Text } from 'react-native';
import { DrawerItems } from "react-navigation";

export default class CustomDrawerContentComponent extends Component {
    render() {
        const logo = require('../../assets/logo.png');
        return (
            <View style={styles.content}>
                <View style={styles.border}>
                    <ImageBackground style={styles.logo} source={logo}/>
                </View>
                <ScrollView>
                    <DrawerItems {...this.props} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#fff',
        resizeMode: 'repeat',
        position: 'relative',
        padding: 30,
        borderColor: '#000',
        borderWidth: 2,
        borderLeftWidth: 0
    },
    logo: {
        position: 'relative',
        top: 0,
        width: '100%',
        height: 130,
        resizeMode: 'cover',
        justifyContent: "center",
        zIndex: 1000,
        padding: 0
    },
    border: {
        paddingBottom: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 2,
    }
});
