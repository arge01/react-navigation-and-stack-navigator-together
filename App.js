import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import Content from './components//Content/';
import Footer from './components/Footer';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';

export default function Index() {
	return (
        <SafeAreaView style={[styles.page, styles.droidSafeArea]}>
            <Header/>
            <Slider/>
            <Content/>
            <Footer/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor: Platform.OS === 'android' ? '#fff' : '#383f42'
    },
    page: {
        flex: 1,
        backgroundColor: '#dedfe1',
        justifyContent: 'flex-start',
        position: 'relative',
        flexDirection: 'column'
    },
    nav: {
        height: 20,
        backgroundColor: '#383f42',
        opacity: 1
    }
});