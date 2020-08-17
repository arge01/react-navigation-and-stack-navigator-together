import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight, StyleSheet, ScrollView, Image, Linking } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import MapView from 'expo';
import settings from '../../../services/settings';
//import HTML from 'react-native-render-html'
import HTMLView from 'react-native-htmlview';

export default class MyModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interVal: "",
            timers: ""
        }
    }

    componentDidMount(){
        this.setState({interVal: setInterval(this.myTimer, 1000)});
    }

    myTimer = () => {
		var countDownDate = new Date(this.props.val.date);

		// Get today's date and time
		var now = new Date();

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

    toggleModals = (val) => {
        //clearInterval(this.state.interVal);
        return this.props.toggleModal(val, false);
    }

    render() {
        const {...val} = this.props.val;
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.modal}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={[styles.headerItem, styles.headerText, {fontSize: 13, fontWeight: "bold"}]}>{this.state.timers} /kaldı...</Text>
                            <TouchableHighlight
                                onPress={() => this.toggleModals(val)}
                            >
                                <Icon
                                    name='close'
                                    color='#000'
                                    style={styles.headerButton} />
                            </TouchableHighlight>
                        </View>
                        <View style={styles.modalContainer}>
                            <View style={styles.imgBack}>
                                <ScrollView style={{height: 200, width: '100%'}} vertical={true}>
                                    {
                                        val.content.galerisi.map((val, key) => {
                                            return (
                                                <Image
                                                    key={key}
                                                    source={{ 
                                                    uri: `${settings.imgUri}/thump-${val.img}` }} 
                                                    resizeMode='cover'
                                                    style={styles.img} />
                                            )
                                        })
                                    }
                                </ScrollView>
                            </View>
                            <View style={{ justifyContent: 'center', width: '100%', backgroundColor: '#fff', minHeight: 95, alignItems: 'center', padding: 15, marginVertical: 10 }}>
                            <Text style={styles.title}> {val.content.icerigi.name} </Text>
                            </View>
                            <ScrollView style={{flex: 1}}>
                            <View style={{ justifyContent: 'flex-start', width: '100%', backgroundColor: '#fff', minHeight: 95, alignItems: 'flex-start', padding: 30, borderBottomColor: '#9a9a9a', borderBottomWidth: 2 }}>
                                    <Text style={styles.titleText}>{val.content.icerigi.label}</Text>
                                    <HTMLView style={styles.titleContentText} value={val.content.icerigi.icerik} />
                                </View>
                            </ScrollView>
                            <Button buttonStyle={styles.button} title="Adrese Git.." onPress={() => Linking.openURL(`${val.map}`)}/>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalView: {
        position: 'absolute',
        marginTop: 40,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 0,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '100%',
        flex: 1,
        height: '100%',
        backgroundColor: '#f3f3f3',
        overflow: 'hidden'
    },
    modalContent: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 15

    },
    modalHeader: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between'
    },
    headerButton: {
        fontSize: 30
    },
    headerText: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    modalContainer: {
        flex: 1,
        width: '100%'
    },
    imgBack: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    img: {
        width: '100%',
        height: 327
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fe5656',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 15,
        lineHeight: 25,
        marginBottom: 15,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    titleContentText: {
        lineHeight: 23,
        color: '#9a9a9a'
    },
    button: {
        height: 50,
		backgroundColor: '#fe5656',
		color: 'white',
		fontSize: 12,
        borderRadius: 30,
        marginTop: 15,
        marginBottom: 55
	}
});
