import React, { Component } from 'react'
import {
    Text, View, StyleSheet, StatusBar, ScrollView,
    TouchableOpacity, TextInput, Image
} from 'react-native'
import { Container, Header, Content, Card, CardItem, Icon, Right, Body, Left, Input, Badge } from 'native-base';
import MyIcon from 'react-native-vector-icons/MaterialIcons'
import usericon from './icon/coc.png'
import { withNavigation } from 'react-navigation';


const styles = StyleSheet.create({})

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'white', height: 40 }}>
                    <Header style={{ backgroundColor: 'white', height: 40, elevation: 0 }}>
                        <Text style={{ backgroundColor: '#43AB4A', height: 30, borderRadius: 20, top: 10, fontSize: 20, fontStyle: 'italic', color: '#fff' }} >   Account   </Text>
                    </Header>
                    <View style={{ marginTop: 20, marginHorizontal: 10, flex: 2, marginHorizontal: 10, borderBottomWidth: 1, borderColor: '#ddd' }}>
                        <View>
                        </View>
                        <View style={{ position: 'relative', flex: 1, flexDirection: 'row', backgroundColor: '', }}>
                            <View >
                                <Image style={{ height: 80, width: 80, backgroundColor: 'red', borderRadius: 40, left: 10, borderWidth: 2, borderColor: '#43AB4A' }} source={usericon} />
                            </View>
                            <View style={{ flex: 1, left: 30, top: 15 }}>
                                <Text style={{ fontSize: 20, color: 'black' }}>User</Text>
                                <Text style={{ marginTop: 5, color: 'black' }}>90179172012</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 1 }}>
                    </View>
                    <View style={{ flex: 5, backgroundColor: 'white', marginHorizontal: 10 }}>
                        <Content>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Text>Username</Text>
                                    </Left>
                                    <Body style={{ left: 10, height: 40, borderWidth: 1, borderRadius: 10, marginRight: 35, borderColor: '#ddd' }}>
                                        <Input placeholder='name' />
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Text>Password</Text>
                                    </Left>
                                    <Body style={{ left: 10, height: 40, borderWidth: 1, borderRadius: 10, marginRight: 35, borderColor: '#ddd' }}>
                                        <Input placeholder='password' />
                                    </Body>
                                </CardItem>
                            </Card>
                            <TouchableOpacity onPress={() => window.alert()}>
                                <CardItem style={{ backgroundColor: '#43AB4A', elevation: 10, marginTop: 30, height: 40, borderRadius: 50, marginHorizontal: 100, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 20, color: 'white' }}>Save</Text>
                                </CardItem>
                            </TouchableOpacity>
                        </Content>
                    </View>

                </View>

            </View>
        )
    }
}
