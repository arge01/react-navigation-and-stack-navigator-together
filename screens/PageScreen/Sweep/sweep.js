import React, { Component }              from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button, Icon }                  from 'react-native-elements';
import settings from '../../../services/settings';

export default class Sweeps extends Component {
    constructor(props) {
        super(props);
        this.state = {
			loading: false,
			campany: {},
			gallery: [],
			label: "",
			content: "",
			date: "",
			img: ""
        };
	}
	
	componentDidMount() {
		fetch(`${settings.uri}/${this.props.val.slug}.html`)
			.then((res) => res.json())
			.then((res) => this.setState({
				campany: res, 
				gallery: res.content.galerisi,
				img: res.content.galerisi[0].img,
				date: res.date, 
				content: res.content.icerigi.icerik, 
				label: res.content.icerigi.label, 
				loading: true}))
	}
	
	render() {
		const {val, key} = this.props;
        if ( this.state.loading ) {
			return (
				<View style={styles.el}>
					<Image source={{ uri: `${settings.imgUri}/${this.state.img}` }} style={styles.img} />
					<View style={styles.text}>
						<Text style={styles.title}>{this.state.campany.title}</Text>
						<Text style={styles.cont}>{this.state.label}</Text>
						<View style={styles.buttonEl}>
							<Button buttonStyle={styles.button} title="Detaylar.." onPress={() => this.props.toggleModal(this.state.campany)}/>
							<View style={styles.iconType}>
								<Text style={{fontSize: 12, padding: 10, color: '#484848', fontWeight: 'bold'}}>{this.state.date}</Text>
							</View>
						</View>
					</View>
				</View>
			);
		} else {
			return (
				<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
					<Text>Ayrıntılar Yükleniyor!</Text>
					<Text>Lütfen Bekleyiniz...</Text>
				</View>
			)
		}
    }
}

const styles = StyleSheet.create({
	el: {
		width: '100%',
		height: 180,
		backgroundColor: '#fff',
		marginBottom: 5,
		flexDirection: 'row',
		alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
	},
	img: {
		width: 140,
		height: 140
	},
	text: {
		flex: 1,
		height: 140,
		flexDirection: 'column',
		marginLeft: 15,
		flexWrap: 'nowrap'
	},
	title: {
		flex: 1,
		fontSize: 18,
        fontWeight: 'bold',
        color: '#343434'
	},
	cont: {
		fontSize: 12,
        marginBottom: 3,
        color: '#464646'
	},
	buttonEl: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	iconType: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	button: {
		backgroundColor: '#fe5656',
		color: 'white',
		fontSize: 12,
		borderRadius: 35
	}
});
