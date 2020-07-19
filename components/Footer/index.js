import React, { Component } from 'react'
import { Text, ImageBackground, StyleSheet, Linking , TouchableOpacity } from 'react-native'
import settings from '../../services/settings';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            settings: {}
        }
    }

    componentDidMount() {
        fetch(`${settings.uri}/${settings.defaultUri.settings}`)
            .then((res) => res.json())
            .then((res) => this.setState({settings: res}) );
    }
    
    render() {
        const background = require('../../assets/background.png');
        const settings = this.state.settings;
        return (
            <ImageBackground source={background} style={styles.footer}>
                <TouchableOpacity
                    onPress={() => Linking.openURL(`${settings.instagram}`)}
                    >
                    <Text style={{ fontSize: 10 }}> @{settings.description} </Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dedfe1'
    }
});


