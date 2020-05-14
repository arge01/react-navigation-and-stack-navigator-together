import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default class Header extends Component {
    render() {
        const nav = require('../../assets/nav.png');
        const natify = require('../../assets/natify.png');
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.items} activeOpacity={0.5}>
                    <Image
                     source={nav}
                     style={styles.itemsImg}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.items, {justifyContent: 'flex-end'}]} activeOpacity={0.5}>
                    <Image
                     source={natify}
                     style={styles.itemsImg}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#383f42',
        opacity: 1,
        flexDirection: 'row'
    },
    items: {
        width: 50,
        height: 50,
        color: '#fff',
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    itemsImg: {
        height: 15,
        resizeMode: 'contain'
    }
});
