import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, ImageBackground, Text, TouchableOpacity } from 'react-native';
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
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Anasayfa</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Campany')}
                    >
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Kampanyalar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Sweep')}
                    >
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Çekiliş Delisi</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Travel')}
                    >
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Etkinlik ve Duyurular</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Companies')}
                    >
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Firmalar</Text>
                    </TouchableOpacity>
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
    },
    button: {
        width: '100%',
        height: 50,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#000'
    }
});
