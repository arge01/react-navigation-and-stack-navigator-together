import React, { Component } from 'react'
import { Text, ImageBackground, StyleSheet } from 'react-native'

export default class Footer extends Component {
    render() {
        const background = require('../../assets/background.png');
        return (
            <ImageBackground source={background} style={styles.footer}>
                <Text style={{fontSize: 10}}> @corumkampanya </Text>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dedfe1'
    }
});


