import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight, StyleSheet, ScrollView, Image, Linking } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import settings from '../../../services/settings';
import HTML from 'react-native-render-html'

export default class CompanyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: {},
            id: 0,
            gallery: []
        };
    }

    componentDidMount() {
        this.setState({ val: this.props.navigation.state.params.val, id: this.props.navigation.state.params.id, gallery: this.props.navigation.state.params.val.galerisi });
    }

    render() {
        const { ...val } = this.state.val;
        return (
            <>
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
                                <Text style={[styles.headerItem, styles.headerText]}>{val.name}</Text>
                            </View>
                            <View style={styles.modalContainer}>
                                <View style={styles.imgBack}>
                                    <Image resizeMode="cover" source={{ uri: `${settings.imgUri}/resized/${val.img}` }} style={styles.img} />
                                </View>
                                <View style={{ justifyContent: 'center', width: '100%', backgroundColor: '#fff', minHeight: 95, alignItems: 'center', padding: 15, marginVertical: 10 }}>
                                    <Text style={styles.title}>{val.name}</Text>
                                </View>
                                <ScrollView style={{ flex: 1 }}>
                                    <View style={{ justifyContent: 'flex-start', width: '100%', backgroundColor: '#fff', minHeight: 95, alignItems: 'flex-start', padding: 30, borderBottomColor: '#9a9a9a', borderBottomWidth: 2 }}>
                                        <Text style={styles.titleText}>{val.label}</Text>
                                        <HTML style={styles.titleContentText} html={val.icerik}></HTML>
                                    </View>
                                </ScrollView>
                                <View style={{backgroundColor: '#fff', width: '100%', alignItems: 'center'}}>
                                    {
                                        this.state.gallery.map((val, key) => {
                                            return (
                                                <Image
                                                    key={key}
                                                    source={{
                                                        uri: `${settings.imgUri}/${val.img}`
                                                    }}
                                                    resizeMode='cover'
                                                    style={{ width: '100%', height: 200, margin: 0 }} />
                                            )
                                        })
                                    }
                                </View>
                                <Button buttonStyle={styles.button} title="Firmanın Konumuna Git..." onPress={() => Linking.openURL(`${val.map}`)} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                {
                    /* 
                        <View style={[styles.imgBack, { marginBottom: 0, marginTop: 0, position: 'relative', zIndex: 100000, backgroundColor: '#f3f3f3' }]}>
                            <Text style={{ margin: 15 }}>Galeri</Text>
                            <ScrollView style={{ height: 70, width: '100%' }} vertical={true}>
                                {
                                    this.state.gallery.map((val, key) => {
                                        return (
                                            <Image
                                                key={key}
                                                source={{
                                                    uri: `${settings.imgUri}/${val.img}`
                                                }}
                                                resizeMode='contain'
                                                style={{ width: '100%', height: 150 }} />
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                    */
                }
            </>
        );
    }
}

const styles = StyleSheet.create({
    modalView: {
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
        height: 190
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

