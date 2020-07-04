import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight, StyleSheet, ScrollView, Image } from 'react-native';
import { Icon, Button } from 'react-native-elements';

export default class MyModalTravel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.modal}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={[styles.headerItem, styles.headerText]}>Bitiş Tarihi: 27.10.2020</Text>
                            <TouchableHighlight
                                onPress={() => this.props.toggleModal()}
                            >
                                <Icon
                                    name='close'
                                    color='#000'
                                    style={styles.headerButton} />
                            </TouchableHighlight>
                        </View>
                        <View style={styles.modalContainer}>
                            <View style={styles.imgBack}>
                                <Image source={{ uri: 'https://www.opet.com.tr/Files/Images/Campaign/637293886292328425_yakit_puan_header.png' }} style={styles.img} />
                            </View>
                            <View style={{ justifyContent: 'center', width: '100%', backgroundColor: '#fff', minHeight: 95, alignItems: 'center', padding: 15, marginVertical: 10 }}>
                                <Text style={styles.title}>İş Bankası Maximum Kampanyası...</Text>
                            </View>
                            <ScrollView style={{flex: 1}}>
                                <View style={{ justifyContent: 'flex-start', width: '100%', backgroundColor: '#fff', minHeight: 95, alignItems: 'flex-start', padding: 30, borderBottomColor: '#9a9a9a', borderBottomWidth: 2 }}>
                                    <Text style={styles.titleText}>125 TL ve Üzeri Yakıt Alışverişine MaxiPuan Hediye!</Text>
                                    <Text style={styles.titleContentText}>
                                        Lorem ipsum dolor sit amet,
                                    </Text>
                                </View>
                            </ScrollView>
                            <Button buttonStyle={styles.button} title="Etkinliğe Katıl.." onPress={() => this.props.toggleModal()}/>
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
        height: 270
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
		backgroundColor: '#304e86',
		color: 'white',
		fontSize: 12,
        borderRadius: 30,
        marginTop: 15,
        marginBottom: 55
	}
});
