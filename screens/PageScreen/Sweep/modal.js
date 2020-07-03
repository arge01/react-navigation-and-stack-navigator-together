import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight, StyleSheet } from 'react-native';

export default class MyModalSweep extends Component {
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
                        <Text style={styles.modalText}>Hello World!</Text>

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => this.props.toggleModal() }
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalView: {
		position: 'absolute',
		marginTop: 25,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
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
		height: '100%'
	},
});
