import React , { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Detail extends Component {
    render() {
        console.log(this.props)
        return (
            <>
                <View>
                    <Text>Burası Detay Sayfası</Text>
                </View>
            </>
        );
    }
}

export default Detail;
