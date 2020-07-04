import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; //https://icons.expo.fyi/
import { LinearGradient } from 'expo-linear-gradient';

class Category extends Component {
    static navigationOptions = {
        header: null
    }

    deffCategory = () => {
        const touchButton = [];
        for (let index = 0; index < 10; index++) {
            touchButton.push(
                <TouchableOpacity onPress={
                    () => this.props.navigation.navigate(
                        "NextCompanies",
                        { id: index }
                    )
                } style={{ width: 90, justifyContent: 'center', alignItems: 'center', marginVertical: 15, marginHorizontal: 5 }}>
                    <View
                        colors={['#1F8B9E', '#DB7676']}
                        style={{ width: 90, height: 90, borderRadius: 90, alignItems: "center", justifyContent: 'center', backgroundColor: '#383f42' }}>
                        <MaterialCommunityIcons name="shield-car" size={60} color="white" />
                    </View>
                    <View>
                        <Text style={{ wdith: 90, justifyContent: 'center', alignItems: 'center', marginTop: 10, fontSize: 12, fontWeight: 'bold', color: '#383f42' }}>Araba Kategorisi</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return touchButton;
    }
    render() {
        const background = require('../../../assets/background.png');
        return (
            <ImageBackground style={{flex: 1, backgroundColor: '#dedfe1'}} source={background} resizeMode={'repeat'}>
                <ScrollView>
                    <View style={{flex: 1, padding: 15, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {this.deffCategory()}
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default Category;
