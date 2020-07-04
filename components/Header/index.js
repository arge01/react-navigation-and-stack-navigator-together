import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default class Header extends Component {
    navigateTitle = () => {
        let title = "";
        switch(this.props.navigate.state.routeName) {
            case "Home":
                title = "Çorum Kampanya";
                break;
            case "Campany":
                title = "Kampanyalar";
                break;
            case "Sweep":
                title = "Çekiliş Delisi";
                break;
            case "Travel":
                title = "Etkinlik ve Duyurular";
                break;
            case "Companies":
                title = "Firmalar";
                break;
            default:
                title = title
        }
        return <Text style={{color: '#fff'}}>{title}</Text>
    }
    render() {
        const nav = require('../../assets/nav.png');
        const back = require('../../assets/goBack.png');
        const natify = require('../../assets/natify.png');
        let goBackTema = () => {
            return (
                <TouchableOpacity style={[styles.items, {justifyContent: 'flex-start'}]} activeOpacity={0.5}>
                    <Image
                     source={natify}
                     style={styles.itemsImg}
                    />
                </TouchableOpacity>
            )
        };
        if ( this.props.goBackButton ) {
            goBackTema = () => {
                return (
                    <TouchableOpacity style={styles.items} activeOpacity={0.5}
                           onPress={ () => this.props.navigate.goBack() }
                    >
                        <Image
                        source={back}
                        style={styles.itemsImg}
                        />
                    </TouchableOpacity>
                )
            }
        }
        return (
            <View style={styles.header}>
                { goBackTema() }
                { this.navigateTitle() }
                <TouchableOpacity
                    style={styles.items}
                    activeOpacity={0.5}
                    onPress={() => this.props.navigate.openDrawer()}
                    >
                    <Image
                     source={nav}
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
