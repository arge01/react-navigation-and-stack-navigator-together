import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; //https://icons.expo.fyi/
import { LinearGradient } from 'expo-linear-gradient';
import settings from '../../../services/settings';

class NextCompanies extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
            CategoryName: ""
        }
    }
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        fetch(`${settings.uri}/${settings.defaultUri.nextcomp}/${this.props.navigation.state.params.id}`)
			.then((res) => res.json())
            .then((res) => this.setState({list: res.categories}) )
            
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
                    <Text style={{fontSize: 14, fontWeight: 'bold', paddingVertical: 5, color: '#fff'}}>{this.props.navigation.state.params.name} / Listesi</Text>
                </View>
                <ScrollView>
                    <View style={{flex: 1, paddingHorizontal: 15, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {
                            this.state.list.map((val, key) => {
                                return (
                                    <TouchableOpacity key={key} onPress={
                                        () => this.props.navigation.navigate(
                                            "CompanyDetail",
                                            { id: val.id, val: val }
                                        )
                                    } style={{ width: 90, justifyContent: 'center', alignItems: 'center', marginVertical: 15, marginHorizontal: 5 }}>
                                        <View
                                            colors={['#1F8B9E', '#DB7676']}
                                            style={{ width: 90, height: 90, borderRadius: 90, alignItems: "center", justifyContent: 'center', backgroundColor: '#383f42' }}>
                                            <Image
                                                    key={key}
                                                    source={{ 
                                                    uri: `${settings.imgUri}/thump/thump-${val.img}`}} 
                                                    resizeMode='cover'
                                                    style={{width: 90, height: 90, borderRadius: 90}} />
                                        </View>
                                        <View>
                                            <Text style={{ wdith: 90, justifyContent: 'center', alignItems: 'center', marginTop: 10, fontSize: 12, fontWeight: 'bold', color: '#383f42', textAlign: 'center' }}>{val.name}</Text>
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

export default NextCompanies;

