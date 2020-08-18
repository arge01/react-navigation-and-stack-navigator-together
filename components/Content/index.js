import React, { Component } from 'react';
import { Text, ImageBackground, StyleSheet, View, TouchableOpacity, Image, Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null
        }
    }
    _havaDurumu = () => {
        const result = WebBrowser.openBrowserAsync('https://www.mgm.gov.tr/tahmin/il-ve-ilceler.aspx?il=CORUM');
        this.setState({ result });
    };
    _nobetciEczaneler = () => {
        const result = WebBrowser.openBrowserAsync('http://www.corumeo.org/nobetci_eczane.asp');
        this.setState({ result });
    }
    _gazeteOku = () => {
        const result = WebBrowser.openBrowserAsync('http://www.corumhakimiyet.net/');
        this.setState({ result });
    }
    _firmaKayit = () => {
        const result = WebBrowser.openBrowserAsync('https://arifgevenci.com/corumkampanya/public_html/firmakayit.html');
        this.setState({ result });
    }
    _isIlani = () => {
        const result = WebBrowser.openBrowserAsync('https://arifgevenci.com/corumkampanya/public_html/isilanlari.html');
        this.setState({ result });
    }
    render() {
        const background = require('../../assets/background.png');
        const { navigate } = this.props;
        return (
            <ImageBackground source={background} resizeMode={'repeat'} style={styles.content}>
                <View style={styles.btnGroup}>
                    <View style={[styles.btnItem, styles.btnItemTop]}>
                        <Image source={require('../../assets/fk.png')} style={styles.btnImgTop} />
                        <TouchableOpacity onPress={ () => this._firmaKayit() } style={styles.btnView}>
                            <Text style={styles.btnTextTop}>Firma</Text>
                            <Text style={styles.btnTextTop}>Kayıt</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.btnItem, styles.btnItemTop]}>
                        <Image source={require('../../assets/e.png')} style={styles.btnImgTop} />
                        <TouchableOpacity onPress={ () => this._nobetciEczaneler() } style={styles.btnView}>
                            <Text style={styles.btnTextTop}>Nöbetci </Text>
                            <Text style={styles.btnTextTop}>Eczane </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.btnItem, styles.btnItemTop]}>
                        <Image source={require('../../assets/hv.png')} style={styles.btnImgTop} />
                        <TouchableOpacity onPress={ () => this._havaDurumu() } style={styles.btnView}>
                            <Text style={styles.btnTextTop}>Hava </Text>
                            <Text style={styles.btnTextTop}>Durumu </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.btnGroup}>
                    <View style={[styles.btnItem, styles.btnItemBottom]}>
                        <Image source={require('../../assets/is.png')} style={styles.btnImgBottom} />
                        <TouchableOpacity onPress={ () => this._isIlani() } style={styles.btnView}>
                            <Text style={styles.btnTextBottom}>İş </Text>
                            <Text style={styles.btnTextBottom}>İlanları </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.btnItem, styles.btnItemBottom]}>
                        <Image source={require('../../assets/gz.png')} style={styles.btnImgBottom} />
                        <TouchableOpacity onPress={ () => this._gazeteOku() } style={styles.btnView}>
                            <Text style={styles.btnTextBottom}>Gazete </Text>
                            <Text style={styles.btnTextBottom}>Oku </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.btnItem, styles.btnItemBottom]}>
                        <Image source={require('../../assets/firma.png')} style={styles.btnImgBottom} />
                        <TouchableOpacity onPress={ () => navigate.navigate('Companies') } style={styles.btnView}>
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
