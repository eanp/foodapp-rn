import React, { Component } from 'react'
import {
    Text, View, StyleSheet, StatusBar, ScrollView,
    TouchableOpacity, TextInput, Image, Modal, TouchableHighlight, Alert
} from 'react-native'
import { Container, Header, Content, Card, CardItem, Icon, Right, Body, Left, Badge } from 'native-base';
import MyIcon from 'react-native-vector-icons/MaterialIcons'
import usericon from './icon/coc.png'


const styles = StyleSheet.create({})

class App extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            <View style={{ flex: 1, borderBottomWidth: 2, borderColor: '#ddd' }}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <View>
                        <View style={{ backgroundColor: 'red', height: 24, borderRadius: 20, marginHorizontal: 135, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => {
                                this.setModalVisible(false);
                            }}>
                                <Text style={{ color: 'white', marginBottom: 3, fontSize: 18 }}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <View style={{ flex: 1, backgroundColor: 'white', height: 40 }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}></View>

                        <View style={{ backgroundColor: 'red', height: 24, borderRadius: 20, marginHorizontal: 135, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => {
                                this.setModalVisible(true);
                            }}>
                                <Text style={{ color: 'white', marginBottom: 3, fontSize: 18 }}>Logout</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1 }}></View>
                    </View>

                </View>

            </View>
        )
    }
}

export default App