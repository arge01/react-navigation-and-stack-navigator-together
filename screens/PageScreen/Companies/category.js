import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; //https://icons.expo.fyi/
import { LinearGradient } from 'expo-linear-gradient';
import settings from '../../../services/settings';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }
    
    static navigationOptions = {
        header: null,
    }

    componentDidMount() {
        fetch(`${settings.uri}/${settings.defaultUri.companies}`)
			.then((res) => res.json())
			.then((res) => this.setState({categories: res.categories}) )
    }
    
    render() {
        const background = require('../../../assets/background.png');
        return (
            <ImageBackground style={{flex: 1, backgroundColor: '#dedfe1'}} source={background} resizeMode={'repeat'}>
                <ScrollView>
                    <View style={{flex: 1, padding: 15, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        
                        {
                            this.state.categories.map((val, key) => {
                                return (
                                    <TouchableOpacity key={key} onPress={
                                        () => this.props.navigation.navigate(
                                            "NextCompanies",
                                            { id: val.id, name: val.name }
                                        )
                                    } style={{ width: 90, justifyContent: 'center', alignItems: 'center', marginVertical: 15, marginHorizontal: 5 }}>
                                        <View
                                            colors={['#1F8B9E', '#DB7676']}
                                            style={{ width: 90, height: 90, borderRadius: 90, alignItems: "center", justifyContent: 'center', backgroundColor: '#383f42' }}>
                                            <Image
                                                    key={key}
                                                    source={{ 
                                                    uri: `${settings.imgUri}/thump-${val.img}`}} 
                                                    resizeMode='cover'
                                                    style={{width: 90, height: 90, borderRadius: 90}} />
                                        </View>
                                        <View style={{width: 90, justifyContent: 'center', alignItems: 'center'}}>
                                            <Text style={{ textAlign: 'center', wdith: 90, height: 75, justifyContent: 'center', alignItems: 'center', marginTop: 5, fontSize: 14, fontWeight: 'bold', color: '#383f42' }}>{val.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }
                        
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default Category;
