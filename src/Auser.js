import React, { Component } from 'react'
import {
    Text, View, StyleSheet, StatusBar, ScrollView,
    TouchableOpacity, TextInput, Image, Modal, TouchableHighlight, Alert
} from 'react-native'
import { Container, Header, Content, Card, CardItem, Icon, Right, Body, Left, Badge } from 'native-base';
import MyIcon from 'react-native-vector-icons/MaterialIcons'
import usericon from './icon/coc.png'
import { withNavigation } from 'react-navigation'


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
                    <View style={{ marginVertical: 100, marginHorizontal: 80, backgroundColor: 'white', borderColor: '#ddd', borderWidth: 10 }}>
                        <View>
                            <Text>wow</Text>

                            <TouchableHighlight style={{ backgroundColor: 'red' }}
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <View style={{ backgroundColor: 'red', height: 24, borderRadius: 20, marginHorizontal: 135, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'white', marginBottom: 3, fontSize: 18 }}>Logout</Text>

                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <View style={{ flex: 1, backgroundColor: 'white', height: 40 }}>
                    <Header style={{ backgroundColor: 'white', height: 40, elevation: 0, }}>
                        <Text style={{ backgroundColor: '#43AB4A', height: 30, borderRadius: 20, top: 10, fontSize: 20, fontStyle: 'italic', color: '#fff' }} >   Account   </Text>
                    </Header>
                    <View style={{ marginTop: 20, marginHorizontal: 10, flex: 1, borderTopWidth: 2, borderColor: '#ddd' }}>
                        <View>
                        </View>
                        <View style={{ position: 'relative', flex: 1, flexDirection: 'row', marginTop: 10, }}>
                            <View >
                                <Image style={{ height: 80, width: 80, backgroundColor: 'red', borderRadius: 40, left: 10, borderWidth: 2, borderColor: '#43AB4A' }} source={usericon} />
                            </View>
                            <View style={{ flex: 1, left: 30, top: 15 }}>
                                <Text style={{ fontSize: 20, color: 'black' }}>User</Text>
                                <Text style={{ marginTop: 5, color: 'black' }}>90179172012</Text>
                            </View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Useredit') }}>
                                <MyIcon name='border-color' style={{ color: '#43AB4A', fontSize: 26, top: 18, right: 10 }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flex: 3, backgroundColor: 'white', marginHorizontal: 10 }}>
                        <Content>
                            <Card >
                                <TouchableOpacity style={{ borderBottomWidth: 1, borderColor: '#ddd' }}>
                                    <CardItem>
                                        <Left>
                                            <MyIcon active style={{ fontSize: 16 }} name="border-color" />
                                        </Left>
                                        <Body style={{ left: -80 }}>
                                            <Text>Edit Account</Text>
                                        </Body>
                                        <Right>
                                            <Icon name="arrow-forward" />
                                        </Right>
                                    </CardItem>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ borderBottomWidth: 1, borderColor: '#ddd' }}>
                                    <CardItem>
                                        <Left>
                                            <MyIcon active style={{ fontSize: 16 }} name="card-travel" />
                                        </Left>
                                        <Body style={{ left: -80 }}>
                                            <Text>Bussines</Text>
                                        </Body>
                                        <Right>
                                            <Icon name="arrow-forward" />
                                        </Right>
                                    </CardItem>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ borderBottomWidth: 1, borderColor: '#ddd' }}>
                                    <CardItem>
                                        <Left>
                                            <MyIcon active style={{ fontSize: 16 }} name="supervisor-account" />
                                        </Left>
                                        <Body style={{ left: -80 }}>
                                            <Text>Hiring Patner</Text>
                                        </Body>
                                        <Right>
                                            <Icon name="arrow-forward" />
                                        </Right>
                                    </CardItem>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ borderBottomWidth: 1, borderColor: '#ddd' }}>
                                    <CardItem>
                                        <Left>
                                            <MyIcon active style={{ fontSize: 16 }} name="thumbs-up-down" />
                                        </Left>
                                        <Body style={{ left: -80 }}>
                                            <Text>Feedback</Text>
                                        </Body>
                                        <Right>
                                            <Icon name="arrow-forward" />
                                        </Right>
                                    </CardItem>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ borderBottomWidth: 1, borderColor: '#ddd' }}>
                                    <CardItem>
                                        <Left>
                                            <MyIcon active style={{ fontSize: 16 }} name="room" />
                                        </Left>
                                        <Body style={{ left: -80 }}>
                                            <Text>About Us</Text>
                                        </Body>
                                        <Right>
                                            <Icon name="arrow-forward" />
                                        </Right>
                                    </CardItem>
                                </TouchableOpacity>
                            </Card>
                        </Content>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}>
                        </View>
                        <View style={{ backgroundColor: 'red', height: 24, borderRadius: 20, marginHorizontal: 135, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => {
                                this.setModalVisible(true);
                            }}>
                                <Text style={{ color: 'white', marginBottom: 3, fontSize: 18 }}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>

                        </View>
                    </View>

                </View>

            </View>
        )
    }
}

export default withNavigation(App);