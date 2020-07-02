import React, { Component }              from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button, Icon }                  from 'react-native-elements';

export default class Companies extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.el}>
                <Image source={{ uri: 'https://www.opet.com.tr/Files/Images/Campaign/637008747137704850_OPET_ISBANKASI_MAXIMUMKAMPANYA_thumb.png' }} style={styles.img} />
                <View style={styles.text}>
                    <Text style={styles.title}>İş Bankası Maximum Kampanyası...</Text>
                    <Text style={styles.cont}>125 TL ve Üzeri Yakıt Alışverişine MaxiPuan Hediye!</Text>
                    <View style={styles.buttonEl}>
						<Button buttonStyle={styles.button} title="Detaylar.." onPress={() => this.props.toggleModal()}/>
						<View style={styles.iconType}>
							<Text style={{fontSize: 12, padding: 10, color: '#484848', fontWeight: 'bold'}}>12 Gün 14 Saat Kaldı..</Text>
						</View>
					</View>
                </View>
            </View>
        );
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
		justifyContent: 'space-between',
		borderBottomWidth: 2,
		borderBottomColor: '#ddd'
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
