import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; //https://icons.expo.fyi/
import { LinearGradient } from 'expo-linear-gradient';

class NextCompanies extends Component {
    static navigationOptions = {
        header: null
    }

    deffCompanies = () => {
        const touchButton = [];
        for (let index = 0; index < 10; index++) {
            touchButton.push(
                <TouchableOpacity onPress={
                    () => this.props.navigation.navigate(
                        "CompanyDetail",
                        { id: index }
                    )
                } style={{ width: 90, justifyContent: 'center', alignItems: 'center', marginVertical: 15, marginHorizontal: 5 }}>
                    <View
                        colors={['#1F8B9E', '#DB7676']}
                        style={{ width: 90, height: 90, borderRadius: 90, alignItems: "center", justifyContent: 'center', backgroundColor: '#383f42' }}>
                        <MaterialCommunityIcons name="shield-car" size={60} color="white" />
                    </View>
                    <View>
                        <Text style={{ wdith: 90, justifyContent: 'center', alignItems: 'center', marginTop: 10, fontSize: 12, fontWeight: 'bold', color: '#383f42' }}>A Firması</Text>
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
                <View style={{justifyContent: 'space-between', alignItems: 'center', padding: 15, backgroundColor: '#383f42', flexDirection: 'row'}}>
                    <Button
                        icon={
                            <Icon
                            name="backspace"
                            size={25}
                            color="white"
                            />
                        }
                        title=""
                        buttonStyle={{backgroundColor: '#383f42'}}
                        onPress={() => this.props.navigation.goBack()}
                    />
                    <Text style={{fontSize: 14, fontWeight: 'bold', paddingVertical: 5, color: '#fff'}}>Kategorilere Ait Firma Listesi</Text>
                </View>
                <ScrollView>
                    <View style={{flex: 1, paddingHorizontal: 15, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {this.deffCompanies()}
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default NextCompanies;

