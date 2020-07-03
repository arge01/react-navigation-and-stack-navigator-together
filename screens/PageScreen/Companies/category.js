import React , { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

class Category extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <>
                <View><Text style={{fontSize: 35}}>Burası Kategorilerin Listelendiği Yer</Text></View>
                <Button onPress={() => this.props.navigation.navigate("NextCompanies", { id: 0 })} title="id: 0"/>
                <Button onPress={() => this.props.navigation.navigate("NextCompanies", { id: 1 })} title="id: 1"/>
                <Button onPress={() => this.props.navigation.navigate("NextCompanies", { id: 2 })} title="id: 2"/>
                <Button onPress={() => this.props.navigation.navigate("NextCompanies", { id: 3 })} title="id: 3"/>
                <Button onPress={() => this.props.navigation.navigate("NextCompanies", { id: 4 })} title="id: 4"/>
                <Button onPress={() => this.props.navigation.navigate("NextCompanies", { id: 5 })} title="id: 5"/>
            </>
        );
    }
}

export default Category;
