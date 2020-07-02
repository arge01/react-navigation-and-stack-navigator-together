import React, { Component }                                           from 'react';
import { ImageBackground, Text, StyleSheet, View, ScrollView, Image } from 'react-native';
import Header                                                         from '../../../components/Header';
import { Button }                                                     from 'react-native-elements';
import Companies                                  from './campany';

export default class Campany extends Component {
	static navigationOptions = {
		header: null
	}

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		const background = require('../../../assets/background.png');
		return (
			<>
				<Header navigate={this.props.navigation} goBackButton={this.props.navigation.goBack} />
				<ImageBackground
					source={background}
					resizeMode={"repeat"}
					style={styles.content}
				>
					<ScrollView style={styles.elem}>
						<Companies /*nav={<AppDrawerNavigator def={this.props}/>} pr={0}*//>
						<Companies />
						<Companies />
						<Companies />
						<Companies />
						<Companies />
						<Companies />
						<Companies />
						<Companies />
					</ScrollView>
				</ImageBackground>
			</>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: '#dedfe1'
	},
	elem: {
		flex: 1,
		padding: 10
	}
});
