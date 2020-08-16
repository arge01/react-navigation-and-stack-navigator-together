import React, { Component }                                                               from 'react';
import { ImageBackground, Text, StyleSheet, View, ScrollView, Image, TouchableHighlight } from 'react-native';
import Header                                                                             from '../../../components/Header';
import { Button }                                                                         from 'react-native-elements';
import Companies                                                                          from './campany';
import MyModal                                                                            from './modal'
import settings from '../../../services/settings';

export default class Campany extends Component {
	static navigationOptions = {
		header: null
	}

	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			modalVal: {
				title: "",
				content: {
					icerigi: {},
					tablari: [],
					galerisi: []
				}
			},
			loading: false,
			campanys: {},
			tabs: [],
			interVal: false
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.props.navigation.closeDrawer()
		}, 95);

		fetch(`${settings.uri}/${settings.defaultUri.campany}`)
			.then((res) => res.json())
			.then((res) => this.setState({campanys: res, tabs: res.tabs, loading: true}) )
	}

	toggleModal = (val, interVal) => {
		return this.setState({modal: !this.state.modal, modalVal: val, interVal});
	}

	render() {
		const background = require('../../../assets/background.png');
		if (this.state.loading) {
			return (
				<View style={{flex: 1, position: 'relative', width: '100%', height: '100%'}}>
					<Header navigate={this.props.navigation} goBackButton={this.props.navigation.goBack} />
					<MyModal key={0} toggleModal={this.toggleModal} modal={this.state.modal} val={this.state.modalVal} interVal={this.state.interVal}/>
					<ImageBackground
						source={background}
						resizeMode={"repeat"}
						style={styles.content}>
						<ScrollView style={styles.elem}>
							{
								this.state.tabs.map((val, key) => {
									return (
										<Companies key={key} val={val} toggleModal={this.toggleModal}/>
									)
								})
							}
						</ScrollView>
					</ImageBackground>
				</View>
			);
		} else {
			return (
				<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
					<Text>Kampanyalar Yükleniyor!</Text>
					<Text>Lütfen Bekleyiniz...</Text>
				</View>
			)
		}
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
