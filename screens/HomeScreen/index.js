import React, { Component }            from 'react';
import Slider                          from '../../components/Slider';
import Content                         from '../../components/Content';
import Header                          from '../../components/Header';
import { ImageBackground, StyleSheet } from 'react-native';

class HomeScreen extends Component {
	static navigationOptions = {
        header: null
	}

	constructor(props) {
		super(props);
	}

	render() {
		const background = require('../../assets/background.png');
		return (
			<>
				<Header navigate={this.props.navigation} goBackButton={false} />
				<ImageBackground source={background} resizeMode={"repeat"} style={styles.content}>
					<Slider navigate={this.props.navigation} />
					<Content navigate={this.props.navigation} />
				</ImageBackground>
			</>
		);
	}
}

const styles = StyleSheet.create({
    content: {
		flex: 1,
        backgroundColor: '#dedfe1',
        resizeMode: 'repeat',
        position: 'relative'
    }
});

export default HomeScreen;
