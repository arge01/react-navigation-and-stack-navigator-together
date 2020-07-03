import React , { Component }              from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import Header                             from "../../../components/Header";

class NextCompanies extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <>
                <Button onPress={() => this.props.navigation.goBack()} title="Geri"/>
                <View><Text style={{fontSize: 35}}>{this.props.navigation.state.params.id}</Text></View>
                <View><Text style={{fontSize: 35}}>Kategorilere Ait Firma Listesi</Text></View>
                <Button onPress={() => this.props.navigation.navigate("CompanyDetail")} title="Firmanın Sayfasına Git"/>
            </>
        );
    }
}

export default NextCompanies;
