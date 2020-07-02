import React, { Component } from 'react';
import { ImageBackground, Text, StyleSheet, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import Header from '../../../components/Header';
import { Button } from 'react-native-elements';
import Companies from './campany';
import MyModal from './modal'

export default class Campany extends Component {
	static navigationOptions = {
		header: null
	}

	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
	}

	toggleModal = () => {
		return this.setState({modal: !this.state.modal})
	}

	render() {
		const background = require('../../../assets/background.png');
		return (
			<View style={{flex: 1, position: 'relative', width: '100%', height: '100%'}}>
				<MyModal toggleModal={this.toggleModal} modal={this.state.modal}/>
				<Header navigate={this.props.navigation} goBackButton={this.props.navigation.goBack} />
				<ImageBackground
					source={background}
					resizeMode={"repeat"}
					style={styles.content}
				>
					<ScrollView style={styles.elem}>
						<Companies toggleModal={this.toggleModal}/>
						<Companies toggleModal={this.toggleModal}/>
						<Companies toggleModal={this.toggleModal}/>
						<Companies toggleModal={this.toggleModal}/>
						<Companies toggleModal={this.toggleModal}/>
						<Companies toggleModal={this.toggleModal}/>
						<Companies toggleModal={this.toggleModal}/>
						<Companies toggleModal={this.toggleModal}/>
						<Companies toggleModal={this.toggleModal}/>
						<Companies toggleModal={this.toggleModal}/>
						<Companies toggleModal={this.toggleModal}/>
						<Companies toggleModal={this.toggleModal}/>
						<Companies toggleModal={this.toggleModal}/>
						<Companies toggleModal={this.toggleModal}/>
					</ScrollView>
				</ImageBackground>
			</View>
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
	},
});
