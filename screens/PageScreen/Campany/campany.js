import React, { Component }              from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button, Icon }                  from 'react-native-elements';
import settings from '../../../services/settings';

export default class Companies extends Component {
    constructor(props) {
        super(props);
        this.state = {
			loading: false,
			campany: {},
			gallery: [],
			label: "",
			content: "",
			date: "",
			img: "",
			interVal: "",
			timers: ""
        };
	}
	
	componentDidMount() {
		fetch(`${settings.uri}/${this.props.val.slug}.html`)
			.then((res) => res.json())
			.then((res) => {
				this.setState({
				campany: res, 
				gallery: res.content.galerisi,
				img: res.content.galerisi[0].img,
				date: res.date, 
				content: res.content.icerigi.icerik, 
				label: res.content.icerigi.label, 
				loading: true,
				});
				console.log(this.state.date)
				this.setState({interVal: setInterval(this.myTimer, 1000)});
			});
	}

	myTimer = () => {
		var countDownDate = new Date(this.state.date).getTime();

		// Get today's date and time
		var now = new Date().getTime();

		// Find the distance between now and the count down date
		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Display the result in the element with id="demo"
		const timers = days + " Gün " + hours + " Saat "
		+ minutes + " Dakika " + seconds + " Saniye";

        return this.setState({timers});
	}

    render() {
		const {val, key} = this.props;
		const timers = this.state.timers;
        if ( this.state.loading ) {
			return (
				<View style={styles.el}>
					<Image source={{ uri: `${settings.imgUri}/${this.state.img}` }} style={styles.img} />
					<View style={styles.text}>
						<Text style={styles.title}>{this.state.campany.title}</Text>
						<Text style={styles.cont}>{this.state.label}</Text>
						<View style={styles.buttonEl}>
							<Button buttonStyle={styles.button} title="Detaylar.." onPress={() => this.props.toggleModal({...this.state.campany, timers}, true)}/>
							<View style={styles.iconType}>
								<Text style={{fontSize: 10, padding: 10, color: 'red', fontWeight: 'bold'}}>{this.state.timers}</Text>
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
		backgroundColor: '#43ae55',
		color: 'white',
		fontSize: 12,
		borderRadius: 35
	}
});
