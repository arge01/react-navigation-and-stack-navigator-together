import React, { Component }                                                 from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { AppStackNavigator }                                                from "../../App";

export default class Slider extends Component {
    render() {
        const logo = require('../../assets/logo.png');
        const background = require('../../assets/background_opacty.png');
        const travel = require('../../assets/travel.png');
        const campany = require('../../assets/campany.png');
        const sweep = require('../../assets/sweep.png');
        const { navigate } = this.props;
        return (
            <View style={styles.slider}>
                <ImageBackground style={styles.logo} source={logo}/>
                <ImageBackground style={styles.sliderBack} source={background}/>

                <View style={styles.slides}>
                    <Image style={styles.slideItem} source={require('../../assets/corumHD.jpg')}/>
                    <View style={{position: 'absolute', width: '100%', height: '100%'}}>
                        <View style={{position: 'relative', flex: 1, width: '100%', height: '100%'}}></View>
                    </View>
                </View>

                <TouchableOpacity onPress={ () => navigate.navigate('Travel') } style={[styles.btnItem, styles.travel]}activeOpacity={0.5}>
                    <Image
                     source={travel}
                     style={styles.btnImg}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigate.navigate('Campany') } style={[styles.btnItem, styles.campany]} activeOpacity={0.5}>
                    <Image
                     source={campany}
                     style={styles.btnImg}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigate.navigate('Sweep') } style={[styles.btnItem, styles.sweep]} activeOpacity={0.5}>
                    <Image
                     source={sweep}
                     style={styles.btnImg}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    slider: {
        flex: 2.3,
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'column'
    },
    logo: {
        position: 'absolute',
        top: 0,
        width: 135,
        height: 90,
        resizeMode: 'cover',
        justifyContent: "center",
        zIndex: 1000
    },
    sliderBack: {
        position: 'absolute',
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        zIndex: 10,
    },
    slides: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        zIndex: 1,
        flexDirection: 'column',
        paddingTop: 90
    },
    slideItem: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    btnGroup: {
        position: 'absolute',
        zIndex: 100,
        width: '100%',
        height: '100%'
    },
    btnItem: {
        width: 90,
        height: 90,
        position: 'absolute',
        zIndex: 100
    },
    btnImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    travel: {
        width: 70,
        height: 70,
        bottom: 20,
        left: 145
    },
    campany: {
        width: 140,
        height: 45,
        left: 220,
        bottom: 40
    },
    sweep: {
        width: 70,
        height: 70,
        bottom: 20,
        left: 70
    }
});
