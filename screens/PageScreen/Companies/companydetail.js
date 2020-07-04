import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight, StyleSheet, ScrollView, Image } from 'react-native';
import { Icon, Button } from 'react-native-elements';

export default class CompanyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.modalView}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <TouchableHighlight
                                onPress={() => this.props.navigation.goBack()}
                                >
                                <Icon
                                    name='backspace'
                                    color='#000'
                                    style={styles.headerButton} />
                            </TouchableHighlight>
                            <Text style={[styles.headerItem, styles.headerText]}>Firmanın İsmi</Text>
                        </View>
                        <View style={styles.modalContainer}>
                            <View style={styles.imgBack}>
                                <Image source={{ uri: 'https://www.opet.com.tr/Files/Images/Campaign/637293886292328425_yakit_puan_header.png' }} style={styles.img} />
                            </View>
                            <View style={{ justifyContent: 'center', width: '100%', backgroundColor: '#fff', minHeight: 95, alignItems: 'center', padding: 15, marginVertical: 10 }}>
                                <Text style={styles.title}>Firmanın İsmi</Text>
                            </View>
                            <ScrollView style={{flex: 1}}>
                            <View style={{ justifyContent: 'flex-start', width: '100%', backgroundColor: '#fff', minHeight: 95, alignItems: 'flex-start', padding: 30, borderBottomColor: '#9a9a9a', borderBottomWidth: 2 }}>
                                    <Text style={styles.titleText}>Firma hakkında kısa bilgi...</Text>
                                    <Text style={styles.titleContentText}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus orci eget aliquam hendrerit. Curabitur mauris odio, dignissim nec vulputate porttitor, volutpat eget nisl. Ut at nibh sit amet lacus ultricies egestas eget vitae lacus. Donec nisl lacus, accumsan semper erat eget, ultricies imperdiet lorem. Cras quis cursus mi. Cras convallis libero eget lectus sagittis ultricies. Nullam maximus lobortis nisl vel mollis. Nullam dapibus mattis tincidunt. Suspendisse placerat tortor ligula. Ut iaculis tortor ut mauris iaculis vulputate. In quis maximus arcu.

                                        Sed feugiat gravida semper. Proin iaculis placerat nunc at venenatis. Donec at dolor vitae ex egestas tempor. Aliquam imperdiet nibh et lacus lobortis finibus quis a elit. Praesent in cursus metus, non pellentesque sem. Cras eu arcu molestie, porta nibh sit amet, mollis orci. In hac habitasse platea dictumst. Morbi quam felis, sodales ac tincidunt in, faucibus in augue. Nulla nec mauris eros. Nam mi mauris, elementum nec tortor et, interdum porttitor ipsum. Phasellus condimentum est ut massa pellentesque, nec efficitur metus sollicitudin.

                                        Vestibulum fermentum venenatis enim, sed varius est rhoncus et. Praesent ac posuere elit, nec sodales elit. Suspendisse sit amet ornare ligula. Duis eget tristique felis. Praesent et finibus mi, egestas accumsan orci. Nulla ut pharetra risus. Maecenas ut purus dolor. Quisque nec pulvinar sem. Pellentesque orci nunc, malesuada eget feugiat non, fermentum id ligula. Aliquam justo nisl, interdum et rutrum non, scelerisque ac ipsum. Nam in mattis lacus. Ut vel neque sem. In a ante eu ipsum sollicitudin sollicitudin. Duis justo nibh, sodales a tortor in, aliquam eleifend dolor. Proin imperdiet id ex rutrum finibus.
                                    </Text>
                                </View>
                            </ScrollView>
                            <Button buttonStyle={styles.button} title="Firmayı Takip Et.."/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: "white",
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
        color: '#000',
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
		backgroundColor: '#3b68e6',
		color: 'white',
		fontSize: 12,
        borderRadius: 30,
        marginTop: 15,
        marginBottom: 15
	}
});

