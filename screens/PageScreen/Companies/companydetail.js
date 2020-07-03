import React , { Component } from 'react';
import { Button , View, Text }     from "react-native";

class CompanyDetail extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <>
                <Button onPress={() => this.props.navigation.goBack()} title="Geri"/>
                <View>
                    <Text style={{fontSize: 35}}>Burası Firmanın Sayfası</Text>
                </View>
            </>
        );
    }
}

export default CompanyDetail;
