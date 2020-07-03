import React, { Component }                                                               from 'react';
import { ImageBackground, Text, StyleSheet, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import Header                                                                             from '../../../components/Header';
import { Button }                                                                         from 'react-native-elements';
import Sweeps                                                                          from './sweep';
import MyModalSweep                                                                            from './modal'

export default class Sweep extends Component {
	static navigationOptions = {
		header: null
	}

	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.props.navigation.closeDrawer()
		}, 95)
	}

	toggleModal = () => {
		return this.setState({modal: !this.state.modal})
	}

	render() {
		const background = require('../../../assets/background.png');
		return (
			<View style={{flex: 1, position: 'relative', width: '100%', height: '100%'}}>
				<Header navigate={this.props.navigation} goBackButton={this.props.navigation.goBack} />
				<MyModalSweep toggleModal={this.toggleModal} modal={this.state.modal}/>
				<ImageBackground
					source={background}
					resizeMode={"repeat"}
					style={styles.content}
				>
					<ScrollView style={styles.elem}>
						<Sweeps toggleModal={this.toggleModal}/>
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
