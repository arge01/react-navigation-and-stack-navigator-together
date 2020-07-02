import React, { Component } from 'react';
import { Text, ImageBackground, StyleSheet, View, TouchableOpacity, Image, Button } from 'react-native'

export default class Content extends Component {
    render() {
        const background = require('../../assets/background.png');
        return (
            <ImageBackground source={background} style={styles.content}>
                <View style={styles.btnGroup}>
                    <View style={[styles.btnItem, styles.btnItemTop]}>
                        <Image source={require('../../assets/fk.png')} style={styles.btnImgTop} />
                        <TouchableOpacity style={styles.btnView}>
                            <Text style={styles.btnTextTop}>Firma</Text>
                            <Text style={styles.btnTextTop}>Kayıt</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.btnItem, styles.btnItemTop]}>
                        <Image source={require('../../assets/e.png')} style={styles.btnImgTop} />
                        <TouchableOpacity style={styles.btnView}>
                            <Text style={styles.btnTextTop}>Nöbetci </Text>
                            <Text style={styles.btnTextTop}>Eczane </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.btnItem, styles.btnItemTop]}>
                        <Image source={require('../../assets/hv.png')} style={styles.btnImgTop} />
                        <TouchableOpacity style={styles.btnView}>
                            <Text style={styles.btnTextTop}>Hava </Text>
                            <Text style={styles.btnTextTop}>Durumu </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.btnGroup}>
                    <View style={[styles.btnItem, styles.btnItemBottom]}>
                        <Image source={require('../../assets/is.png')} style={styles.btnImgBottom} />
                        <TouchableOpacity style={styles.btnView}>
                            <Text style={styles.btnTextBottom}>İş </Text>
                            <Text style={styles.btnTextBottom}>İlanları </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.btnItem, styles.btnItemBottom]}>
                        <Image source={require('../../assets/gz.png')} style={styles.btnImgBottom} />
                        <TouchableOpacity style={styles.btnView}>
                            <Text style={styles.btnTextBottom}>Gazete </Text>
                            <Text style={styles.btnTextBottom}>Oku </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.btnItem, styles.btnItemBottom]}>
                        <Image source={require('../../assets/firma.png')} style={styles.btnImgBottom} />
                        <TouchableOpacity style={styles.btnView}>
                            <Text style={styles.btnTextBottom}> </Text>
                            <Text style={styles.btnTextBottom}>Firmalar </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#dedfe1',
        resizeMode: 'cover',
        marginBottom: -1,
        position: 'relative',
        zIndex: 1000
    },
    btnGroup: {
        flex: 1,
        position: 'relative',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    btnItem: {
        width: 85,
        height: '100%',
        paddingHorizontal: 10,
        position: 'relative',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 3,
        flexDirection: 'column'
    },
    btnView: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        textAlign: 'right',
        flex: 1,
        paddingVertical: 5
    },
    btnItemTop: { backgroundColor: '#363639', transform: [{ skewX: '-20deg' }], top: -16 },
    btnItemBottom: { backgroundColor: '#d5b378', transform: [{ skewX: '20deg' }], top: -10 },
    btnImgTop: {
        width: 30,
        height: 30,
        marginVertical: 5,
        transform: [{ skewX: '20deg' }]
    },
    btnTextTop: {
        color: 'transparent',
        width: 100,
        paddingHorizontal: 20,
        textAlign: 'left',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
        transform: [{ skewX: '20deg' }]
    },
    btnImgBottom: {
        width: 30,
        height: 30,
        marginVertical: 5,
        transform: [{ skewX: '-20deg' }]
    },
    btnTextBottom: {
        width: 100,
        paddingHorizontal: 20,
        textAlign: 'left',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
        transform: [{ skewX: '-20deg' }]
    }
});